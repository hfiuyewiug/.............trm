// Admin Dashboard Script
let trendChartInstance = null;
let deviceChartInstance = null;

// Initialize Clerk
async function initAdminClerk() {
    if (!window.Clerk) {
        console.error('Clerk JS not loaded');
        // Wait and retry
        setTimeout(initAdminClerk, 100);
        return;
    }

    try {
        await window.Clerk.load({
            appearance: {
                variables: {
                    colorPrimary: '#8338EC',
                    colorBackground: '#141226',
                    colorText: '#F5F5FA',
                    colorInputBackground: '#1D1A39',
                    colorInputText: '#F5F5FA',
                    borderRadius: '12px'
                }
            }
        });

        // Add login state listener
        window.Clerk.addListener(({ user }) => {
            checkAuth(user);
        });

        // Initial check
        checkAuth(window.Clerk.user);
    } catch (err) {
        console.error('Failed to load Clerk in admin:', err);
    }
}

// Check if user is authenticated and authorized as admin
function checkAuth(user) {
    const authOverlay = document.getElementById('admin-auth-overlay');
    const deniedOverlay = document.getElementById('admin-denied-overlay');
    const dashboardLayout = document.getElementById('admin-dashboard-layout');

    if (!window.Clerk || !window.Clerk.user) {
        // User not signed in
        dashboardLayout.style.display = 'none';
        deniedOverlay.style.display = 'none';
        authOverlay.style.display = 'flex';
        
        const container = document.getElementById('admin-signin-container');
        if (container && container.innerHTML === '') {
            window.Clerk.mountSignIn(container, {
                routing: 'hash',
                afterSignInUrl: '/admin'
            });
        }
    } else {
        // User signed in - check backend permission by attempting to load data
        loadDashboardData('7days');
    }
}

// Sign out utility for the access denied page
async function signOutAndRedirect() {
    if (window.Clerk) {
        await window.Clerk.signOut();
        window.location.reload();
    }
}

// Tab Switching logic
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Toggle Sidebar Active Class
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Toggle Tab Panes
        const tabName = link.getAttribute('data-tab');
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        document.getElementById(`tab-users`).classList.remove('active');
        document.getElementById(`tab-analytics`).classList.remove('active');
        
        const activePane = document.getElementById(`tab-${tabName}`);
        if (activePane) {
            activePane.classList.add('active');
        }
        
        // Load appropriate tab data
        if (tabName === 'users') {
            loadUsersData();
        } else if (tabName === 'analytics') {
            const activeFilter = document.querySelector('.filter-btn.active');
            loadDashboardData(activeFilter ? activeFilter.getAttribute('data-range') : '7days');
        }
    });
});

// Load Analytics Summary
async function loadDashboardData(range) {
    if (!window.Clerk || !window.Clerk.user) return;

    const authOverlay = document.getElementById('admin-auth-overlay');
    const deniedOverlay = document.getElementById('admin-denied-overlay');
    const dashboardLayout = document.getElementById('admin-dashboard-layout');

    try {
        const response = await fetch(`/api/admin/analytics?range=${range}`, {
            method: 'GET',
            headers: {
                'x-clerk-session-id': window.Clerk.session.id,
                'x-clerk-user-id': window.Clerk.user.id
            }
        });

        if (!response.ok) {
            if (response.status === 403) {
                // Access Denied: Hide other layouts, show Denied Overlay
                if (authOverlay) authOverlay.style.display = 'none';
                if (dashboardLayout) dashboardLayout.style.display = 'none';
                
                if (deniedOverlay) {
                    const errorText = deniedOverlay.querySelector('p');
                    if (errorText) {
                        const email = window.Clerk.user.primaryEmailAddress ? window.Clerk.user.primaryEmailAddress.emailAddress : '';
                        errorText.innerHTML = `Your account (<strong>${escapeHtml(email)}</strong>) does not have administrator permissions to view this dashboard.`;
                    }
                    deniedOverlay.style.display = 'flex';
                }
                return;
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Authorized: Hide overlays and show dashboard layout
        if (authOverlay) authOverlay.style.display = 'none';
        if (deniedOverlay) deniedOverlay.style.display = 'none';
        if (dashboardLayout) dashboardLayout.style.display = 'block';

        // Mount user button if not already mounted
        const userBtn = document.getElementById('admin-user-btn');
        if (userBtn && userBtn.innerHTML === '') {
            window.Clerk.mountUserButton(userBtn, {
                afterSignOutUrl: '/'
            });
        }

        renderAnalytics(data);
    } catch (err) {
        console.error('[Fetch Analytics Failure]', err);
    }
}

// Render values and charts inside Analytics Tab
function renderAnalytics(data) {
    // Fill Cards
    document.getElementById('stat-total-users').textContent = data.clerk_total_users || 0;
    document.getElementById('stat-daily-visitors').textContent = data.daily_visitors || 0;
    document.getElementById('stat-total-visits').textContent = data.total_visits || 0;
    document.getElementById('stat-active-users').textContent = data.active_users || 0;

    // Time Formatting
    const avgSec = data.average_time_spent || 0;
    let timeStr = `${avgSec}s`;
    if (avgSec >= 60) {
        const mins = Math.floor(avgSec / 60);
        const secs = Math.round(avgSec % 60);
        timeStr = `${mins}m ${secs}s`;
    }
    document.getElementById('stat-avg-duration').textContent = timeStr;

    // Popular Pages Table
    const pagesTbody = document.querySelector('#table-popular-pages tbody');
    pagesTbody.innerHTML = '';
    
    const pages = data.most_visited_pages || [];
    if (pages.length === 0) {
        pagesTbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted);">No page views logged in this range</td></tr>`;
    } else {
        pages.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><code>${escapeHtml(p.path)}</code></td>
                <td><strong>${p.views}</strong></td>
                <td>${p.unique_visitors}</td>
            `;
            pagesTbody.appendChild(tr);
        });
    }

    // Trend Chart (Line Chart)
    const trendCtx = document.getElementById('trendChart').getContext('2d');
    const trendLabels = data.trends ? data.trends.labels : [];
    const trendVisits = data.trends ? data.trends.visits : [];
    const trendVisitors = data.trends ? data.trends.visitors : [];

    if (trendChartInstance) {
        trendChartInstance.destroy();
    }

    trendChartInstance = new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: trendLabels,
            datasets: [
                {
                    label: 'Page Views (Visits)',
                    data: trendVisits,
                    borderColor: '#8338EC',
                    backgroundColor: 'rgba(131, 56, 236, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'Unique Visitors',
                    data: trendVisitors,
                    borderColor: '#00F0FF',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#F5F5FA', font: { family: 'Outfit' } }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#9E9DB2', font: { family: 'Outfit' } }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#9E9DB2', font: { family: 'Outfit' } }
                }
            }
        }
    });

    // Device Chart (Pie Chart)
    const deviceCtx = document.getElementById('deviceChart').getContext('2d');
    const devices = data.device_types || [];
    const deviceLabels = devices.map(d => d.device);
    const deviceCounts = devices.map(d => d.count);

    if (deviceChartInstance) {
        deviceChartInstance.destroy();
    }

    deviceChartInstance = new Chart(deviceCtx, {
        type: 'doughnut',
        data: {
            labels: deviceLabels.length > 0 ? deviceLabels : ['No Data'],
            datasets: [{
                data: deviceCounts.length > 0 ? deviceCounts : [1],
                backgroundColor: ['#8338EC', '#FF007F', '#00F0FF', '#00FF88', 'rgba(255, 255, 255, 0.1)'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#F5F5FA', font: { family: 'Outfit' } }
                }
            }
        }
    });
}

// Load Users accounts list
async function loadUsersData() {
    if (!window.Clerk || !window.Clerk.user) return;

    try {
        const response = await fetch('/api/admin/users', {
            method: 'GET',
            headers: {
                'x-clerk-session-id': window.Clerk.session.id,
                'x-clerk-user-id': window.Clerk.user.id
            }
        });

        if (!response.ok) throw new Error('Failed to load users');

        const users = await response.json();
        const tbody = document.querySelector('#table-users tbody');
        tbody.innerHTML = '';

        if (users.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No users registered in Clerk</td></tr>`;
            return;
        }

        users.forEach(u => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${escapeHtml(u.name)}</strong></td>
                <td><a href="mailto:${escapeHtml(u.email)}" style="color: var(--accent); text-decoration: none;">${escapeHtml(u.email)}</a></td>
                <td>${formatDate(u.createdAt)}</td>
                <td>${u.lastSignInAt ? formatDate(u.lastSignInAt) : 'Never'}</td>
                <td><code>${escapeHtml(u.id)}</code></td>
            `;
            tbody.appendChild(tr);
        });
    } catch (err) {
        console.error('[Fetch Users Failure]', err);
    }
}

// Date filters buttons click handlers
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const range = btn.getAttribute('data-range');
        loadDashboardData(range);
    });
});

// Helper formatting utilities
function formatDate(timestamp) {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Start Initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminClerk);
} else {
    initAdminClerk();
}

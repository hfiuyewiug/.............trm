(function() {
    // Generate session ID if not exists
    let sessionId = sessionStorage.getItem('we_session_id');
    if (!sessionId) {
        sessionId = crypto.randomUUID ? crypto.randomUUID() : generateUUID();
        sessionStorage.setItem('we_session_id', sessionId);
    }

    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // Detect device, browser, OS
    const ua = navigator.userAgent;
    let deviceType = 'Desktop';
    if (/tablet|ipad|playbook|silk/i.test(ua)) {
        deviceType = 'Tablet';
    } else if (/mobile|iphone|ipod|android|blackberry|iemobile|opera mini/i.test(ua)) {
        deviceType = 'Mobile';
    }

    function getBrowserOS() {
        let browser = 'Unknown';
        let os = 'Unknown';

        if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
        else if (ua.indexOf('SamsungBrowser') > -1) browser = 'Samsung Browser';
        else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) browser = 'Opera';
        else if (ua.indexOf('Trident') > -1) browser = 'Internet Explorer';
        else if (ua.indexOf('Edge') > -1 || ua.indexOf('Edg') > -1) browser = 'Edge';
        else if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
        else if (ua.indexOf('Safari') > -1) browser = 'Safari';

        if (ua.indexOf('Windows NT') > -1) os = 'Windows';
        else if (ua.indexOf('Mac OS X') > -1) os = 'macOS';
        else if (ua.indexOf('Android') > -1) os = 'Android';
        else if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1) os = 'iOS';
        else if (ua.indexOf('Linux') > -1) os = 'Linux';

        return { browser, os };
    }

    const { browser, os } = getBrowserOS();

    // Helper to send tracking data to the backend
    function sendTracking(path, title) {
        const payload = {
            sessionId: sessionId,
            path: path,
            title: title || document.title,
            referrer: document.referrer || '',
            deviceType: deviceType,
            browser: browser,
            os: os
        };

        // If Clerk user is available, send user info too
        if (window.Clerk && window.Clerk.user) {
            payload.userId = window.Clerk.user.id;
            payload.userEmail = window.Clerk.user.primaryEmailAddress ? window.Clerk.user.primaryEmailAddress.emailAddress : '';
            payload.userName = window.Clerk.user.fullName || '';
        }

        fetch('/api/analytics/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(err => console.error('[Analytics] Failed to send tracking:', err));
    }

    // Send heartbeat
    function sendHeartbeat() {
        fetch('/api/analytics/heartbeat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId })
        }).catch(err => console.error('[Analytics] Failed to send heartbeat:', err));
    }

    // Send identify when login changes
    function sendIdentify(user) {
        if (!user) return;
        const payload = {
            sessionId: sessionId,
            userId: user.id,
            userEmail: user.primaryEmailAddress ? user.primaryEmailAddress.emailAddress : '',
            userName: user.fullName || ''
        };
        fetch('/api/analytics/identify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(err => console.error('[Analytics] Failed to send identity:', err));
    }

    // Send initial page load view (Home)
    let isFirstLoad = true;
    sendTracking('/', 'Home');

    // Start heartbeat timer
    let heartbeatInterval = setInterval(sendHeartbeat, 15000);

    // Visibility change heartbeat
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            sendHeartbeat();
        }
    });

    // Page unload final heartbeat
    window.addEventListener('beforeunload', () => {
        if (navigator.sendBeacon) {
            navigator.sendBeacon('/api/analytics/heartbeat', JSON.stringify({ sessionId }));
        } else {
            sendHeartbeat();
        }
    });

    // Set up dynamic page view hooks
    function setupHooks() {
        if (window.renderHome) {
            const orig = window.renderHome;
            window.renderHome = function(...args) {
                if (isFirstLoad) {
                    isFirstLoad = false;
                } else {
                    sendTracking('/', 'Home');
                }
                return orig.apply(this, args);
            };
        }

        if (window.renderDestination) {
            const orig = window.renderDestination;
            window.renderDestination = function(id, ...args) {
                isFirstLoad = false;
                sendTracking(`/destination/${id}`, `Destination: ${id}`);
                return orig.apply(this, args);
            };
        }

        if (window.renderCategoryPage) {
            const orig = window.renderCategoryPage;
            window.renderCategoryPage = function(categoryId, cityId, ...args) {
                isFirstLoad = false;
                sendTracking(`/category/${cityId || 'default'}/${categoryId}`, `Category: ${cityId || 'default'} - ${categoryId}`);
                return orig.apply(this, args);
            };
        }

        if (window.renderFoodCategoryPage) {
            const orig = window.renderFoodCategoryPage;
            window.renderFoodCategoryPage = function(cityId, ...args) {
                isFirstLoad = false;
                sendTracking(`/food/${cityId}`, `Food Category: ${cityId}`);
                return orig.apply(this, args);
            };
        }

        if (window.renderGlobalFavoritesPage) {
            const orig = window.renderGlobalFavoritesPage;
            window.renderGlobalFavoritesPage = function(...args) {
                isFirstLoad = false;
                sendTracking('/favorites', 'Global Favorites');
                return orig.apply(this, args);
            };
        }

        // Listen for clicks on modals / drawers
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[id]');
            if (target) {
                const id = target.id;
                if (id.startsWith('nav-') || id.startsWith('menu-')) {
                    const pageName = id.replace('nav-', '').replace('menu-', '');
                    if (['about-us', 'support', 'terms-conditions', 'updates', 'more-info'].includes(pageName)) {
                        sendTracking(`/modal/${pageName}`, `Modal: ${pageName}`);
                    }
                }
            }
        });

        // Setup Clerk integration
        if (window.Clerk) {
            // If user is already loaded
            if (window.Clerk.user) {
                sendIdentify(window.Clerk.user);
                setupAdminLink(window.Clerk.user);
            }
            // Listen to auth changes
            window.Clerk.addListener(({ user }) => {
                if (user) {
                    sendIdentify(user);
                    // Add admin navbar link if user is admin
                    setupAdminLink(user);
                } else {
                    removeAdminLink();
                }
            });
        }
    }

    function setupAdminLink(user) {
        const userEmail = user.primaryEmailAddress ? user.primaryEmailAddress.emailAddress.toLowerCase() : '';
        const isAdmin = userEmail === 'gowtham@example.com' || userEmail === 'yadhur689@gmail.com' || (user.publicMetadata && user.publicMetadata.role === 'admin');
        
        if (isAdmin) {
            // Navbar link
            let adminNavLink = document.getElementById('nav-admin-link');
            if (!adminNavLink) {
                const navLinks = document.querySelector('.nav-links');
                if (navLinks) {
                    adminNavLink = document.createElement('a');
                    adminNavLink.href = '/admin';
                    adminNavLink.className = 'nav-link';
                    adminNavLink.id = 'nav-admin-link';
                    adminNavLink.textContent = 'Admin';
                    navLinks.appendChild(adminNavLink);
                }
            }

            // Drawer menu link
            let adminDrawerLink = document.getElementById('menu-admin');
            if (!adminDrawerLink) {
                const drawerMenuList = document.querySelector('.drawer-menu-list');
                if (drawerMenuList) {
                    const li = document.createElement('li');
                    li.className = 'drawer-menu-item';
                    li.id = 'menu-admin-item';
                    li.style.setProperty('--item-index', '5');
                    li.innerHTML = `
                        <a href="/admin" id="menu-admin">
                            <span class="menu-item-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="9" y1="3" x2="9" y2="21"></line>
                                    <line x1="9" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="15" x2="21" y2="15"></line>
                                </svg>
                            </span>
                            <span class="menu-item-text">Admin Dashboard</span>
                            <span class="menu-item-arrow">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </span>
                        </a>
                    `;
                    drawerMenuList.appendChild(li);
                }
            }
        } else {
            removeAdminLink();
        }
    }

    function removeAdminLink() {
        const adminNavLink = document.getElementById('nav-admin-link');
        if (adminNavLink) adminNavLink.remove();

        const adminDrawerItem = document.getElementById('menu-admin-item');
        if (adminDrawerItem) {
            adminDrawerItem.remove();
        }
    }

    // Initialize tracking hooks when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // Small delay to allow scripts.v4.js to declare variables globally
            setTimeout(setupHooks, 100);
        });
    } else {
        setTimeout(setupHooks, 100);
    }
})();

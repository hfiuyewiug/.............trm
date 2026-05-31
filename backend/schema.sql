-- database schema for Google Places Details and Reviews cache
-- This structure is compatible with SQLite, PostgreSQL, or MySQL.

-- Table for caching core Place details
CREATE TABLE IF NOT EXISTS google_places_cache (
    place_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    formatted_address TEXT,
    formatted_phone_number VARCHAR(50),
    website TEXT,
    rating DECIMAL(3, 2),
    user_ratings_total INTEGER,
    weekday_text TEXT,               -- Stored as JSON or serialized array
    photos_references TEXT,          -- Stored as comma-separated values or JSON array
    last_cached TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for caching individual User Reviews associated with a Place
CREATE TABLE IF NOT EXISTS google_reviews_cache (
    review_id VARCHAR(255) PRIMARY KEY,
    place_id VARCHAR(255) REFERENCES google_places_cache(place_id) ON DELETE CASCADE,
    author_name VARCHAR(255) NOT NULL,
    profile_photo_url TEXT,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    relative_time_description VARCHAR(100),
    review_text TEXT,
    review_time BIGINT,              -- Epoch timestamp
    last_cached TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance lookups
CREATE INDEX IF NOT EXISTS idx_reviews_place ON google_reviews_cache(place_id);

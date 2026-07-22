-- SQL Migration Script for Supabase PostgreSQL Database
-- Schema for Golden Enterprises (Pages, Blogs, Leads, Reviews, Services, Areas)

-- 1. Enum Types
CREATE TYPE page_status AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- 2. Services Table
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    icon VARCHAR(100) NOT NULL,
    priority INT DEFAULT 1
);

-- 3. Areas Table
CREATE TABLE IF NOT EXISTS areas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    city VARCHAR(255) DEFAULT 'Chennai',
    pincode VARCHAR(20),
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION
);

-- 4. Pages Table (Local SEO Landing Pages)
CREATE TABLE IF NOT EXISTS pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service VARCHAR(255) NOT NULL,
    area VARCHAR(255) NOT NULL,
    city VARCHAR(255) DEFAULT 'Chennai',
    slug VARCHAR(255) UNIQUE NOT NULL,
    status page_status DEFAULT 'PUBLISHED',
    hero_title TEXT NOT NULL,
    hero_subtitle TEXT NOT NULL,
    content_json JSONB NOT NULL,
    faq_json JSONB NOT NULL,
    schema_json JSONB NOT NULL,
    seo_title VARCHAR(255) NOT NULL,
    meta_description TEXT NOT NULL,
    keywords TEXT[] NOT NULL,
    word_count INT DEFAULT 2500,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Blogs Table
CREATE TABLE IF NOT EXISTS blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    status page_status DEFAULT 'PUBLISHED',
    published_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Leads Table
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    service VARCHAR(255),
    area VARCHAR(255),
    status VARCHAR(50) DEFAULT 'NEW',
    assigned_to VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name VARCHAR(255) NOT NULL,
    rating INT DEFAULT 5,
    review TEXT NOT NULL,
    service VARCHAR(255) NOT NULL,
    area VARCHAR(255) NOT NULL
);

-- Indexes for Ultra-Fast Querying & SEO Lookups
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_service_area ON pages(service, area);
CREATE INDEX IF NOT EXISTS idx_areas_slug ON areas(slug);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);

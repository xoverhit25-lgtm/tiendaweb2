-- Create products table for the store
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(12, 2) NOT NULL DEFAULT 0,
  description TEXT,
  category TEXT NOT NULL,
  slug TEXT NOT NULL,
  image TEXT,
  images TEXT[] DEFAULT '{}',
  rating DECIMAL(2, 1) DEFAULT 5.0,
  in_stock BOOLEAN DEFAULT true,
  stock TEXT DEFAULT 'high',
  is_featured BOOLEAN DEFAULT false,
  is_new BOOLEAN DEFAULT false,
  has_quantity_variants BOOLEAN DEFAULT false,
  has_flavor_variants BOOLEAN DEFAULT false,
  quantity_variants JSONB DEFAULT '[]',
  flavor_variants JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on category for faster filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read products (public store)
CREATE POLICY "Allow public read access" ON products
  FOR SELECT USING (true);

-- Allow authenticated users (admins) to insert products
CREATE POLICY "Allow authenticated insert" ON products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users (admins) to update products
CREATE POLICY "Allow authenticated update" ON products
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow authenticated users (admins) to delete products
CREATE POLICY "Allow authenticated delete" ON products
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_products_updated_at ON products;
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Remove app-level login requirements for the dashboard picker flow.
-- The UI intentionally exposes Customer and Admin dashboards without authentication.

ALTER TABLE public.orders
  ALTER COLUMN user_id DROP NOT NULL;

GRANT SELECT ON public.inventory_items TO anon;
GRANT SELECT ON public.pizza_varieties TO anon;
GRANT SELECT ON public.orders TO anon;
GRANT SELECT ON public.order_items TO anon;

GRANT INSERT, UPDATE, DELETE ON public.inventory_items TO anon;
GRANT INSERT, UPDATE, DELETE ON public.orders TO anon;
GRANT INSERT, UPDATE, DELETE ON public.order_items TO anon;

DROP POLICY IF EXISTS "anyone signed in reads inventory" ON public.inventory_items;
DROP POLICY IF EXISTS "anyone signed in can read inventory" ON public.inventory_items;
DROP POLICY IF EXISTS "anyone signed in reads varieties" ON public.pizza_varieties;
DROP POLICY IF EXISTS "admin manages inventory" ON public.inventory_items;
DROP POLICY IF EXISTS "user reads own orders" ON public.orders;
DROP POLICY IF EXISTS "user inserts own orders" ON public.orders;
DROP POLICY IF EXISTS "admin reads all orders" ON public.orders;
DROP POLICY IF EXISTS "admin updates orders" ON public.orders;
DROP POLICY IF EXISTS "user reads own order items" ON public.order_items;
DROP POLICY IF EXISTS "user inserts own order items" ON public.order_items;
DROP POLICY IF EXISTS "admin reads all order items" ON public.order_items;

CREATE POLICY "public reads inventory"
  ON public.inventory_items FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "public reads varieties"
  ON public.pizza_varieties FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "public reads orders"
  ON public.orders FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "public inserts orders"
  ON public.orders FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "public updates orders"
  ON public.orders FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

CREATE POLICY "public reads order items"
  ON public.order_items FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "public inserts order items"
  ON public.order_items FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "public manages inventory"
  ON public.inventory_items FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

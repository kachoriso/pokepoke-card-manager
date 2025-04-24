CREATE TABLE public.t_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT NOT NULL UNIQUE,
  email TEXT UNIQUE,
  password_hash TEXT NOT NULL,
  avatar_url TEXT,
  poke_poke_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.t_wishlist_items (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  pack_id TEXT,
  card_no TEXT,
  card_name TEXT,
  rarity TEXT,
  memo TEXT,
  done BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, pack_id, card_no)  
);

CREATE TABLE public.t_inventory_items (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  pack_id TEXT NOT NULL REFERENCES public.packs(id) ON DELETE CASCADE,
  card_no TEXT NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity >= 0),
  card_name TEXT NOT NULL,
  rarity TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, pack_id, card_no)
);

CREATE TABLE public.m_rarity (
  id BIGSERIAL PRIMARY KEY,
  rarity TEXT NOT NULL,
  cost INTEGER NOT NULL,
  cost_trade_power INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
);

CREATE TABLE public.m_packs (
  id BIGSERIAL PRIMARY KEY,
  pack_id TEXT NOT NULL,
  pack_name TEXT,
  pack_image_url TEXT,
  memo TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
);

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_users_timestamp
BEFORE UPDATE ON public.t_users
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_packs_timestamp
BEFORE UPDATE ON public.m_packs
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_wishlist_items_timestamp
BEFORE UPDATE ON public.t_wishlist_items
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_inventory_items_timestamp
BEFORE UPDATE ON public.t_inventory_items
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_rarity
BEFORE UPDATE ON public.m_rarity
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

create sequence "public"."m_packs_id_seq";

create sequence "public"."m_rarity_id_seq";

create sequence "public"."t_inventory_items_id_seq";

create sequence "public"."t_wishlist_items_id_seq";

create table "public"."m_packs" (
    "id" bigint not null default nextval('m_packs_id_seq'::regclass),
    "pack_id" text not null,
    "pack_name" text,
    "pack_image_url" text,
    "memo" text,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "pack_no" text
);


create table "public"."m_rarity" (
    "id" bigint not null default nextval('m_rarity_id_seq'::regclass),
    "rarity" text not null,
    "cost" integer not null,
    "cost_trade_power" integer not null,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now(),
    "rarity_id" text not null
);


create table "public"."t_inventory_items" (
    "id" bigint not null default nextval('t_inventory_items_id_seq'::regclass),
    "user_id" uuid not null,
    "pack_id" text not null,
    "card_no" text not null,
    "quantity" integer not null,
    "card_name" text not null,
    "rarity_id" text not null,
    "image_url" text,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);


create table "public"."t_users" (
    "id" uuid not null default uuid_generate_v4(),
    "username" text not null,
    "email" text,
    "password_hash" text not null,
    "avatar_url" text,
    "poke_poke_id" text,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);


create table "public"."t_wishlist_items" (
    "id" bigint not null default nextval('t_wishlist_items_id_seq'::regclass),
    "user_id" uuid not null,
    "pack_id" text not null,
    "card_no" text,
    "card_name" text,
    "rarity_id" text not null,
    "memo" text,
    "done" boolean default false,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);


alter sequence "public"."m_packs_id_seq" owned by "public"."m_packs"."id";

alter sequence "public"."m_rarity_id_seq" owned by "public"."m_rarity"."id";

alter sequence "public"."t_inventory_items_id_seq" owned by "public"."t_inventory_items"."id";

alter sequence "public"."t_wishlist_items_id_seq" owned by "public"."t_wishlist_items"."id";

CREATE UNIQUE INDEX m_packs_pack_id_key ON public.m_packs USING btree (pack_id);

CREATE UNIQUE INDEX m_packs_pkey ON public.m_packs USING btree (id);

CREATE UNIQUE INDEX m_rarity_pkey ON public.m_rarity USING btree (id);

CREATE UNIQUE INDEX m_rarity_rarity_id_key ON public.m_rarity USING btree (rarity_id);

CREATE UNIQUE INDEX t_inventory_items_pkey ON public.t_inventory_items USING btree (id);

CREATE UNIQUE INDEX t_inventory_items_user_id_pack_id_card_no_key ON public.t_inventory_items USING btree (user_id, pack_id, card_no);

CREATE UNIQUE INDEX t_users_email_key ON public.t_users USING btree (email);

CREATE UNIQUE INDEX t_users_pkey ON public.t_users USING btree (id);

CREATE UNIQUE INDEX t_users_username_key ON public.t_users USING btree (username);

CREATE UNIQUE INDEX t_wishlist_items_pkey ON public.t_wishlist_items USING btree (id);

CREATE UNIQUE INDEX t_wishlist_items_user_id_pack_id_card_no_key ON public.t_wishlist_items USING btree (user_id, pack_id, card_no);

alter table "public"."m_packs" add constraint "m_packs_pkey" PRIMARY KEY using index "m_packs_pkey";

alter table "public"."m_rarity" add constraint "m_rarity_pkey" PRIMARY KEY using index "m_rarity_pkey";

alter table "public"."t_inventory_items" add constraint "t_inventory_items_pkey" PRIMARY KEY using index "t_inventory_items_pkey";

alter table "public"."t_users" add constraint "t_users_pkey" PRIMARY KEY using index "t_users_pkey";

alter table "public"."t_wishlist_items" add constraint "t_wishlist_items_pkey" PRIMARY KEY using index "t_wishlist_items_pkey";

alter table "public"."m_packs" add constraint "m_packs_pack_id_key" UNIQUE using index "m_packs_pack_id_key";

alter table "public"."m_rarity" add constraint "m_rarity_rarity_id_key" UNIQUE using index "m_rarity_rarity_id_key";

alter table "public"."t_inventory_items" add constraint "t_inventory_items_pack_id_fkey" FOREIGN KEY (pack_id) REFERENCES m_packs(pack_id) not valid;

alter table "public"."t_inventory_items" validate constraint "t_inventory_items_pack_id_fkey";

alter table "public"."t_inventory_items" add constraint "t_inventory_items_quantity_check" CHECK ((quantity >= 0)) not valid;

alter table "public"."t_inventory_items" validate constraint "t_inventory_items_quantity_check";

alter table "public"."t_inventory_items" add constraint "t_inventory_items_rarity_id_fkey" FOREIGN KEY (rarity_id) REFERENCES m_rarity(rarity_id) not valid;

alter table "public"."t_inventory_items" validate constraint "t_inventory_items_rarity_id_fkey";

alter table "public"."t_inventory_items" add constraint "t_inventory_items_user_id_fkey" FOREIGN KEY (user_id) REFERENCES t_users(id) ON DELETE CASCADE not valid;

alter table "public"."t_inventory_items" validate constraint "t_inventory_items_user_id_fkey";

alter table "public"."t_inventory_items" add constraint "t_inventory_items_user_id_pack_id_card_no_key" UNIQUE using index "t_inventory_items_user_id_pack_id_card_no_key";

alter table "public"."t_users" add constraint "t_users_email_key" UNIQUE using index "t_users_email_key";

alter table "public"."t_users" add constraint "t_users_username_key" UNIQUE using index "t_users_username_key";

alter table "public"."t_wishlist_items" add constraint "t_wishlist_items_pack_id_fkey" FOREIGN KEY (pack_id) REFERENCES m_packs(pack_id) not valid;

alter table "public"."t_wishlist_items" validate constraint "t_wishlist_items_pack_id_fkey";

alter table "public"."t_wishlist_items" add constraint "t_wishlist_items_rarity_id_fkey" FOREIGN KEY (rarity_id) REFERENCES m_rarity(rarity_id) not valid;

alter table "public"."t_wishlist_items" validate constraint "t_wishlist_items_rarity_id_fkey";

alter table "public"."t_wishlist_items" add constraint "t_wishlist_items_user_id_fkey" FOREIGN KEY (user_id) REFERENCES t_users(id) ON DELETE CASCADE not valid;

alter table "public"."t_wishlist_items" validate constraint "t_wishlist_items_user_id_fkey";

alter table "public"."t_wishlist_items" add constraint "t_wishlist_items_user_id_pack_id_card_no_key" UNIQUE using index "t_wishlist_items_user_id_pack_id_card_no_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.trigger_set_timestamp()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$function$
;

grant delete on table "public"."m_packs" to "anon";

grant insert on table "public"."m_packs" to "anon";

grant references on table "public"."m_packs" to "anon";

grant select on table "public"."m_packs" to "anon";

grant trigger on table "public"."m_packs" to "anon";

grant truncate on table "public"."m_packs" to "anon";

grant update on table "public"."m_packs" to "anon";

grant delete on table "public"."m_packs" to "authenticated";

grant insert on table "public"."m_packs" to "authenticated";

grant references on table "public"."m_packs" to "authenticated";

grant select on table "public"."m_packs" to "authenticated";

grant trigger on table "public"."m_packs" to "authenticated";

grant truncate on table "public"."m_packs" to "authenticated";

grant update on table "public"."m_packs" to "authenticated";

grant delete on table "public"."m_packs" to "service_role";

grant insert on table "public"."m_packs" to "service_role";

grant references on table "public"."m_packs" to "service_role";

grant select on table "public"."m_packs" to "service_role";

grant trigger on table "public"."m_packs" to "service_role";

grant truncate on table "public"."m_packs" to "service_role";

grant update on table "public"."m_packs" to "service_role";

grant delete on table "public"."m_rarity" to "anon";

grant insert on table "public"."m_rarity" to "anon";

grant references on table "public"."m_rarity" to "anon";

grant select on table "public"."m_rarity" to "anon";

grant trigger on table "public"."m_rarity" to "anon";

grant truncate on table "public"."m_rarity" to "anon";

grant update on table "public"."m_rarity" to "anon";

grant delete on table "public"."m_rarity" to "authenticated";

grant insert on table "public"."m_rarity" to "authenticated";

grant references on table "public"."m_rarity" to "authenticated";

grant select on table "public"."m_rarity" to "authenticated";

grant trigger on table "public"."m_rarity" to "authenticated";

grant truncate on table "public"."m_rarity" to "authenticated";

grant update on table "public"."m_rarity" to "authenticated";

grant delete on table "public"."m_rarity" to "service_role";

grant insert on table "public"."m_rarity" to "service_role";

grant references on table "public"."m_rarity" to "service_role";

grant select on table "public"."m_rarity" to "service_role";

grant trigger on table "public"."m_rarity" to "service_role";

grant truncate on table "public"."m_rarity" to "service_role";

grant update on table "public"."m_rarity" to "service_role";

grant delete on table "public"."t_inventory_items" to "anon";

grant insert on table "public"."t_inventory_items" to "anon";

grant references on table "public"."t_inventory_items" to "anon";

grant select on table "public"."t_inventory_items" to "anon";

grant trigger on table "public"."t_inventory_items" to "anon";

grant truncate on table "public"."t_inventory_items" to "anon";

grant update on table "public"."t_inventory_items" to "anon";

grant delete on table "public"."t_inventory_items" to "authenticated";

grant insert on table "public"."t_inventory_items" to "authenticated";

grant references on table "public"."t_inventory_items" to "authenticated";

grant select on table "public"."t_inventory_items" to "authenticated";

grant trigger on table "public"."t_inventory_items" to "authenticated";

grant truncate on table "public"."t_inventory_items" to "authenticated";

grant update on table "public"."t_inventory_items" to "authenticated";

grant delete on table "public"."t_inventory_items" to "service_role";

grant insert on table "public"."t_inventory_items" to "service_role";

grant references on table "public"."t_inventory_items" to "service_role";

grant select on table "public"."t_inventory_items" to "service_role";

grant trigger on table "public"."t_inventory_items" to "service_role";

grant truncate on table "public"."t_inventory_items" to "service_role";

grant update on table "public"."t_inventory_items" to "service_role";

grant delete on table "public"."t_users" to "anon";

grant insert on table "public"."t_users" to "anon";

grant references on table "public"."t_users" to "anon";

grant select on table "public"."t_users" to "anon";

grant trigger on table "public"."t_users" to "anon";

grant truncate on table "public"."t_users" to "anon";

grant update on table "public"."t_users" to "anon";

grant delete on table "public"."t_users" to "authenticated";

grant insert on table "public"."t_users" to "authenticated";

grant references on table "public"."t_users" to "authenticated";

grant select on table "public"."t_users" to "authenticated";

grant trigger on table "public"."t_users" to "authenticated";

grant truncate on table "public"."t_users" to "authenticated";

grant update on table "public"."t_users" to "authenticated";

grant delete on table "public"."t_users" to "service_role";

grant insert on table "public"."t_users" to "service_role";

grant references on table "public"."t_users" to "service_role";

grant select on table "public"."t_users" to "service_role";

grant trigger on table "public"."t_users" to "service_role";

grant truncate on table "public"."t_users" to "service_role";

grant update on table "public"."t_users" to "service_role";

grant delete on table "public"."t_wishlist_items" to "anon";

grant insert on table "public"."t_wishlist_items" to "anon";

grant references on table "public"."t_wishlist_items" to "anon";

grant select on table "public"."t_wishlist_items" to "anon";

grant trigger on table "public"."t_wishlist_items" to "anon";

grant truncate on table "public"."t_wishlist_items" to "anon";

grant update on table "public"."t_wishlist_items" to "anon";

grant delete on table "public"."t_wishlist_items" to "authenticated";

grant insert on table "public"."t_wishlist_items" to "authenticated";

grant references on table "public"."t_wishlist_items" to "authenticated";

grant select on table "public"."t_wishlist_items" to "authenticated";

grant trigger on table "public"."t_wishlist_items" to "authenticated";

grant truncate on table "public"."t_wishlist_items" to "authenticated";

grant update on table "public"."t_wishlist_items" to "authenticated";

grant delete on table "public"."t_wishlist_items" to "service_role";

grant insert on table "public"."t_wishlist_items" to "service_role";

grant references on table "public"."t_wishlist_items" to "service_role";

grant select on table "public"."t_wishlist_items" to "service_role";

grant trigger on table "public"."t_wishlist_items" to "service_role";

grant truncate on table "public"."t_wishlist_items" to "service_role";

grant update on table "public"."t_wishlist_items" to "service_role";

CREATE TRIGGER set_m_packs_timestamp BEFORE UPDATE ON public.m_packs FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_m_rarity BEFORE UPDATE ON public.m_rarity FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_t_inventory_items_timestamp BEFORE UPDATE ON public.t_inventory_items FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_t_users_timestamp BEFORE UPDATE ON public.t_users FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();

CREATE TRIGGER set_t_wishlist_items_timestamp BEFORE UPDATE ON public.t_wishlist_items FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();



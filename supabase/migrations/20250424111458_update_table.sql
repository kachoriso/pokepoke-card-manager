alter table "public"."t_inventory_items" drop constraint "t_inventory_items_pack_id_fkey";

alter table "public"."t_inventory_items" drop constraint "t_inventory_items_rarity_id_fkey";

alter table "public"."t_wishlist_items" drop constraint "t_wishlist_items_pack_id_fkey";

alter table "public"."t_wishlist_items" drop constraint "t_wishlist_items_rarity_id_fkey";

alter table "public"."m_packs" alter column "id" drop default;

alter table "public"."m_packs" alter column "id" set data type text using "id"::text;

alter table "public"."m_rarity" alter column "id" drop default;

alter table "public"."m_rarity" alter column "id" set data type text using "id"::text;

alter table "public"."t_wishlist_items" alter column "card_name" set not null;

alter table "public"."t_wishlist_items" alter column "card_no" set not null;

alter table "public"."t_inventory_items" add constraint "t_inventory_items_pack_id_fkey" FOREIGN KEY (pack_id) REFERENCES m_packs(id) not valid;

alter table "public"."t_inventory_items" validate constraint "t_inventory_items_pack_id_fkey";

alter table "public"."t_inventory_items" add constraint "t_inventory_items_rarity_id_fkey" FOREIGN KEY (rarity_id) REFERENCES m_rarity(id) not valid;

alter table "public"."t_inventory_items" validate constraint "t_inventory_items_rarity_id_fkey";

alter table "public"."t_wishlist_items" add constraint "t_wishlist_items_pack_id_fkey" FOREIGN KEY (pack_id) REFERENCES m_packs(id) not valid;

alter table "public"."t_wishlist_items" validate constraint "t_wishlist_items_pack_id_fkey";

alter table "public"."t_wishlist_items" add constraint "t_wishlist_items_rarity_id_fkey" FOREIGN KEY (rarity_id) REFERENCES m_rarity(id) not valid;

alter table "public"."t_wishlist_items" validate constraint "t_wishlist_items_rarity_id_fkey";



export interface WishlistItem {
    cardId: string;
    cardName: string;
    cardNo: string;
    packName: string;
    rarity: string;
    costMedal: number;
    memo?: string;
}

export interface FriendInventory {
    friendId: string;
    friendName: string;
    friendIconUrl?: string;
    holdings: {
        cardId: string;
        quantity: number
    }[];
}

export interface HolderInfo {
    friendId: string;
    friendName: string;
    friendIconUrl?: string;
    quantity: number;
}

export interface GroupedTradePossibility extends WishlistItem {
    holders: HolderInfo[];
}

export interface UserData {
    userId: string;
    userName: string;
    userIconUrl?: string;
    wishlist: WishlistItem[];
}
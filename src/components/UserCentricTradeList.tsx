import React, { useState, useMemo } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  Container,
  CssBaseline,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface WishlistItem {
  cardId: string;
  cardName: string;
  cardNo: string;
  packName: string;
  rarity: string;
  costMedal: number;
  memo?: string;
}

interface FriendInventory { friendId: string; friendName: string; friendIconUrl?: string; holdings: { cardId: string; quantity: number }[]; }
interface HolderInfo { friendId: string; friendName: string; friendIconUrl?: string; quantity: number; }
interface GroupedTradePossibility extends WishlistItem {
  holders: HolderInfo[];
}
interface UserData { userId: string; userName: string; userIconUrl?: string; wishlist: WishlistItem[]; }

// --- モックデータ ---
// ★ ユーザーごとの欲しいカードリスト (4人分)
const mockUserWishlists: UserData[] = [
  {
    userId: 'user_A',
    userName: 'あなた',
    wishlist: [
      { cardId: 'sv1a-079', cardName: 'ピカチュウ', cardNo: '079/073', packName: '強化拡張パック Pokémon GO', rarity: 'AR', costMedal: 50, memo: 'イラストが好き' },
      { cardId: 'sv4k-052', cardName: 'リザードンex', cardNo: '052/066', packName: '古代の咆哮', rarity: 'SR', costMedal: 200 },
      { cardId: 'sv5m-071', cardName: 'ミュウex', cardNo: '071/071', packName: 'サイバージャッジ', rarity: 'UR', costMedal: 300, memo: 'デッキに入れたい' },
    ],
  },
  {
    userId: 'user_B',
    userName: 'サトシ',
    userIconUrl: '/path/to/satoshi_icon.png',
    wishlist: [
      { cardId: 'sv5m-071', cardName: 'ミュウex', cardNo: '071/071', packName: 'サイバージャッジ', rarity: 'UR', costMedal: 300 },
      { cardId: 'sv3-131', cardName: 'サーナイトex', cardNo: '131/108', packName: '黒炎の支配者', rarity: 'SAR', costMedal: 250, memo: '高騰中？' },
    ],
  },
  {
    userId: 'user_C',
    userName: 'カスミ',
    wishlist: [
      { cardId: 'sv1a-079', cardName: 'ピカチュウ', cardNo: '079/073', packName: '強化拡張パック Pokémon GO', rarity: 'AR', costMedal: 50 },
    ],
  },
  {
    userId: 'user_D',
    userName: 'タケシ',
    userIconUrl: '/path/to/takeshi_icon.png',
    wishlist: [
      { cardId: 'sv4k-052', cardName: 'リザードンex', cardNo: '052/066', packName: '古代の咆哮', rarity: 'SR', costMedal: 200 },
      { cardId: 'another-rare-card', cardName: 'ふしぎなアメ', cardNo: '123/456', packName: 'サンプルパック', rarity: 'U', costMedal: 10 },
    ],
  },
];
const mockFriendInventories: FriendInventory[] = [
  { friendId: 'user_A', friendName: 'あなた', holdings: [] },
  { friendId: 'user_B', friendName: 'サトシ', friendIconUrl: '/path/to/satoshi_icon.png', holdings: [{ cardId: 'sv1a-079', quantity: 2 }, { cardId: 'sv4k-052', quantity: 1 }] },
  { friendId: 'user_C', friendName: 'カスミ', holdings: [{ cardId: 'sv1a-079', quantity: 1 }, { cardId: 'sv5m-071', quantity: 3 }] },
  { friendId: 'user_D', friendName: 'タケシ', friendIconUrl: '/path/to/takeshi_icon.png', holdings: [{ cardId: 'sv4k-052', quantity: 1 }, { cardId: 'sv3-131', quantity: 1 }] },
];

export const UserCentricTradeList: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const selectedUserData = mockUserWishlists[selectedTab];

  const groupedData = useMemo((): GroupedTradePossibility[] => {
    if (!selectedUserData) return [];
    const otherFriendsInventories = mockFriendInventories.filter(friend => friend.friendId !== selectedUserData.userId);
    return selectedUserData.wishlist.map(wishItem => {
      const holders: HolderInfo[] = [];
      otherFriendsInventories.forEach(friend => {
        const holding = friend.holdings.find(h => h.cardId === wishItem.cardId);
        if (holding && holding.quantity > 0) { holders.push({ friendId: friend.friendId, friendName: friend.friendName, friendIconUrl: friend.friendIconUrl, quantity: holding.quantity }); }
      });
      return { ...wishItem, holders: holders };
    });
  }, [selectedUserData]);

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ポケポケ トレードリスト
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => { console.log('Menu icon clicked!'); }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            aria-label="User wishlist tabs"
            indicatorColor="primary"
            textColor="primary"
          >
            {mockUserWishlists.map((user, index) => (
              <Tab
                label={user.userName}
                key={user.userId}
                id={`user-tab-${index}`}
                aria-controls={`user-tabpanel-${index}`}
                iconPosition="start"
                sx={{ flexGrow: 1, textTransform: 'none', padding: '12px 8px', minWidth: 0 }}
              />
            ))}
          </Tabs>
        </Box>
        <Container maxWidth="md" sx={{ flexGrow: 1, overflowY: 'auto', padding: { xs: 1, sm: 2 }, marginTop: 0 }}>
          <Typography variant="h6" component="h2" gutterBottom sx={{ marginTop: 2 }}>
            {selectedUserData?.userName} の欲しいカードリスト
          </Typography>
          {groupedData.length > 0 ? groupedData.map((group) => (
            <Accordion key={group.cardId} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${group.cardId}-content`}
                id={`panel-${group.cardId}-header`}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginRight: 1 }}>
                  <Typography variant="body1" component="div" sx={{ fontWeight: 'medium' }}>
                    {group.cardName}
                    <Typography component="span" variant="body2" color="text.secondary" sx={{ marginLeft: 1 }}>
                      (No.{group.cardNo})
                    </Typography>
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.2 }}>
                    {group.packName}
                  </Typography>
                </Box>
                {group.holders.length > 0 && (
                  <Chip label={`${group.holders.length}人が所持`} size="small" sx={{ marginLeft: 1 }} />
                )}
              </AccordionSummary>
              <AccordionDetails sx={{ paddingTop: 1, paddingBottom: 2, paddingX: 2 }}>
                <Box sx={{ marginBottom: 1.5 }}>
                  <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                    <span style={{ fontWeight: 500, minWidth: '80px', display: 'inline-block' }}>レアリティ:</span> {group.rarity}
                  </Typography>
                  <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                    <span style={{ fontWeight: 500, minWidth: '80px', display: 'inline-block' }}>消費メダル:</span> {group.costMedal}
                  </Typography>
                  {group.memo && (
                    <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ fontWeight: 500, minWidth: '80px', display: 'inline-block', marginTop: '2px' }}>メモ:</span>
                      <span style={{ fontStyle: 'italic' }}>{group.memo}</span>
                    </Typography>
                  )}
                </Box>

                {group.holders.length > 0 && <Divider sx={{ marginBottom: 1.5 }} />}

                {group.holders.length > 0 && (
                  <>
                    <Typography variant="subtitle2" sx={{ marginBottom: 0.5 }}>所持しているフレンド:</Typography>
                    <List dense sx={{ width: '100%', padding: 0 }}>
                      {group.holders.map((holder) => (
                        <ListItem key={holder.friendId} disableGutters>
                          <ListItemAvatar sx={{ minWidth: 46 }}>
                            <Avatar sx={{ width: 30, height: 30 }} alt={holder.friendName} src={holder.friendIconUrl}>
                              {!holder.friendIconUrl && holder.friendName.charAt(0)}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={holder.friendName}
                            secondary={`合計 ${holder.quantity} 枚所持`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </AccordionDetails>
            </Accordion>
          )) : (
            <Typography sx={{ textAlign: 'center', marginTop: 4 }}>{selectedUserData?.userName} は欲しいカードを登録していません。</Typography>
          )}
        </Container>
      </Box>
    </>
  );
};
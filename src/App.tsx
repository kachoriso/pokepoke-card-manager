import { Button, Typography, Container, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm"> {/* コンテンツの最大幅を設定 */}
      <Box
        sx={{
          marginTop: 8, // 上部のマージン
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          ようこそ！ Vercel へ！
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          これは React + TypeScript + MUI で作られたサイトです。
        </Typography>
        <Button variant="contained" color="primary" onClick={() => console.log('click!')}>
          クリックしてね
        </Button>
      </Box>
    </Container>
  );
}

export default App;
import { CssBaseline } from '@mui/material'; // MUIのベースラインとコンテナ
import { UserCentricTradeList } from './components/UserCentricTradeList';

function App() {
  return (
    <>
      <CssBaseline />
      <UserCentricTradeList />
    </>
  );
}

export default App; // App コンポーネントをデフォルトエクスポートする場合
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./layout/Layout";


import { createTheme, ThemeProvider } from "@mui/material";

import { purple } from "@mui/material/colors";
import StyledPaper from "./pages/StyledPaper";

const theme = createTheme({
    palette: {
      primary: 
      // ①
      {
        main: "#e91e63", 
      },
      // ②
      secondary:purple
    },
    typography:{
      fontFamily:"Quicksand",
      fontWeightLight:400,
      fontWeightRegular:500,
      fontWeightMedium:600,
      fontWeightBold:700,
    }

  },
);



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Notes />} />
              <Route  path="/create" element={<Create />} />
              <Route  path="/styledpaper" element={<StyledPaper />} />
            </Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;





// 構造: components オブジェクトには、Material-UI のコンポーネント名 (MuiButton, MuiAppBar など) をキーとして指定します。
// 各コンポーネントに以下のような設定を追加できます：
// defaultProps: デフォルトのプロパティを設定
// styleOverrides: デフォルトのスタイルを上書き
// variants: カスタムスタイルのバリアントを定義

// const theme = createTheme({
//   components: {
//     MuiButton: {
//       defaultProps: {
//         disableRipple: true, // Ripple効果を無効化
//       },
//       styleOverrides: {
//         root: {
//           textTransform: 'none', // テキスト変換を無効化（小文字にそのまま表示）
//           padding: '12px 24px',  // ボタンのパディングを調整
//         },
//       },
//       variants: [
//         {
//           props: { variant: 'dashed' },
//           style: {
//             border: '1px dashed gray', // カスタムバリアントのスタイル
//           },
//         },
//       ],
//     },
//   },
// });

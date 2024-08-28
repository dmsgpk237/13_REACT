import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './layouts/Layout';
import MyPage from './pages/MyPage';
import Main from './pages/Main';
import Login from './pages/Login';
import Error from './pages/Error';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='myPage' element={<MyPage/>}/>
          <Route path='*' element={<Error/>}/>
          {/* 404 error와 관련된 페이지 추가 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

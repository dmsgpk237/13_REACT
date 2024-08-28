import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Info from './pages/Info';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Layout from './layout/Layout';
import MenuDetails from './pages/MenuDetails';
import MenuSearchResult from './pages/MenuSearchResult';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='main' element={<Main/>}/>
            <Route path='info' element={<Info/>}/>
            <Route path='menu'>
              <Route index element={<Menu/>}/>
              {/* :menuCode = pathVariable 처리(값전달, 상세목록에 많이 사용함) */}
              <Route path=":menuCode" element={<MenuDetails/>}/>
              <Route path="search" element={<MenuSearchResult/>}/>
            </Route>
            <Route/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

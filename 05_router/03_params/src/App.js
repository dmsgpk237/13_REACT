import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Info from './pages/Info';
import Main from './pages/Main';
import MenuList from './pages/MenuList';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='info' element={<Info/>}/>
            <Route path='menuList' element={<MenuList/>}/>
            <Route/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

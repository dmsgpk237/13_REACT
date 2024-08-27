import Menu from "./pages/Menu";
// menu를 내보낼때 객체로 내보내기 때문에 구조분해할당으로 가져와야 한다.
import Main from "./pages/Main";
import About  from "./pages/About";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


// export : 컴포넌트를 다른 파일에서 사용하고 싶을 때 내보내는 역할
//          1) function 바로 옆에 붙이면 객체 형태로 묶어서 내보내기 때문에
//             import할 때 구조분해할당을 해줘야한다.
//          2) 하단에 export default [컴포넌트 이름]으로 사용할 대는 default로 지정하기 때문에
//             import 할 때 구조분해할당을 하지 않아도 된다. 
// improt : 외부에 있는 컴포넌트를 가져오는 역할
//          ./ : 현재 파일의 위치를 의미
//         ../ : 상위 폴더의 위치를 의미


// function App() {
//   return (
//     <>
//     <Main/>
//     <About/>
//     <Menu/>
//       <h1>잘 나오나요?</h1> 
//     </>
//   );
// }

/*
  라우팅
  : 어떤 요청을 어디로 안내 및 매핑을 할 것인지 정해놓고 진행하는 것
    리엑트에서는 요청에 따라 요청에 매핑된 컴포넌트를 렌더링한다.
    (페이지를 요청했을 때 해당하는 페이지를 반환하는 것-get요청으로 페이지 바로 보여준 것)

  BrowserRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
  Routes : Route들을 묶어주는 단위(컴포넌트)
  Route : url 요청 주소와 컴포넌트를 매핑해주는 단위(컴포넌트)
*/

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          {/* <Route index element={<Main/>} /> -> 위에 있는 코드와 동일함*/}
          <Route path='/main' element={<Main/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

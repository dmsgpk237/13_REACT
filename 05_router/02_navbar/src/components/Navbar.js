import {NavLink, Link} from 'react-router-dom'

function Navbar() {
    const activeStyle = {
        backgroundColor: 'pink',
    }

    return(
        <div>
            <ul>
                {/* 
                <li><a href={"/"}>Home</a></li>
                <li><a href={"/myPage"}>마이페이지</a></li>
                <li><a href={"/login"}>로그인</a></li> 
                -> 이렇게 보내면 페이지 자체를 새로요청하기 때문에 부분만 재요청하는 리엑트 기능을 사용하지 못함.
                */}

                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle : undefined}>Home</NavLink></li>
                <li><NavLink to="/myPage" style={({isActive}) => isActive? activeStyle : undefined}>마이페이지</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive? activeStyle : undefined}>로그인</NavLink></li> 

                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/myPage">마이페이지</Link></li>
                <li><Link to="/login">로그인</Link></li>  */}

            </ul>
        </div>
    )
}

export default Navbar;
import {NavLink} from 'react-router-dom'
function Navbar() {

    const activeStyle = {
        backgroundColor: 'red',
        color: 'white'
    }
    return(
        <>
        <ul>
            <li><NavLink to="/" style={({isActive}) => isActive? activeStyle : undefined}>Home</NavLink></li>
            <li><NavLink to="/info" style={({isActive}) => isActive? activeStyle : undefined}>소개</NavLink></li>
            <li><NavLink to="/menu" style={({isActive}) => isActive? activeStyle : undefined}>메뉴목록</NavLink></li>
        </ul>
        </>
    )
}

export default Navbar;
import {NavLink} from 'react-router-dom'

function Navbar(){

    const activeStyle = {
        backgroundColor: 'pink',
        color: 'navy'
    }

    return(
        <>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive? activeStyle: undefined}>Home Sweet Home</NavLink></li>
                <li><NavLink to="/myPage" style={({isActive}) => isActive? activeStyle: undefined}>My Page</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive? activeStyle: undefined}>Login</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar;
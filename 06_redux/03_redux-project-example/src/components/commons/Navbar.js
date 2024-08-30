import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <ul>
                <li><NavLink to='/'>메인페이지</NavLink></li>
                <li><NavLink to='/Pokemons'>포켓몬 목록 보기</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
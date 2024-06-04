import React from 'react';
import './Header.css';
function Header(){
    return(
        <header>
            <div id="one">
            <h3>LOGO</h3>
            <a href="target=_main">Login</a>
            <button class="b">Signup</button>
            </div>
        </header>
    );
}
export default Header;
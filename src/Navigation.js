import React from 'react';
import './Navigation.css';
function Navigation(){
    return(
        <nav>
            <div id="top">
                <a href="target=_main1" class="a">Overview</a>
                <a href="target=_main2" class="a">Curriculum</a>
                <a href="target=_main3" class="a">Refund</a>
                <a href="target=_main4" class="a">Testimonials</a>
            </div>
        </nav>
    );
}
export default Navigation;
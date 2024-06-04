import React from 'react';
import './Enroll.css';
import logo from './perk.png';
import logo1 from './plane.png';
import logo2 from './1a.png';
import logo3 from './1b.png';
import logo4 from './1c.png';
import logo5 from './1d.png';
function Enroll(){
    return(
        <div>
        <div id="intro">
        <div id="up"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJB6VLJ9_PmguH1_52p3-zWVzrnPiq1I4uCA&s" id="cap"></img><p id="in">&nbsp;An <b>IIT Delhi</b> Alumni initiative</p></div>
        <p id="below">
            <span class="one">Become an Expert in the</span><br></br>
            <span class="one">field of </span>
            <span class="two">Data Sciences</span><br></br>
            <span class="two">with 6 courses</span>
        </p>
        <p id="new"> A specially crafted Tech Kickstarter, <span id="three">with 5+ extensive online courses.</span></p>
        <div id="down">
            <div class="benefit"><img src={logo} alt="Logo" class="perk"></img><p class="text">Personal Mentorship</p></div>
            <div class="benefit"><img src={logo} alt="Logo" class="perk"></img><p class="text">Internship Assistance</p></div>
            <div class="benefit"><img src={logo} alt="Logo" class="perk"></img><p class="text">Industry Certified Courses</p></div>
        </div>
        <div id="end">
            <button class="enroll">Enroll Now&nbsp;<img src={logo1} alt="Logo1" ></img></button>
            <div id="k"><a href="#">Know More &nbsp;</a><span id="q">?</span></div>
        </div>
        
        </div>
        <div id="last">
        <img src={logo2} alt="Logo2" class="logos"></img><span class="row"><span class="font">24</span><br></br>Courses</span>
        <img src={logo3} alt="Logo3" class="logos"></img><span class="row"><span class="font">30+</span><br></br>Learners</span>
        <img src={logo4} alt="Logo4" class="logos"></img><span class="row"><span class="font">100K+</span><br></br>Doubts Solved</span>
        <img src={logo5} alt="Logo5" class="logos"></img><span class="row"><span class="font">10K+</span><br></br>Student Projects</span>
    </div>
    </div>
    );
}
export default Enroll;
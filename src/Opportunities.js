// import React from 'react';
// import certificate from './certificate.svg';
// import internship from './internship.svg';
// import perks from './perks.svg';
// import './Opportunities.css';

// function Opportunities() {
//     return (
//         <div id="main">
//             <h1>
//                 <span className="h1i">Unlock</span>
//                 <span className="h1ii"> 6 Certificates</span>
//                 <span className="h1i"> &</span>
//                 <span className="h1ii"> Internship Opportunities!</span>
//             </h1>
//             <div id="mains">
//                 <div className="mainc" id="main1">
//                     <span>Get 6 Industry Recognized<br />Certificates!</span>
//                     <img src={certificate} alt="certificate" id="Certificate" />
//                     <div id="ov">
//                         <div class="ov1">
//                         <img src={perks} alt="perks" class="Perks"></img> Official and Verified
//                         </div>
//                         <div class="ov2"><img src={perks} alt="perks" class="Perks"></img>Enhances Credibility</div>
//                     </div>
//                 </div>
//                 <div className="mainc" id="main2">
//                     <span>Bag Internship Opportunities!</span>
//                     <p id="under">With every course, we make you not only industry-ready but<br></br>
//                  also help you crack your first internship.</p>
//                     <img src={internship} alt="internship" id="Internship"></img>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Opportunities;
// Opportunities.js

import React from 'react';
import certificate from './certificate.svg';
import internship from './internship.svg';
import perks from './perks.svg';
import './Opportunities.css';

function Opportunities() {
    return (
        <div id="main">
            <h1>
                <span className="h1i">Unlock</span>
                <span className="h1ii"> 6 Certificates</span>
                <span className="h1i"> &</span>
                <span className="h1ii"> Internship Opportunities!</span>
            </h1>
            <div id="mains">
                <div className="mainc" id="main1">
                    <span>Get 6 Industry Recognized<br />Certificates!</span>
                    <img src={certificate} alt="certificate" id="Certificate" />
                    <div id="ov">
                        <div className="ov1">
                            <img src={perks} alt="perks" className="Perks" />
                            Official and Verified
                        </div>
                        <div className="ov2">
                            <img src={perks} alt="perks" className="Perks" />
                            Enhances Credibility
                        </div>
                    </div>
                </div>
                <div className="mainc" id="main2">
                    <span>Bag Internship Opportunities!</span>
                    <p id="under">
                        &nbsp;With every course, we make you not only industry-ready but
                        also help you crack your first internship.
                    </p>
                    <img src={internship} alt="internship" id="Internship" />
                </div>
            </div>
        </div>
    );
}

export default Opportunities;


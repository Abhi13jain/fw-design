// import React from 'react';
// import emoji from './emoji.svg';
// import step from './step.svg';
// import './Hiring.css';
// function Hiring(){
//     return(
//         <div id="o">
//             <div id="t">
//                 <div id="t1">Don't miss out this <span class="change">&nbsp;limited-time</span></div><br></br>
//                 <div id="t2"><span class="change">opportunity</span>&nbsp;to learn for <span class="change">&nbsp;Free!</span></div>
//             </div>
//             <div id="mid">
//                 <div id="m1"><p>100% Refund Offer😎</p></div>
//                 <div id="m2"><p>20 seats left</p></div>
//                 <div id="m3"><img src={emoji} alt="emoji" id='Emoji'/></div>
//                 <div id="m4">Offer ends in 10:00 Mins</div>
//             </div>
//             <div id="mid1">
//             <div id="midb">How does it work?</div>
//             <div id="point"><div class="step">Step 1</div><div class="step">Step 2</div><div class="step">Step 3</div></div>
//             <div id="brief">
//             <div class="One">
//                 <p>Step 1 : Enroll into your favorite<br></br>course for only &#x20B9;1,499</p>
//              <img src={step} alt="step" id="Step"></img>
//              <p id="l1">Start Learning with <span id="l">Lifetime Courses</span></p></div>
//             <div class="One"><p>Step 2 : Complete Course & <br></br>Assignments within 2 Years!</p>
//             <div id="Onemid">
//                 <span id="no">2</span>
//                 <span id="noa">years time from the date of enrollment</span>
//             </div>
//             <p id="para">Finish the course within <span class="no1">2 Years </span>to Qualify for Refund.</p>
//             </div>
//             <div class="One"><p>Step 3 : Recieve 100% Refund <br></br>upon completion</p>
//             <div id="One1mid">
//                 <span id="nob">100%</span>
//                 <span id="nobc">Enrollment Fee is refunded</span>
//             </div>
//             <p id="no2">Upon Course Completion within <span class="no1">2 Years,</span><br></br>
//             Get Your <span class="no1">&#x20B9;1,499 Back</span>
//             </p>
//             </div>
            
//             </div>
//             </div>
//             <div id="low">
//                 <h1><span id="h1a">Top Companies Hiring</span> <span id="h1b">Data Scientist</span></h1>
//                 <div id="logoss">
//                     <div class="logoc">Logo</div>
//                     <div class="logoc">Logo</div>
//                     <div class="logoc">Logo</div>
//                     <div class="logoc">Logo</div>
//                     <div class="logoc">Logo</div>
//                     </div>
//             </div>
//         </div>

//     );
// }
// export default Hiring;
import React from 'react';
import emoji from './emoji.svg';
import step from './step.svg';
import './Hiring.css';

function Hiring() {
    return (
        <div id="o">
            <div id="t">
                <div id="t1">Don't miss out this <span className="change">&nbsp;limited-time</span></div><br />
                <div id="t2"><span className="change">opportunity</span>&nbsp;to learn for <span className="change">&nbsp;Free!</span></div>
            </div>
            <div id="mid">
                <div id="m1"><p>100% Refund Offer😎</p></div>
                <div id="m2"><p>20 seats left</p></div>
                <div id="m3"><img src={emoji} alt="emoji" id='Emoji' /></div>
                <div id="m4">Offer ends in 10:00 Mins</div>
            </div>
            <div id="mid1">
                <div id="midb">How does it work?</div>
                <div id="point"><div className="step">Step 1</div><div className="step">Step 2</div><div className="step">Step 3</div></div>
                <div id="brief">
                    <div className="One">
                        <p>Step 1 : Enroll into your favorite<br />course for only &#x20B9;1,499</p>
                        <img src={step} alt="step" id="Step"></img>
                        <p id="l1">Start Learning with <span id="l">Lifetime Courses</span></p>
                    </div>
                    <div className="One">
                        <p>Step 2 : Complete Course & <br />Assignments within 2 Years!</p>
                        <div id="Onemid">
                            <span id="no">2</span>
                            <span id="noa">years time from the date of enrollment</span>
                        </div>
                        <p id="para">Finish the course within <span className="no1">2 Years </span>to Qualify for Refund.</p>
                    </div>
                    <div className="One">
                        <p>Step 3 : Receive 100% Refund <br />upon completion</p>
                        <div id="One1mid">
                            <span id="nob">100%</span>
                            <span id="nobc">Enrollment Fee is refunded</span>
                        </div>
                        <p id="no2">Upon Course Completion within <span className="no1">2 Years,</span><br />
                            Get Your <span className="no1">&#x20B9;1,499 Back</span>
                        </p>
                    </div>
                </div>
            </div>
            <div id="low">
                <h1><span id="h1a">Top Companies Hiring</span> <span id="h1b">Data Scientist</span></h1>
                <div id="logoss">
                    <div className="logoc">Logo</div>
                    <div className="logoc">Logo</div>
                    <div className="logoc">Logo</div>
                    <div className="logoc">Logo</div>
                    <div className="logoc">Logo</div>
                </div>
            </div>
        </div>
    );
}

export default Hiring;

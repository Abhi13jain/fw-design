// import React from 'react';
// import './CourseCurriculum.css';
// function CourseCurriculum(){
//     return(
//         <div id="outer">
//             <div id="heading"><p id="H">DATASCIENCE COURSE LEARNING PATH</p></div>
//             <div id="sub"><h1><span id="a">Data Science</span> <span id="b">Course Curriculum</span></h1></div>
//             <div class="curriculum-list">
//     <div class="curriculum-item">
//       <div class="curriculum-info">
//         <h3>C++</h3>
//         <p>Learn C++ for strong programming fundamentals.</p>
//       </div>
//       <div class="curriculum-action">
//         <button>View Curriculum</button>
//       </div>
//     </div>
//     <div class="curriculum-item">
//       <div class="curriculum-info">
//         <h3>MERN Stack</h3>
//         <p>Master the MERN stack for high-demand projects.</p>
//       </div>
//       <div class="curriculum-action">
//         <button>View Curriculum</button>
//       </div>
//     </div>
//     <div class="curriculum-item">
//       <div class="curriculum-info">
//         <h3>Data Structure & Algorithm</h3>
//         <p>Excel in Data Structures and Algorithms for interview success.</p>
//       </div>
//       <div class="curriculum-action">
//         <button>View Curriculum</button>
//       </div>
//     </div>
//     <div class="curriculum-item">
//       <div class="curriculum-info">
//         <h3>Competitive Programming</h3>
//         <p>Excel in Data Structures and Algorithms for interview success.</p>
//       </div>
//       <div class="curriculum-action">
//         <button>View Curriculum</button>
//       </div>
//     </div>
//   </div>
//         </div>
//     );
// }
// export default CourseCurriculum;
import React from 'react';
import './CourseCurriculum.css';

function CourseCurriculum() {
    return (
        <div id="outer">
            <div id="heading"><p id="H">DATASCIENCE COURSE LEARNING PATH</p></div>
            <div id="sub"><h1><span id="a">Data Science</span> <span id="b">Course Curriculum</span></h1></div>
            <div className="curriculum-list">
                <div className="curriculum-item">
                    <div className="curriculum-info">
                        <h3>C++</h3>
                        <p>Learn C++ for strong programming fundamentals.</p>
                    </div>
                    <div className="curriculum-action">
                        <button>View Curriculum</button>
                    </div>
                </div>
                <div className="curriculum-item">
                    <div className="curriculum-info">
                        <h3>MERN Stack</h3>
                        <p>Master the MERN stack for high-demand projects.</p>
                    </div>
                    <div className="curriculum-action">
                        <button>View Curriculum</button>
                    </div>
                </div>
                <div className="curriculum-item">
                    <div className="curriculum-info">
                        <h3>Data Structure & Algorithm</h3>
                        <p>Excel in Data Structures and Algorithms for interview success.</p>
                    </div>
                    <div className="curriculum-action">
                        <button>View Curriculum</button>
                    </div>
                </div>
                <div className="curriculum-item">
                    <div className="curriculum-info">
                        <h3>Competitive Programming</h3>
                        <p>Excel in Data Structures and Algorithms for interview success.</p>
                    </div>
                    <div className="curriculum-action">
                        <button>View Curriculum</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCurriculum;

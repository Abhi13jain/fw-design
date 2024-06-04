import logo from './logo.svg';
import React from 'react'; 
import Header from './Header';
import Navigation from './Navigation';
import Enroll from './Enroll';
import CourseCurriculum from './CourseCurriculum';
import Hiring from './Hiring';
import Opportunities from './Opportunities';
import Working from './Working';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Navigation/>
    <Enroll/>
    <CourseCurriculum/>
    <Hiring/>
    <Opportunities/>
    <Working/>
    </>
  );
}

export default App;

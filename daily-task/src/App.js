// import {useNavigate}
// import { PageOne } from "./PageOne";
// import { PageTwo } from "./PageTwo";
// // import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
// import { NotFound } from './NotFound';
// const App = () => {
//   // <BrowserRouter>
//   //   <div>

//   //     Hey buddy
//   //     <Link to='/' style={{
//   //       margin: 5,
//   //       backgroundColor: "purple",
//   //     }}>Page 1</Link>
//   //     <Link to='/page2' style={{
//   //       margin: 5,
//   //       backgroundColor: "purple",
//   //     }}> Page 2</Link>
//   //     <Routes>
//   //       <Route path="/" element={<PageOne />}></Route>
//   //       <Route path="/page2" element={<PageTwo />}></Route>
//   //       <Route path="*" element={<NotFound />} ></Route>
//   //     </Routes>
//   //     {/* <h1>Hey Developers,</h1>
//   //   <PageOne />
//   //   <PageTwo /> */}
//   //   </div>
//   // </BrowserRouter >
//   //   ;

//   <div>

//   </div>;
// };

// export default App;

import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PageTwo from './PageTwo'
import PageOne from './PageOne'
import NotFound from './NotFound'
import './App.css';
import { globalStyle } from './constant';
import { Apple } from './Day4'

const App = () => {
  return (
    <>
      {/* <PageOne/> */}
      <div
       className='navbar-style'
      // style={{...globalStyle.navbar}}       
      >
        <Link to='/' className='Linkstyle'
        // style={{ margin: 5, backgroundColor: '#ACBCFF', padding: 14, textAlign: 'center', display: 'inline-block', textDecoration: 'none', }}
        >Page 1</Link>
        <Link to='/page2' className='Linkstyle'
        // style={{ margin: 5, backgroundColor: 'aqua', backgroundColor: '#ACBCFF', padding: 14, textAlign: 'center', textDecoration: 'none', display: 'inline-block', }}
        >Page 2</Link>
        <Link to='/apple' className='Linkstyle'
        // style={{ margin: 5, backgroundColor: 'aqua', backgroundColor: '#ACBCFF', padding: 14, textAlign: 'center', textDecoration: 'none', display: 'inline-block', }}
        >Apple Page</Link>
        <Link to='/other' className='Linkstyle'
        // style={{ margin: 5, backgroundColor: 'aqua', backgroundColor: '#ACBCFF', padding: 14, textAlign: 'center', textDecoration: 'none', display: 'inline-block', }}
        >For Other Page</Link>
      </div>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/page2" element={<PageTwo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
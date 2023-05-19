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


const App = () => {
  return (
    <>
      {/* <PageOne/> */}

      <Link to='/' style={{ margin: 5 }}>Page 1</Link>
      <Link to='/page2' style={{ margin: 5 }}>Page 2</Link>
      <Link to='/other' style={{ margin: 5 }}>For Other Page</Link>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/page2" element={<PageTwo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
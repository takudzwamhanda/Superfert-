import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ViewOne from './view/ViewOne'
import ViewTwo from './view/ViewTwo'
import ViewThree from './view/ViewThree'
import News from './components/News'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ViewOne />} />
        <Route path="/PageOne" element={<ViewOne />} />
        <Route path="/PageTwo" element={<ViewTwo />} />
        <Route path="/PageThree" element={<ViewThree />} />
        <Route path="/news" element={<News />} />
      </Routes>
    

      {/* <ViewOne /> */}
      {/* <ViewTwo /> */}
      {/* <ViewThree /> */}
    </>
  )
}

export default App

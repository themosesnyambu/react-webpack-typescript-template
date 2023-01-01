import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './assets/images/logo.svg';
import PageWrapper from './components/Layout/PageWrapper';
import BlogPage from './pages/Blogs/BlogPage';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper Component={<Home />} />} />
      <Route path="about" element={<PageWrapper Component={<BlogPage />} />} />
    </Routes>
  );
}
export default App;

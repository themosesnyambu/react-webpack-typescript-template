import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import logo from './assets/images/logo.svg';

const Home = () => (
  <div>
    Home
    <img src={logo} alt="" />
  </div>
);
const BlogPage = () => <div>blogs</div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<BlogPage />} />
    </Routes>
  );
}
export default App;

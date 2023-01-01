import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const Home = () => <div>Home</div>;
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

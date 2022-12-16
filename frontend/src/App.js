import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Compose from "./component/compose";
import Post from "./component/post";
import Login from "./component/login";
import Register from "./component/signUp";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/compose" element={<Compose/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

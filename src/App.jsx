import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Home from "./page/home/Home";
import Contact from "./page/contact/Contact";
import About from "./page/about/About";
import Weather from "./page/weather/weather";
import ArticleOage from "./page/articlepage/ArticlePage";
import Footer from "./component/footer/footer";
import ServisePage from "./page/servise/ServisePage";
import ListServises from "./page/listServises/ListServises";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar logo="ShopLogo" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/servise" element={<ServisePage />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/article/:id" element={<ArticleOage />} />
        <Route path="/servise/:id" element={<ListServises />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";
import Styled from "./pages/Styled";
import ScssButton from "./pages/ScssButton";
import Check from "./pages/Check";
import APIpage from "./pages/APIpage";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about?detail=true&mode=200">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
        <li>
          <Link to="/styled">스타일 컴포넌트</Link>
        </li>
        <li>
          <Link to="/sass">Sass</Link>
        </li>
        <li>
          <Link to="/check">css Module 스타일링</Link>
        </li>
        <li>
          <Link to="/api">API 페이지</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile/*" element={<Profile />}></Route>
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />}></Route>
        </Route>
        <Route path="/styled" element={<Styled />}></Route>
        <Route path="/sass" element={<ScssButton />}></Route>
        <Route path="/check" element={<Check />}></Route>
        <Route path="/api" element={<APIpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

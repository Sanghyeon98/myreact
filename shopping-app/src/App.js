import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import shoes from "./data";
import Product from "./components/Product";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./components/Detail";
import About from "./components/About";
import Member from "./components/Member";
import Location from "./components/Location";
import Cart from "./components/Cart";
import { useState } from "react";
import Title from "./components/Title";
import Title2 from "./components/Title2";
import Nike from "./components/Nike";
import inike from "./nike";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate(shoes);
  const [data, setData] = useState(shoes);
  const [count, setCount] = useState(2);
  const [nike, setNike] = useState(inike);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="slider"></div>
              <Title />
              <Button
                variant="outline-primary"
                onClick={() => {
                  let data1 = [...data].sort((a, b) =>
                    a.title > b.title ? 1 : -1
                  );
                  setData(data1);
                }}
              >
                이름순 정렬
              </Button>{" "}
              <Button
                variant="outline-secondary"
                onClick={() => {
                  let data1 = [...data].sort((a, b) =>
                    a.price > b.price ? 1 : -1
                  );
                  setData(data1);
                }}
              >
                낮은가격순 정렬
              </Button>{" "}
              <Button
                variant="outline-success"
                onClick={() => {
                  let data1 = [...data].sort((a, b) =>
                    a.price < b.price ? 1 : -1
                  );
                  setData(data1);
                }}
              >
                높은가격순 정렬
              </Button>{" "}
              <div className="container">
                <div className="row">
                  {data &&
                    data.map((a, i) => (
                      <Product data={data[i]} key={data[i].id} />
                    ))}
                </div>
              </div>
              <Title2 />
              <Button
                variant="outline-success"
                count={count}
                onClick={() => {
                  if (count < 4) {
                    setCount(count + 1);
                    axios
                      .get(
                        "https://raw.githubusercontent.com/Sanghyeon98/react-data/main/nike" +
                          count +
                          ".json"
                      )
                      .then((result) => {
                        const nike2 = [...nike, ...result.data];
                        setNike(nike2);
                      });
                  } else {
                    alert("더 이상 상품이 없습니다.");
                  }
                }}
              >
                +3개 상품 더보기 입력
              </Button>
              <div className="container mt-5">
                <div className="row">
                  {nike &&
                    nike.map((ele, i) => {
                      return <Nike nike={nike[i]} key={nike[i].id} />;
                    })}
                </div>
              </div>
            </div>
          }
        ></Route>
        <Route path="/detail/:id?" element={<Detail data={shoes} />} />
        <Route path="/detail1/:id?" element={<Detail data={nike} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<Member />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

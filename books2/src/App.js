import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

const KAKAO_KEY = "a72ff07499a78a559bb7e6bccb465597";
const Kakao = axios.create({
  url: "https://dapi.kakao.com/v3/search/book",
  headers: {
    Authorization: "KakaoAK " + KAKAO_KEY,
  },
});

const kakaoSerch = (params) => {
  return Kakao.get({ params });
};





function App() {
  const [books, setBooks] = useState([]);

  const getBooks=async()=>{
    const search="Java";
      try{
        if(search ===""){
          setBooks([]);
        }
      }else{
        const params={
          query: search,
          size: 45,
          target: title
        };
        const result = await kakaoSearch(params);
        
        if(result){
          setBooks(result.data.documnets)
          navigate('/market',{state: result.data.documnets})
        }
      }
  }
  return <div></div>;
}

export default App;

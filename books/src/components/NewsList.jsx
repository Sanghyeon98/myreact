import React from "react";
import Newsitem from "./Newsitem";
import "./NewsList.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const url = "https://dapi.kakao.com/v3/search/book?target=title";
    const query = category === "all" ? "" : "&category=" + category;
    const apikey = "&apikey=9a2f6998dcfe443f9f284dfdcb3091cd";
    return axios.get(url + query + apikey);
  }, [category]);

  // const sampleArticle = {
  //   title: "제목",
  //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  //   url: "https://www.naver.com",
  //   urlToImage: "",
  // };
  // const [articles, setArticles] = useState(null);

  // const [loading, setLoding] = useState(false);

  // useEffect(() => {
  //   setLoding(true);
  //   const faetchData = async () => {
  //     try {
  //       const url = "https://newsapi.org/v2/top-headlines?country=kr";
  //       const query = category === "all" ? "" : "&category=" + category;
  //       const apikey = "&apikey=9a2f6998dcfe443f9f284dfdcb3091cd";
  //       const response = await axios.get(url + query + apikey);
  //       setArticles(response.data.articles);
  //       console.log(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoding(false);
  //   };
  //   faetchData();
  // }, [category]);

  if (loading) {
    return <div className="newsListBlock">data loading ....... </div>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <div className="newsListBlock">에러 발생</div>;
  }
  const [articles] = response.data;

  return (
    <div className="newsListBlock">
      {articles.map((article) => (
        <Newsitem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;

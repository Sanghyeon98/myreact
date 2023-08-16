import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./components/NewsPage";
function App() {
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apikey=9a2f6998dcfe443f9f284dfdcb3091cd"
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    // <div>
    //   {/* <button onClick={onClick}>불러오기</button> */}
    //   {/* {data && (
    //     <textarea rows={8} value={JSON.stringify(data, null, 2)} readOnly />
    //   )} */}
    //   {/* data가 있으면 뒤에꺼 출력 */}
    //   {/* <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} /> */}

    // </div>
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
}

export default App;

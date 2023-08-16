import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewsPage from "../../news-app/src/components/NewsPage";

function App() {
  return (
    <div>
      <Route>
        <Route path="/:category?" element={<NewsPage />} />
      </Route>
    </div>
  );
}

export default App;

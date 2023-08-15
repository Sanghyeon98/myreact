// import logo from './logo.svg';
import "./App.css";
import Comp01 from "./components/Comp01";
import Comp02 from "./components/Comp02";
import Comp03 from "./components/Comp03";
import Employee from "./components/Employee";
import Student from "./components/Student";
import Keduit from "./components/Keduit";
import Hello from "./components/Hello";
import Wrapper from "./components/Wrapper";
import { useState } from "react";
import Counter from "./components/Counter";
import Counter01 from "./components/Counter01";

//------------------------------------------------HEDER--------------------------------------------
function Header(props) {
  console.log("props", props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

//------------------------------------------------HEDER--------------------------------------------
//------------------------------------------------Nav--------------------------------------------
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"read" + t.id}
          onClick={(event) => {
            event.preventDefault();
            console.log("----------------------");
            console.log(event);
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
//------------------------------------------------Nav--------------------------------------------
//------------------------------------------------Article--------------------------------------------
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
//------------------------------------------------Article--------------------------------------------
//------------------------------------------------Create--------------------------------------------
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onClick(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" cols="30" rows="10"></textarea>
        </p>
        <div>
          <input type="submit" value="Create"></input>
        </div>
      </form>
    </article>
  );
}
//------------------------------------------------Create--------------------------------------------
//------------------------------------------------Update--------------------------------------------
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            cols="30"
            rows="10"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
        </p>
        <div>
          <input type="submit" value="Update"></input>
        </div>
      </form>
    </article>
  );
}
//------------------------------------------------Update--------------------------------------------
//------------------------------------------------App------------------------------------------------
function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  console.log("mode", mode);
  const [topics, setTopic] = useState([
    { id: 1, title: "html", body: "html is ......" },
    { id: 2, title: "css", body: "css is ......" },
    { id: 3, title: "javascript", body: "javascript is ......" },
  ]);
  const name = "박상현";
  const style = {
    backgroundColor: "black",
    color: "white",
    fontSize: 24,
    padding: "1rem",
  };

  let content = null;
  let contextControl = null;
  if (mode === "WELCOME") {
    content = <Article title="WELCOME" body="HELLO, WEB!!"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl = (
      <>
        <li>
          <a
            href={"update/" + id}
            onClick={(event) => {
              event.preventDefault();
              setMode("UPDATE");
            }}
          >
            Update
          </a>
        </li>

        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = [];
              for (let i = 0; i < topics.length; i++) {
                if (topics[i].id !== id) {
                  newTopics.push(topics[i]);
                }
              }
              setTopic(newTopics);
              setMode("WELCOME");
            }}
          ></input>
        </li>
      </>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onClick={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopic(newTopics);
          console.log(newTopics);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          console.log(title, body);
          const updateTopic = { id: id, title: title, body: body };
          const newTopics = [...topics];
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updateTopic;
              break;
            }
          }
          setTopic(newTopics);
        }}
      ></Update>
    );
  }

  return (
    <div>
      {/* 주석은 이렇게 .. */}
      <Header
        title="REACT"
        onChangeMode={function () {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ");
          setId(id);
        }}
      ></Nav>
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;

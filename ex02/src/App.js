import "./App.css";
import InputSample from "./components/InputSample";
import EventHandling from "./components/EventHandling";
import EventPractice from "./components/EventPractice";
import InputSample2 from "./ InputSample2";
import ValidationSample from "./components/ValidationSample";
import UserList from "./components/UserList";
import { useRef } from "react";
import { useState } from "react";
import CreateUser from "./components/CreateUser";
import RefLocal from "./components/RefLocal";
import RefLocal2 from "./components/RefLocal2";
import Timer from "./components/Timer";
import { useMemo } from "react";
function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중 ....");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    // const newusers = [];
    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].id !== id) {
    //     newusers.push(users[i]);
    //   }
    // }
    // setUsers(newusers);
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const [showTimer, SetShowTimer] = useState(false);
  // const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <div>
      {/* {showTimer && <Timer />}
      <button
        onClick={() => {
          SetShowTimer(!showTimer);
        }}
      >
        Toggle Timer
      </button> */}
{/* 
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      /> */}
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자수 :{count}</div>

      {/* <InputSample />
      <EventHandling />
      <EventPractice />
      <InputSample2 />
      <ValidationSample />
      <RefLocal /> */}
      {/* <RefLocal2 /> */}
    </div>
  );
}

export default App;

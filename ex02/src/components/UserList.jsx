import React from "react";
import { useEffect } from "react";

const User = ({ user, onRemove, onToggle }) => {
  useEffect(() => {
    //마운트할때 실행
    console.log("컨포넌트가 화면에 나타남.");

    //cleanUp함수 언마운트할때 실행
    return () => {
      console.log("컴포넌트가 화면에 사라짐.");
    };
  }, []);
  useEffect(() => {
    console.log("user값이 설정됨.", user);
    return () => {
      console.log("user가 바뀌기 전....", user);
    };
  }, [user]);
  useEffect(() => {
    console.log("user", user);
  }, []);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;

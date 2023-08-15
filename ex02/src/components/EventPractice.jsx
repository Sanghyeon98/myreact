import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  console.log(username);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onkeydown = (e) => {
    if (e.key === "Enter") onClick();
  };

  const onClick = () => {
    alert(username + " " + message);
    setUsername("");
    setMessage("");
  };

  return (
    <div>
      <h1>[이벤트 연습]</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChangeUsername}
        placeholder="사용자명"
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="아무거나 입력하세요!"
        onChange={onChangeMessage}
        onKeyDown={onkeydown}
      />
      <button
        onClick={() => {
          alert(message);
          setMessage("");
        }}
      >
        확인
      </button>
    </div>
  );
};

export default EventPractice;

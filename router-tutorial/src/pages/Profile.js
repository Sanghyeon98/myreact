// import React from "react";
// import { useParams } from "react-router-dom";

// const data = {
//   velopert: {
//     name: "박상현",
//     description: "리액트를 정말 좋아하는 개발자~",
//   },
//   gildong: {
//     name: "이한재",
//     description: "나는야!! 코딩 천재 이한재~!",
//   },
// };
// const Profile = () => {
//   const params = useParams();
//   console.log(params);
//   const profile = data[params.username];
//   return (
//     <div>
//       <h1>사용지 프로필</h1>
//       {profile ? (
//         <div>
//           <h2>{profile.name}</h2>
//           <p>{profile.description}</p>
//         </div>
//       ) : (
//         <p>존재하지 않는 프로필입니다</p>
//       )}
//     </div>
//   );
// };

// export default Profile;

import React from "react";
import { NavLink, useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "아버지를 아버지라 부르지 못하는자",
  },
  kgs: {
    name: "김궁서",
    description: "코로나 경험자",
  },
};

const Profile = () => {
  const pr = useParams();
  const profile = data[pr["*"]];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <NavLink to="/profile">이전으로</NavLink>
        </div>
      ) : (
        <ul>
          {Object.keys(data).map((p) => (
            <li key={p}>
              <NavLink to={"/profile/" + p}>{p}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;

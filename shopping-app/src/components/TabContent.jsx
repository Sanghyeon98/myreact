import React from "react";

const TabContent = ({ tap }) => {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap];

  // if(tap ===0){
  //   return <div>
  //     내용0
  //   </div>
  // }else if(tap ===1){
  //   return <div>
  //     내용1
  //   </div>
  // }else if(tap ===2){
  //   return <div>
  //     내용2
  //   </div>
  // }
};

export default TabContent;

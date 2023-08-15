import React from "react";
import PropTypes from "prop-types";

const Hello = (props) => {
  const { color, name, favoriteNumber } = props;
  return (
    <div style={{ color }}>
      <h1>안녕하세요!{name}</h1>
      <h2>내가 좋아하는 숫자는 {favoriteNumber}입니다</h2>
    </div>
  );
};

Hello.defaultProps = {
  name: "무명씨",
};
Hello.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default Hello;

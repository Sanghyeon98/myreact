import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Nike = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const { title, price, imgUrl, content, id } = props.nike;
  return (
    <div className="col-md-4">
      <Nav.Link onClick={() => navigate("/detail1/" + id)} className="c1">
        <img src={imgUrl} alt={title} width="80%" />
        <h5>{title}</h5>
        <span>{content}</span>
        <p>{price}</p>
      </Nav.Link>
    </div>
  );
};

export default Nike;

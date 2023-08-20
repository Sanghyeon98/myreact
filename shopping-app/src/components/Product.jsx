import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Product = (props) => {
  const navigate = useNavigate();
  // console.log(props);
  const { title, price, imgUrl, id } = props.data;
  return (
    <div className="col-md-4">
      <Nav.Link onClick={() => navigate("/detail/" + id)} className="c1">
        <img src={imgUrl} width="80%" alt={title} />
        <h4>{title}</h4>
        <p>{price}</p>
      </Nav.Link>
    </div>
  );
};

export default Product;

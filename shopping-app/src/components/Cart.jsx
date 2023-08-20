import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store";

const Cart = () => {
  const 받을변수 = useSelector((state) => state);
  console.log(받을변수.cart[0].name);
  const dispatch = useDispatch();

  return (
    <div>
      <h5>
        {받을변수.user.name} {받을변수.user.age}의 장바구니
      </h5>

      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>상품이미지</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {받을변수.cart.map((a, i) => (
            <tr key={i}>
              <td>{받을변수.cart[i].id + 1}</td>
              <td>
                <img src={받을변수.cart[i].imgUrl} alt="" width="10%" />
              </td>
              <td>{받을변수.cart[i].name}</td>
              <td>{받을변수.cart[i].count}</td>
              <Button onClick={() => dispatch(addCount(받을변수.cart[i].id))}>
                +
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;

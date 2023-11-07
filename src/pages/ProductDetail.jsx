import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductDetail = ({ id, name, detail }) => {
  const params = useParams();

  return (
    <div>
      <h1>{name}</h1>
      <p>Params Id: {params.productId} </p>
      <p>Product Id: {id} </p>
      <p>{detail}</p>
      <p>
        Go back to <Link to="/products">Products Page</Link>
      </p>
    </div>
  );
};

export default ProductDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

const PRODUCTS_LIST_ENDPOINT = "http://127.0.0.1:8000/products/";

function Products() {
  const [products, setProducts] = useState([]);
  const [sortState, setSortState] = useState("name-ascending");
  const [searchValue, setSearchValue] = useState("");

  const sortMethods = {
    "name-ascending": {
      method: (a, b) => (a.name > b.name ? 1 : -1),
    },
    "name-descending": {
      method: (a, b) => (a.name > b.name ? -1 : 1),
    },
    "price-ascending": {
      method: (a, b) => (a.price > b.price ? 1 : -1),
    },
    "price-descending": {
      method: (a, b) => (a.price > b.price ? -1 : 1),
    },
  };

  useEffect(() => {
    axios
      .get(PRODUCTS_LIST_ENDPOINT)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <Form.Control
        type="text"
        placeholder="Search product"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></Form.Control>
      <Form.Select onChange={(e) => setSortState(e.target.value)}>
        <option value="name-ascending">--name ascending--</option>
        <option value="name-descending">--name descending--</option>
        <option value="price-ascending">--price ascending--</option>
        <option value="price-descending">--price descending--</option>
      </Form.Select>
      <ListGroup>
        {products
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .sort(sortMethods[sortState].method)
          .map((product) => (
            <ListGroup.Item key={product.id}>
              name: {product.name} price: {product.price}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default Products;

import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import classes from "../App.module.css";
import { Col } from "react-bootstrap";

export default function ItemCard(props) {
  const [item] = useState(props.item);
  const [isAvailble, setIsavaible] = useState(true);

  const addToCart = () => {
    props.handleCart(item);
  };

  useEffect(() => {
    if (item.availibility <= 0) {
      setIsavaible(false);
    }
  }, [item.availibility]);

  //=================================-

  let disableAvailibity;
  if (isAvailble) {
    disableAvailibity = (
      <>
        <Card.Text> Availble now : {props.item.availibility} </Card.Text>
        <Button variant="outline-success" onClick={() => addToCart()}>
          Buy
        </Button>
      </>
    );
  } else {
    disableAvailibity = (
      <>
        <Card.Text>
          Sorry come back later this product is not availbe at the moment
        </Card.Text>
        <Button variant="outline-success" onClick={() => addToCart()} disabled>
          Buy
        </Button>
      </>
    );
  }
  return (
    <Col>
      <Card className={classes.card}>
        <Card.Img variant="top" src={props.item.src} />
        <Card.Body>
          <Card.Title> {props.item.name}</Card.Title>
          <Card.Text>Description : {props.item.des} </Card.Text>
          <Card.Text>
            Price : <span> {props.item.price}</span>
          </Card.Text>
          {disableAvailibity}
        </Card.Body>
      </Card>
    </Col>
  );
}

import React from "react";
import classes from "../../App.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Container } from "react-bootstrap";

export default function Purchase(props) {
  return (
    <Container className={classes.products}>
      {props.selected.map((item) => (
        <Card className={classes.cartCard} key={item.id}>
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Title> {item.name}</Card.Title>
            <Card.Text>Description : {item.des} </Card.Text>
            <Card.Text>
              Price : <span> {item.price}</span>
            </Card.Text>

            <Card.Text>Purchase : {item.count} </Card.Text>

            {item.availble ? (
              <Button
                variant="outline-danger"
                onClick={() => {
                  props.decrease(item);
                }}
              >
                Remove from the Cart
              </Button>
            ) : (
              <Button
                disabled
                variant="outline-danger"
                onClick={() => {
                  props.calculateSum(item);
                }}
              >
                Remove from the Cart
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

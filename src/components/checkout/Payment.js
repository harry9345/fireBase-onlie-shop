import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "../../App.module.css";

export default function Payment(props) {
  const [inTotal, setInTotal] = useState(null);

  let total = null;
  props.selected.map(
    (product) => (product.addUp = product.price * product.count)
  );
  props.selected.map((product) => (total += product.addUp));

  useEffect(() => {
    setInTotal(total);
  }, [props.selected, total]);
  return (
    <>
      <Container className={classes.paymentCon}>
        <h3>Your order as follow : </h3>
        <Row className={classes.payRow}>
          {props.selected.map((product) => (
            <Row key={product.id} className={classes.productTotal}>
              <Col sm={6}>
                {product.count}, {product.name} for :{" "}
              </Col>
              <Col sm={{ span: 3, offset: 3 }}>
                <span className={classes.price}>{product.addUp}</span>
              </Col>
            </Row>
          ))}
        </Row>
        <Row className={classes.inTotal}>
          <Col sm={6}>In Total :</Col>
          <Col sm={{ span: 3, offset: 3 }}>{inTotal}</Col>
        </Row>
      </Container>
    </>
  );
}

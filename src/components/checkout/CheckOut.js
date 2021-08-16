import React, { useState, useEffect } from "react";
import classes from "../../App.module.css";

import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Navbar";
import Payment from "./Payment";
import Purchase from "./Purchase";
import { db, fs } from "../firebase";

export default function CheckOut() {
  const [selected, setSelected] = useState([]);
  const [cartIsEmpty, setCartIs] = useState(false);

  useEffect(() => {
    db.collection("allSelected").onSnapshot((querySnapshot) => {
      var p = [];
      querySnapshot.forEach((doc) => {
        p.push(doc.data());
      });
      setSelected(p);
    });
  }, [selected]);

  function decrease(item) {
    if (item.count > 1) {
      db.collection("allSelected")
        .doc(`${item.id}`)
        .update({ count: fs.firestore.FieldValue.increment(-1) })
        .update({ availibility: fs.firestore.FieldValue.increment(+1) });
    } else if (item.count <= 1) {
      setCartIs(false);
      removeFromCart(item);
    }
  }

  const removeFromCart = (item) => {
    selected.map((i) => {
      if (i.id === item.id) {
        i.count--;
        i.availibility++;
      }
    });
    db.collection("allSelected").doc(`${item.id}`).delete();
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          {cartIsEmpty ? (
            <>
              <Col sm={6}>
                <div>cart is empty</div>
              </Col>
              <Col className={classes.calculate} sm={4}></Col>
            </>
          ) : (
            <>
              <Col sm={6}>
                <Purchase selected={selected} decrease={decrease} />
              </Col>
              <Col className={classes.calculate} sm={4}>
                <Payment selected={selected} />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}

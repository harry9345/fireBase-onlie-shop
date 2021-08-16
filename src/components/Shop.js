import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import ItemCard from "./ItemCard";
import classes from "../App.module.css";
import { db } from "./firebase";

export default function Shop() {
  const [products, setProducts] = useState([
    {
      cart: false,
      id: 1,
      name: "SONY TV",
      des: "just a tv",
      price: 120,
      count: 0,
      availibility: 5,
      src: "https://picsum.photos/seed/picsum/200/300",
      addUp: 0,
      availble: true,
    },
    {
      cart: false,
      id: 2,
      name: "Play Station 5",
      des: "it's fun ",
      price: 1200,
      count: 0,
      availibility: 1,
      src: "https://picsum.photos/200/300",
      addUp: 0,
      availble: true,
    },
    {
      cart: false,
      id: 3,
      name: "Fridge",
      des: "SumSung",
      price: 1233300,
      count: 0,
      availibility: 3,
      src: "https://picsum.photos/200/300?grayscale",
      addUp: 0,
      availble: true,
    },
    {
      cart: false,
      id: 4,
      name: "Apple",
      des: "Iphone",
      price: 1200,
      count: 0,
      availibility: 4,
      src: "https://picsum.photos/200/300/?blur",
      addUp: 0,
      availble: true,
    },
    {
      cart: false,
      id: 5,
      name: "Dell",
      des: "LapTop ",
      price: 120330,
      count: 0,
      availibility: 1,
      src: "https://picsum.photos/200/300/?blur=2",
      addUp: 0,
      availble: true,
    },
  ]);

  const handelCartToFirebase = (item) => {
    let allPro = [...products];
    allPro.map((i) => {
      if (i.id === item.id) {
        i.count++;
        i.availibility--;
      }
    });
    db.collection("allSelected").doc(`${item.id}`).set(item, { merge: true });

    setProducts(allPro);
  };

  return (
    <>
      <Navbar />
      <Container className={classes.products}>
        {products.map((item) => (
          <ItemCard
            item={item}
            key={item.id}
            handleCart={handelCartToFirebase}
          />
        ))}
      </Container>
    </>
  );
}

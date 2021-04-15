import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  //const [categories, setCategories] = useState(["One Punch"]);
  const [categories, setCategories] = useState(defaultCategories);
  return (
    <>
      <Container>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        <div>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </div>
      </Container>
    </>
  );
};

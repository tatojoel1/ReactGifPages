import React from "react";
import { CardGroup, Row } from "react-bootstrap";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <CardGroup>
        <h3 className="animate__animated animate__fadeIn"> {category} </h3>

        {loading && <p className="animate__animated animate__flash">Loading</p>}

        <div className="card-grid">
          <Row md={4}>
            {images.map((img) => (
              <GifGridItem key={img.id} {...img} />
            ))}
          </Row>
        </div>
      </CardGroup>
    </>
  );
};

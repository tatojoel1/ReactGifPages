import React, { useState, useEffect, useRef } from "react";
import { Card, Button, Col, Tooltip, Overlay } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const GifGridItem = ({ title, url }) => {
  const [copyText, setcopyText] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setcopyText(false);
      setShow(false);
    }, 2000);
  }, [copyText]);

  return (
    <Col md={4} className="mb-4">
      <Card className="card animate__animated animate__fadeIn">
        <Card.Img variant="top" src={url} alt={title} />
        <Card.Body>
          <Card.Title className="card-title">
            {title.length > 0 ? title : "No title found"}
          </Card.Title>
        </Card.Body>
        <Card.Text>{title.length > 0 ? "" : "Sorry, but the author doesn't put it some title in the gif"}</Card.Text>
        <Card.Footer>
          <CopyToClipboard text={url} onCopy={() => setcopyText(true)}>
            <Button
              className="copy-button rounded-pill"
              ref={target}
              onClick={() => setShow(!show)}
            >
              Copy
            </Button>
          </CopyToClipboard>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Copied!
              </Tooltip>
            )}
          </Overlay>
        </Card.Footer>
      </Card>
    </Col>
  );
};

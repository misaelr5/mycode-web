import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.link && (
          <Button variant="primary" href={props.link}>
            <CgWebsite /> &nbsp;
            {props.buttonLabel || "Ver detalle"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

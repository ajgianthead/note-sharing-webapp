import React, { useState } from "react";
import { Container, Row, Button, Nav, Modal, Form } from "react-bootstrap";
import AppBar from "../components/AppBar";
import { FilePicker } from "react-file-picker";

export default function Home() {
  const [show, setShow] = useState(false);
  const [fileName, setFileName] = useState("");

  const changeName = (e) => {
    setFileName(e);
  };

  const handleClose = () => {
    setShow(false);
    setFileName("");
  };
  const handleShow = () => setShow(true);

  return (
    <div>
      <AppBar />
      <Container
        style={{
          border: "solid red 2px",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
          height: "500px",
          alignItems: "start",
        }}
      >
        <Nav fill variant="tabs" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link href="#">My Notes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Shared Notes</Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Button variant="success" onClick={handleShow}>
            + Add Note
          </Button>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Pick a file from you computer</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicButton">
              <FilePicker
                extensions={["png", "jpg", "pdf", "txt", "docx"]}
                onChange={(FileObject) => {
                  changeName(FileObject.name);
                }}
                onError={(err) => {
                  console.log(err);
                }}
              >
                <Button>Choose a file</Button>
              </FilePicker>
              <p>{fileName}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of Note(s)</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Subject/Topic</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Label>Note Visibility</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check inline type="checkbox" label="Public" />
              <Form.Check inline type="checkbox" label="Private" />
              <Form.Check inline type="checkbox" label="Friends Only" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Create Note
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

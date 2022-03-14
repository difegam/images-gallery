import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ search, handleChange }) => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Control placeholder="Search new image..." />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;

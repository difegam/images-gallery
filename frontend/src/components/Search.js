import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({search , setSearch, handleSubmit}) => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search new image..." />
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

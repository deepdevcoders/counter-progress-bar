import React, { useState } from "react";
import { Button, Col, Container, Input, Progress, Row } from "reactstrap";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  Decrement,
  Increment,
  SetCount,
} from "../redux/actions/counterActions";

function ReduxCounter() {
  const { count } = useSelector((state) => state.counter);
  console.log("count: ", count);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch(SetCount(value));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-custom vh-100">
      <Container fluid>
        <Row className="justify-content-center">
          <p className="custom-font">Progress Bar</p>
          <Col sm="9" md="6" lg="6">
            <Progress
              className="my-4 custom-progress rounded-pill"
              color="orange"
              value={count}
            >
              {count} %
            </Progress>
          </Col>
        </Row>
        <Row xs={3} className="justify-content-center align-items-center">
          <Col className="text-end">
            <Button
              className="bg-light text-dark border-0 custom-btn rounded-circle me-2"
              size="sm"
              onClick={() => dispatch(Decrement())}
            >
              <FaMinus />
            </Button>
          </Col>
          <Col md="3" lg="2">
            <Input
              type="number"
              className="custom-form mx-auto"
              max="100"
              maxLength="3"
              onChange={handleInputChange}
              value={count === 0 ? "" : count}
            />
          </Col>
          <Col className="text-start">
            <Button
              className="bg-light text-dark border-0 custom-btn rounded-circle me-2"
              size="sm"
              onClick={() => dispatch(Increment())}
            >
              <FaPlus />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReduxCounter;

import React, { Component } from "react";
import { Button, Label, Col, Row, Input } from "reactstrap";
import Sidenav from "./SideNav";

class Teacher extends Component {
  render() {
    return (
      <div className="page">
        <Row className="occupy">
          <Col sm="3">
            <Sidenav />
          </Col>

          <Col sm="9">
            <div className="container mt-5 show">
              <h2>Add Teachers</h2>
              <Row className="mt-5">
                <Col md={{ size: 3, offset: 1 }}>
                  <Label>Teacher Name</Label>
                </Col>
                <Col md={7}>
                  <Input
                    type="text"
                    id="teachername"
                    name="teachername"
                    placeholder="Name"
                  />
                </Col>
              </Row>

              <Row>
                <Col md={{ size: 4, offset: 3 }}>
                  <Button
                    type="submit"
                    color="secondary"
                    className="mt-4 btn-lg"
                  >
                    Add
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Teacher;
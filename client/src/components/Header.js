import React from "react";
import { Col, Row } from "reactstrap";

const Header = () => {
  return (
    <div id="page-header" className="mb-3">
      <Row>
        <Col md="6" sm="auto" className="text-center m-auto">
          <h1>하나저축은행</h1>
          <p>이미지 넣을곳</p>
        </Col>
      </Row>
    </div>
  );
};

export default Header;

import React from "react";
import { Col, Row } from "reactstrap";

const Footer = () => {
  const thisYear = () => {
    const yaer = new Date().getFullYear();
    return yaer;
  };

  return (
    <div id="main-footer" className="text-center p-2">
      <Row>
        <Col>
          <p>심의필번호 및 사업자정보 넣을곳</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

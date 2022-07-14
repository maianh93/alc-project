import { Col, Modal, Row } from 'antd';
import React, { useState, FC } from 'react';
import styled from 'styled-components';

import CardItem from "../../components/Card/Card";
import flexibleIncomeImage from "/images/income/income-icon.png";
import fixedIncomeImage from "/images/income/fixed-income.jpg";
import IncomeTable from '../../components/Table/IncomeTable';


const StyledModal = styled(Modal)`
& {
  background: green;
}
`;

const StyledHeading = styled.h1`
& {
  font-weigh: 700;
  text-align: center;
  text-transform: uppercase;
  color: green;
}
`

const IncomeAccounting: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <StyledHeading>Thu nhập</StyledHeading>
      <Row gutter={{ xs: 24, sm: 24, md: 12, lg: 12 }}>
        <Col className="gutter-row" span={12}>
          <CardItem
            img={fixedIncomeImage}
            title="Thu nhập cố định"
            description="Các khoản thu nhập cố định"
            onClick={() => setVisible(true)}
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <CardItem
            img={flexibleIncomeImage}
            title="Thu nhập không cố định"
            description="Các khoản thu nhập không cố định"
            onClick={() => setVisible(true)}
          />
        </Col>
      </Row>
      <StyledModal
        title="Khai báo các khoản thu - chi"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
      <IncomeTable />
      </StyledModal>
    </>

  );
}

export default IncomeAccounting;
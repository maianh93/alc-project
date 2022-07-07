import { Col, Row } from 'antd';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import DeclareIncomeSpendTable from '../../components/Table/DeclareIncomeSpendTable';

import CardItem from "../../components/Card/Card";
import incomeImage from "/images/income/income-icon.png";
import spendImage from "/images/expense/expense-icon.jpg";


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

const DeclareIncomeSpending: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <StyledHeading>Khai báo các khoản thu - chi</StyledHeading>
      <Row gutter={{ xs: 24, sm: 24, md: 12, lg: 12 }}>
        <Col className="gutter-row" span={12}>
          <CardItem
            img={incomeImage}
            title="Khoản thu"
            description="Khai báo các khoản thu"
            onClick={() => setVisible(true)}
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <CardItem
            img={spendImage}
            title="Khoản chi"
            description="Khai báo các khoản chi"
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
        <DeclareIncomeSpendTable />
      </StyledModal>
    </>

  );
}

export default DeclareIncomeSpending;
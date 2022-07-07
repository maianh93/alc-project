import { Col, Row } from 'antd';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import DeclareCCETable from '../../components/Table/DeclareCCETable';

import CardItem from "../../components/Card/Card";
import cashImage from "/images/assets/cash.webp";
import bankImage from "/images/assets/bank.jpg";
import fixedAssetImagge from "/images/assets/fixed-asset.jpg";

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

const DeclareAssets: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <StyledHeading>Khai báo tài sản</StyledHeading>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <CardItem
            img={cashImage}
            title="Tiền mặt"
            description="Khai báo quỹ tiền mặt"
            onClick={() => setVisible(true)}
          />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <CardItem
            img={bankImage}
            title="Tiền gửi ngân hàng"
            description="Khai báo tiền gửi ngân hàng"
            onClick={() => setVisible(true)}
          />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <CardItem
            img={fixedAssetImagge}
            title="Tài sản cố định"
            description="Khai báo tài sản cố định trên 15 triệu đồng"
            onClick={() => setVisible(true)}
          />
        </Col>
      </Row>
      <StyledModal
        title="Khai báo tài sản"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <DeclareCCETable />
      </StyledModal>
    </>

  );
}

export default DeclareAssets;
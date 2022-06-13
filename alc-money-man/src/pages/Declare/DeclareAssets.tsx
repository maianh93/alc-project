import { Col, Row } from 'antd';

import "./Declare.css"
import CardItem from "../../components/Card/Card";
import cashImage from "/images/assets/cash.webp";
import bankImage from "/images/assets/bank.jpg";
import fixedAssetImagge from "/images/assets/fixed-asset.jpg";

const DeclareAssets: React.FC = () => {
  return (
    <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CardItem 
          img={cashImage}
          title="Tiền mặt"
          description="Khai báo quỹ tiền mặt"
        />
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CardItem 
        img={bankImage}
        title="Tiền gửi ngân hàng"
        description="Khai báo tiền gửi ngân hàng"
        />
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CardItem 
        img={fixedAssetImagge}
        title="Tài sản cố định"
        description="Khai báo tài sản cố định trên 15 triệu đồng"
        />
      </Col>
    </Row>
  );
}

export default DeclareAssets;
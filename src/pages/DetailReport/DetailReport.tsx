import { Col, Modal, Row } from "antd";
import React, { useState, FC } from "react";
import styled from "styled-components";
import SelectForm from "../../components/Select/Select";
import DetailReportTable from "../../components/Table/DetailReportTable";

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

const DetailReport: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <StyledHeading>Báo cáo chi tiết</StyledHeading>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <SelectForm 
            value="chose"
            label="Chọn loại báo cáo"
          />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <SelectForm 
              value="detail"
              label="Chi tiết"
            />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <SelectForm 
              value="duration"
              label="Thời gian"
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
      </StyledModal>
      <DetailReportTable />
    </>
  );
}

export default DetailReport;
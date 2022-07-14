import { Modal } from 'antd';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

import DeclareObjectsTable from '../../components/Table/DeclareObjectsTable';

const StyledModal = styled(Modal)`
& {
  background: green;
}
`;

const DeclareObjects: FC = () => {
  const [visible, setVisible] = useState(false);
  const handleOpenAddingTable = () => {
    setVisible(true)
  }

  return (
    <>
        <DeclareObjectsTable 
        handleOpenAddingTable = {handleOpenAddingTable}
        />
        <StyledModal
        title="Khai báo đối tượng"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
      </StyledModal>
    </>

  );
}

export default DeclareObjects;
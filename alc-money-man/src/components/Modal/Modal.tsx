import { Button, Modal } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
& {
  background: green;
}
`;
const DetailModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
     <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <StyledModal
        title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </StyledModal>
    </>
  );
};

export default DetailModal;
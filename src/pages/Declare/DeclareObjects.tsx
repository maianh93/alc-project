import { Modal } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import DeclareObjectsTable from '../../components/Table/DeclareObjectsTable';


const DeclareObjects: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <DeclareObjectsTable />
    </>

  );
}

export default DeclareObjects;
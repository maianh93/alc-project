import { Card } from 'antd';
import styled from "styled-components";
import React from 'react';
const { Meta } = Card;

import DetailModal from '../Modal/Modal';

const StyledCard = styled(Card)`
  & {
    border-radius: 20px;
    overflow: hidden;
    min-height: 350px;
  }

  & .ant-card-cover img {
    object-fit: contain;
    min-height: 250px
  }

  & .ant-card-meta-title {
    color: green;
  }
`;

const CardItem = ({ img, title, description }) => (
    <>
    <StyledCard
        hoverable
        style={{
            width: 240,
        }}
        cover={<img alt={title} src={img} />}
    >
        <Meta title={title} description={description} />
    </StyledCard>
    </>
);

export default CardItem;
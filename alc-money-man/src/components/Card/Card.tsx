import { Card } from 'antd';
import styled from "styled-components";
import React from 'react';
const { Meta } = Card;

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

const CardItem = ({ img, title, description, onClick }) => (
    <>
    <StyledCard
        hoverable
        style={{
            width: 240,
        }}
        cover={<img alt={title} src={img} />}
        onClick={onClick}
    >
        <Meta title={title} description={description} />
    </StyledCard>
    </>
);

export default CardItem;
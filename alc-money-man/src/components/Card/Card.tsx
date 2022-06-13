import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;


const CardItem = ({ img, title, description}) => (
    <Card
        hoverable
        style={{
            width: 240,
        }}
        cover={<img alt={title} src={img} />}
    >
        <Meta title={title} description={description} />
    </Card>
);

export default CardItem;
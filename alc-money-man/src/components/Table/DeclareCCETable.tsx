import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { useState } from 'react';
import React from 'react';

interface DataType {
  key: React.Key;
  source: string;
  amount: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Nguồn tiền',
    dataIndex: 'source',
  },
  {
    title: 'Số tiền',
    dataIndex: 'amount',
  }
];

const data: DataType[] = [
  {
    key: '1',
    source: 'Tiền mặt vợ',
    amount: 3200000,
  },
  {
    key: '2',
    source: 'Tiền mặt chồng',
    amount: 4200000,
  },
];


const DeclareCCETable: React.FC = () => (
  <div>
    <Table columns={columns} dataSource={data} size="middle" />
    <p className="link cursor">Thêm nguồn tiền...</p>
  </div>
);

export default DeclareCCETable;
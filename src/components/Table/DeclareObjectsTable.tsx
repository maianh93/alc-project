import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { useState } from 'react';
import React from 'react';
import SelectForm from '../Select/Select';

interface DataType {
  key: React.Key;
  name: string;
  prop: string;
  note?: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên đối tượng',
    dataIndex: 'name',
  },
  {
    title: 'Tính chất',
    dataIndex: 'prop',
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note',
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Tít',
    prop: "Khách hàng",
  },
  {
    key: '2',
    name: 'Chủ nhà',
    prop: "Nhà cung cấp",
  },
];


const DeclareIncomeSpendTable: React.FC = () => (
  <div>
    <h1 className="center uppercase">Đối tượng</h1>
    <Table columns={columns} dataSource={data} size="middle" />
    <p className="link cursor">Thêm đối tượng...</p>
  </div>
);

export default DeclareIncomeSpendTable;
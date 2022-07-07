import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { useState } from 'react';
import React from 'react';
import SelectForm from '../Select/Select';

interface DataType {
  key: React.Key;
  name: string;
  prop: string;
}

interface Option {
  key: React.Key;
  value: string;
  label: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên khoản thu',
    dataIndex: 'name',
  },
  {
    title: 'Tính chất',
    dataIndex: 'prop',
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Thu nhập từ lương',
    prop: "Thu nhập cố định",
  },
  {
    key: '2',
    name: 'Thu nhập khác',
    prop: "Thu nhập không cố định",
  },
];

const option: Option[] = [
  {
    key: 1,
    value: "not-fixed-income",
    label: "Thu nhập không cố định"
  },
  {
    key: 2,
    value: "fixed-income",
    label: "Thu nhập cố định"
  },
]


const DeclareIncomeSpendTable: React.FC = () => (
  <div>
    <h1 className="center uppercase">Khoản thu</h1>
    <SelectForm
      // {option.map(o => 
      //   value={o.value}
      //   lable={o.label}
      // )}
      value= "not-fixed-income"
      label= "Thu nhập không cố định"
    />
    <Table columns={columns} dataSource={data} size="middle" />
    <p className="link cursor">Thêm khoản thu...</p>
  </div>
);

export default DeclareIncomeSpendTable;
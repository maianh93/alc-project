import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Ngày',
    dataIndex: 'date',
  },
  {
    title: 'Chi tiết',
    dataIndex: 'detail',
  },
  {
    title: 'Đối tượng',
    dataIndex: 'object',
  },
  {
    title: 'Số tiền',
    dataIndex: 'amount',
    sorter: {
      compare: (a, b) => a.amount - b.amount,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    date: 'John Brown',
    detail: 98,
    object: 60,
    amount: 70,
  },
  {
    key: '2',
    date: 'Jim Green',
    detail: 98,
    object: 66,
    amount: 89,
  },
  {
    key: '3',
    date: 'Joe Black',
    detail: 98,
    object: 90,
    amount: 70,
  },
  {
    key: '4',
    date: 'Jim Red',
    detail: 88,
    object: 99,
    amount: 89,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const DetailReportTable = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default DetailReportTable;
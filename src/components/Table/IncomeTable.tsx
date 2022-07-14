import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React, { FC } from 'react';

interface DataType {
  key: React.Key;
  date?: Date;
  name: string;
  object: string;
  amount?: number
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Ngày',
    dataIndex: 'date',
  },
  {
    title: 'Chi tiết khoản thu nhập',
    dataIndex: 'name',
  },
  {
    title: 'Đối tượng',
    dataIndex: 'object',
  },
  {
    title: 'Số tiền',
    dataIndex: 'number',
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Thu nhập từ lương',
    object: "Thu nhập cố định",
  },
  {
    key: '2',
    name: 'Thu nhập khác',
    object: "Thu nhập không cố định",
  },
];

const IncomeTable: FC = () => (
  <div>
    <h1 className="center uppercase">Thu nhập cố định</h1>
    <Table columns={columns} dataSource={data} size="middle" />
    <p className="link cursor">Thêm khoản thu nhập cố định...</p>
  </div>
);

export default IncomeTable;
import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
  };

const SelectForm = ( {value, label} ) => (
    <>
        <Select
            className="center"
            defaultValue={value}
            style={{
                width: 120,
            }}
            onChange={handleChange}
        >
            <Option value={value}>{label}</Option>
        </Select>
    </>
);

export default SelectForm;
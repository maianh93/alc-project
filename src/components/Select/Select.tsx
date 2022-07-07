import { Select } from 'antd';
const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
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
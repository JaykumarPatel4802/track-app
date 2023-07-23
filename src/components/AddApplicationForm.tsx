import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import React from 'react';
import type { DatePickerProps } from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;


// const normFile = (e: any) => {
//     if (Array.isArray(e)) {
//       return e;
//     }
//     return e?.fileList;
//   };

  
const AddApplicationForm = (props: any) => {

    const [form] = Form.useForm();
    console.log("AddApplicationForm");
    form.resetFields();

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.methods[0](e.target.value);
        form.resetFields();
    };

    const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.methods[1](e.target.value);
    };

    const onChangeRole = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.methods[2](e.target.value);
    };

    const onChangeStatus = (value: string) => {
        props.methods[3](value);
    };

    const onChangeDataPicker: DatePickerProps['onChange'] = (date, dateString) => {
        props.methods[4](dateString);
    };

    const onChangeURL = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.methods[5](e.target.value);
    };
    

    return (
        <Form
            form={form}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 900 }}
        >
            {/* <Form.Item label="Radio">
            <Radio.Group>
                <Radio value="full-time"> Full-Time </Radio>
                <Radio value="internship"> Internship </Radio>
                <Radio value="contractor"> Contractor </Radio>
            </Radio.Group>
            </Form.Item> */}
            <Form.Item label="Company Name:">
            <Input onChange={onChangeName} />
            </Form.Item>
            <Form.Item label="Type">
            <Select>
                <Select.Option value="full-time">Full-Time</Select.Option>
                <Select.Option value="internship">Internship</Select.Option>
                <Select.Option value="contractor">Contractor</Select.Option>
            </Select>
            </Form.Item>
            {/* <Form.Item label="TreeSelect">
            <TreeSelect
                treeData={[
                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                ]}
            />
            </Form.Item> */}
            {/* <Form.Item label="Cascader">
            <Cascader
                options={[
                {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                    },
                    ],
                },
                ]}
            />
            </Form.Item> */}
            {/* <Form.Item label="RangePicker">
            <RangePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
            <InputNumber />
            </Form.Item> */}
            <Form.Item label="Description">
            <TextArea rows={2} onChange={onChangeDescription} />
            </Form.Item>

            <Form.Item label="Role:">
            <Input onChange={onChangeRole}/>
            </Form.Item>

            <Form.Item label="Status">
            <Select onChange={onChangeStatus}>
                <Select.Option value="not-applied">Not Applied</Select.Option>
                <Select.Option value="applied">Applied</Select.Option>
                <Select.Option value="interview">Interview</Select.Option>
                <Select.Option value="offer">Offer</Select.Option>
                <Select.Option value="rejected">Rejected</Select.Option>
                <Select.Option value="oa">Online Assessment</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item label="Deadline">
            <DatePicker onChange={onChangeDataPicker} />
            </Form.Item>

            <Form.Item label="URL:">
            <Input onChange={onChangeURL} />
            </Form.Item>
            <Form.Item>
          <Button onClick={e => {
            form.resetFields()
                          }} >Clear</Button>
        </Form.Item>
            {/* <Form.Item label="Switch" valuePropName="checked">
            <Switch />
            </Form.Item> */}
            {/* <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
                <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
                </div>
            </Upload>
            </Form.Item>
            <Form.Item label="Button">
            <Button>Button</Button>
            </Form.Item>
            <Form.Item label="Slider">
            <Slider />
            </Form.Item> */}
        </Form>
    );
}

export default AddApplicationForm;
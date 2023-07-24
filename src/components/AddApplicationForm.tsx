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
  Modal
} from 'antd';
import React from 'react';
import type { DatePickerProps } from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const {Option} = Select;

  
const AddApplicationForm: React.FC = (props: any) => {

    const [form] = Form.useForm();

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.methods[0](e.target.value);
    };

    const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.methods[1](e.target.value);
    };

    const onChangeType = (value: string) => {
        props.methods[2](value);
    };

    const onChangeStatus = (value: string) => {
        props.methods[3](value);
    };

    const onChangeDataPicker: DatePickerProps['onChange'] = (date, dateString) => {
        console.log("datestring")
        console.log(dateString)
        props.methods[4](dateString);
    };

    const onChangeURL = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.methods[5](e.target.value);
    };

    const handleOk = () => {
        props.handleSubmit();
        props.setIsModalOpen(false);
        form.resetFields();
    };
    
    const handleCancel = () => {
        props.setIsModalOpen(false);
        form.resetFields();
    };

    const handleClear = () => {
        form.resetFields();
    };

    return (
        <Modal title="Add Application" open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
            <Button key="clear" onClick={handleClear}>
                Clear
            </Button>,
            <Button key="cancel" onClick={handleCancel}>
                Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
                Submit
          </Button>,
          ]}>
            <Form
                form={form}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 900 }}
            >   
                <Form.Item name="name" label="Company Name:">
                    <Input onChange={onChangeName} />
                </Form.Item>
                <Form.Item name="type" label="Type">
                    <Select onChange={onChangeType}>
                        <Select.Option value="Full Time">Full-Time</Select.Option>
                        <Select.Option value="Internship">Internship</Select.Option>
                        <Select.Option value="Contractor">Contractor</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <TextArea rows={2} onChange={onChangeDescription} />
                </Form.Item>
                <Form.Item name="status" label="Status">
                    <Select onChange={onChangeStatus}>
                        <Select.Option value="Not Applied">Not Applied</Select.Option>
                        <Select.Option value="Applied">Applied</Select.Option>
                        <Select.Option value="Interview">Interview</Select.Option>
                        <Select.Option value="Offer">Offer</Select.Option>
                        <Select.Option value="Rejected">Rejected</Select.Option>
                        <Select.Option value="OA">Online Assessment</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="deadline" label="Deadline">
                    <DatePicker onChange={onChangeDataPicker} />
                </Form.Item>
                <Form.Item name="url" label="URL:">
                    <Input onChange={onChangeURL} />
                </Form.Item>
                <Form.Item name="note" label="Note" >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );

}

export default AddApplicationForm;
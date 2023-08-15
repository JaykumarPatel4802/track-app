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
import { useApplicationContext } from '@/app/context/ApplicationContext';
import { useState } from 'react';
import { useEffect } from 'react';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const {Option} = Select;

  
const UpdateApplicationForm = (props: any) => {

    const {updateApplication} = useApplicationContext();

    const [form] = Form.useForm();
    
    const [name, setName] = useState(props.application.name);
    const [description, setDescription] = useState(props.application.description);
    const [type, setType] = useState(props.application.type);
    const [status, setStatus] = useState(props.application.status);
    const [deadline, setDeadline] = useState(props.application.deadline);
    const [url, setURL] = useState(props.application.url);

    useEffect(() => {
        setName(props.application.name);
        setDescription(props.application.description);
        setType(props.application.type);
        setStatus(props.application.status);
        setDeadline(props.application.deadline);
        setURL(props.application.url);
    }, [props.application.name, props.application.description, props.application.type, props.application.status, props.application.deadline, props.application.url]);

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(e.target.value);
    };

    const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const onChangeType = (value: string) => {
        setType(value);
    };

    const onChangeStatus = (value: string) => {
        setStatus(value);
    };

    const onChangeDataPicker: DatePickerProps['onChange'] = (date, dateString) => {
        setDeadline(dateString);
    };

    const onChangeURL = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setURL(e.target.value);
    };

    const handleOk = () => {
        updateApplication(props.application.id, {name, description, type, status, deadline, url, id: props.application.id});
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

    console.log(name, description, type, status, deadline, url)

    return (
        <Modal title="Update Application" open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
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
                initialValues={{
                    name: name,
                    type: type,
                    description: description,
                    status: status,
                    deadline: deadline,
                    url: url,
                }}
            
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

export default UpdateApplicationForm;
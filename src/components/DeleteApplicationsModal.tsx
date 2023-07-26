import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Modal
} from 'antd';
import React from 'react';
import type { DatePickerProps } from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const {Option} = Select;

  
const DeleteApplicationsModal = (props: any) => {

    const handleOk = () => {
        props.deleteAllApplications();
        props.setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        props.setIsModalOpen(false);
    };

    return (
        <Modal title="Delete All Applications" open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
            <Button key="cancel" onClick={handleCancel}>
                Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk} danger>
                Delete
          </Button>,
          ]}>
            <p>Are you sure you want to delete all applications?</p>
            <p>You will NOT be able to recover your saved applications if you select "Delete"!</p>
        </Modal>
    );

}

export default DeleteApplicationsModal;
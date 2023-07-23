"use client";

import Image from 'next/image';
import data from '@/data/Data';
import Applications from '@/components/Applications';
import State from '@/components/State'
import React, { use, useEffect, useReducer } from 'react';
import Data from '@/data/Data';
import App from 'next/app';
import { DataReducer } from './context/DataReducer';
import { initialData } from './context/DataReducer';
import { useContext } from 'react';
import { useApplicationContext } from './context/ApplicationContext';
import { Application } from './interfaces';
import uuid from 'react-uuid';
import { Button, Modal } from 'antd';
import AddApplicationForm from '@/components/AddApplicationForm';

export default function Home() {


  const { applications, addApplication, setApplications } = useApplicationContext();

  const [name, setName]: any = React.useState('')
  const [description, setDescription]: any = React.useState('')
  const [role, setRole]: any = React.useState('')
  const [state, setState]: any = React.useState('')
  const [deadline, setDeadline]: any = React.useState('')
  const [url, setURL]: any = React.useState('')

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleSubmit();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const CreateApplication = (name: String, description: String, role: String, state: String, deadline: String, url: String) => {
    addApplication({name, description, role, state, deadline, url, id: uuid()});
    setName('')
    setDescription('')
    setRole('')
    setState('')
    setDeadline('')
    setURL('')
  }

  const activateButton = () => {
    if (name != '' && description != '' && role != '' && state != '' && deadline != '' && url != '') {
      return true;
    }
    return false;
  }

  const handleSubmit = () => {
    console.log("handleSubmit")
    console.log(name)
    console.log(description)
    console.log(role)
    console.log(state)
    console.log(deadline)
    console.log(url)
    // event.preventDefault(),
    if (activateButton()) {
      var app = CreateApplication(name, description, role, state, deadline, url);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Button type='primary' onClick={showModal}>Add Application</Button>
        <Modal title="Add Application" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* {createApplicationForm()} */}
          <AddApplicationForm methods={[setName, setDescription, setRole, setState, setDeadline, setURL]} />
        </Modal>
        <Applications />
      </div>
    </main>
  )
}

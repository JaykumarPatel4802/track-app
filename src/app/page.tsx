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
import { useRef } from 'react';
import { Input } from 'antd';

export default function Home() {


  const { applications, addApplication, setApplications } = useApplicationContext();

  const [name, setName]: any = React.useState('')
  const [description, setDescription]: any = React.useState('')
  const [type, setType]: any = React.useState('')
  const [status, setStatus]: any = React.useState('')
  const [deadline, setDeadline]: any = React.useState('')
  const [url, setURL]: any = React.useState('')

  const [showInstruction, setShowInstruction] = React.useState(false);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const deleteAllApplications = () => {
    setApplications([]);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const CreateApplication = (name: String, description: String, type: String, satus: String, deadline: String, url: String) => {
    addApplication({name, description, type, status, deadline, url, id: uuid()});
    setName('')
    setDescription('')
    setType('')
    setStatus('')
    setDeadline('')
    setURL('')
  }

  const activateButton = () => {
    if (name != '' && type != '' && status != '') {
      return true;
    }
    return false;
  }

  const handleSubmit = () => {
    console.log("handleSubmit")
    console.log(name)
    console.log(description)
    console.log(type)
    console.log(status)
    console.log(deadline)
    console.log(url)
    // event.preventDefault(),
    if (activateButton()) {
      var app = CreateApplication(name, description, type, status, deadline, url);
    }
  }

  const ref = useRef();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between lg:flex">
        <div className='flex w-full grid grid-cols-2 gap-4'>
          <div className='flex gap-4'>
            <Input placeholder="Search" />
            <Button onClick={() => ref.current.clear()} danger>Clear Filters</Button>
          </div>
          <div className='flex justify-end gap-4'>
            <Button type='primary' onClick={showModal}>Add Application</Button>
          </div>
        </div>
        <br />
        <AddApplicationForm handleSubmit={handleSubmit} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} methods={[setName, setDescription, setType, setStatus, setDeadline, setURL]} />
        {showInstruction ?
          <div className='flex w-full justify-start text-sm'>
            <p>
              Note: Click + to view the description of the application!
            </p>
          </div>
        : null}
        <Applications ref={ref}  setShowInstruction={setShowInstruction}/>
        <br />
        <div className='flex w-full justify-end'>
          <Button type='primary' onClick={() => deleteAllApplications()} danger>Delete All Applications</Button>
        </div>
      </div>
    </main>
  )
}

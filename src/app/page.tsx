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

export default function Home() {


  const { applications, addApplication, setApplications } = useApplicationContext();

  const [name, setName]: any = React.useState('')
  const [description, setDescription]: any = React.useState('')
  const [role, setRole]: any = React.useState('')
  const [state, setState]: any = React.useState('')
  const [deadline, setDeadline]: any = React.useState('')
  const [url, setUrl]: any = React.useState('')

  const CreateApplication = (name: String, description: String, role: String, state: String, deadline: String, url: String) => {
    addApplication({name, description, role, state, deadline, url, id: uuid()});
    setName('')
    setDescription('')
    setRole('')
    setState('')
    setDeadline('')
    setUrl('')
  }

  const activateButton = () => {
    if (name != '' && description != '' && role != '' && state != '' && deadline != '' && url != '') {
      return true;
    }
    return false;
  }

  const handleNameChange = (event: any) => {
    setName(event.target.value)
  }

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value)
  }

  const handleRoleChange = (event: any) => {
    setRole(event.target.value)
  }

  const handleStateChange = (event: any) => {
    setState(event.target.value)
  }

  const handleDeadlineChange = (event: any) => {
    setDeadline(event.target.value)
  }

  const handleUrlChange = (event: any) => {
    setUrl(event.target.value)
  }

  const handleSubmit = (event: any) => {
    console.log("handleSubmit")
    event.preventDefault()
    if (activateButton()) {
      var app = CreateApplication(name, description, role, state, deadline, url);
    }
  }

  const createApplicationForm = () => {

    return (
      <div >
          <form>
              <input onChange={handleNameChange} placeholder="Company Name" value={name} />
              <input onChange={handleDescriptionChange} placeholder="Description of Role" value={description} />
              <input onChange={handleRoleChange} placeholder="Name of Role" value={role} />
              <input onChange={handleStateChange} placeholder="State of Application" value={state} />
              <input onChange={handleDeadlineChange} placeholder="Deadline" value={deadline} />
              <input onChange={handleUrlChange} placeholder="Application Url" value={url} />
              <button onClick={handleSubmit}>Add Application</button>
          </form>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {createApplicationForm()}
        <Applications />
      </div>
    </main>
  )
}

'use client';

import { Application } from '@/app/interfaces'
import React, { ReactNode, useState } from 'react'
import { ApplicationContext } from './ApplicationContext'

interface IProps {
    children: ReactNode
}

const ApplicationContextProvider = ({children}: IProps) => {
    const [applications, setApplications] = React.useState<Application[]>([])
    const addApplication = (application: Application) => {
        // application.id = applications.length;
        setApplications([...applications, application]);
    };
    const removeApplication = (id: String) => {
        setApplications(applications.filter((application) => application.id !== id));
    };
    const updateApplication = (id: String, updatedApplication: Application) => {
        setApplications(applications.map((application) => (application.id === id ? updatedApplication : application)));
    };

    return (
        <ApplicationContext.Provider value={{ applications, addApplication, setApplications }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider
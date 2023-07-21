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

    return (
        <ApplicationContext.Provider value={{ applications, addApplication }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider
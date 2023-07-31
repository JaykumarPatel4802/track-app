import { Application } from '@/app/interfaces';
import { createContext, useContext, Dispatch, SetStateAction, useState, useMemo, useReducer } from 'react';

interface IApplicationContext {
    applications: Application[];
    addApplication: (application: Application) => void;
    setApplications: (applications: Application[]) => void;
    removeApplication: (id: String) => void;
    updateApplication: (id: String, updatedApplication: Application) => void;
}

export const ApplicationContext = createContext<IApplicationContext>({
    applications: [],
    addApplication: (application) => {},
    setApplications: (applications) => {},
    removeApplication: (id) => {},
    updateApplication: (id, updatedApplication) => {},
});

export const useApplicationContext = () => useContext(ApplicationContext);
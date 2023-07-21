import { Application } from '@/app/interfaces';
import { createContext, useContext, Dispatch, SetStateAction, useState, useMemo, useReducer } from 'react';

interface IApplicationContext {
    applications: Application[];
    addApplication: (application: Application) => void;
    setApplications: (applications: Application[]) => void;
}

export const ApplicationContext = createContext<IApplicationContext>({
    applications: [],
    addApplication: (application) => {},
    setApplications: (applications) => {}
});

export const useApplicationContext = () => useContext(ApplicationContext);
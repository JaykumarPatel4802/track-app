'use client';

import Data from '@/data/Data';
import { useContext } from 'react';
import { useApplicationContext } from '@/app/context/ApplicationContext';

const Applications = (props : any) => {

    const {applications} = useApplicationContext();
    console.log("Applications")
    console.log(applications)

    const getApplicationsList = () => {
        if (applications.length == 0) {
            return null;
        }
    
        let applicationsList = applications.map((item: any) => {
            console.log("getApplicationsList")
            return <Application name={item.name} description={item.description} key={Date.now()} />
        })
        console.log(applicationsList);
        return applicationsList;
    }

    return (
        <div>
            {getApplicationsList()}
        </div>
    );
}

const Application = (props: any) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Applications;
'use client';

import Data from '@/data/Data';
import { useContext } from 'react';
import { useApplicationContext } from '@/app/context/ApplicationContext';

const Applications = (props : any) => {

    const {applications} = useApplicationContext();
    console.log("Applications")
    console.log(applications)

    const ApplicationsList = () => {
        if (applications.length == 0) {
            return null;
        }
    
        var applicationsList = applications.map((item: any) => {
            // console.log("getApplicationsList")
            return <Application name={item.name} description={item.description} key={item.id} />
        })
        // console.log(applicationsList);
        return applicationsList;
    }

    return (
        <table className='table-auto'>
            <thead>
                <tr>
                    <th className='px-4 py-2'>Name</th>
                    <th className='px-4 py-2'>Description</th>
                </tr>
            </thead>
            <tbody>
                {ApplicationsList()}
            </tbody>
        </table>
    );
}

const Application = (props: any) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
        </tr>
    );
}

export default Applications;
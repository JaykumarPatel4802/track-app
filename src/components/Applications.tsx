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
            return <Application item={item} key={item.id} />
        })
        // console.log(applicationsList);
        return applicationsList;
    }

    return (
        <section className={"container px-4 mx-auto" + (' dark') }>
            <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                                <thead className='bg-gray-50 dark:bg-gray-800'>
                                    <tr>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>Name</th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>Description</th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>Role</th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>State</th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>Deadline</th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>URL</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                                    {ApplicationsList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Application = (props: any) => {
    return (
        <tr>
            <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>{props.item.name}</td>
            <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>{props.item.description}</td>
            <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>{props.item.role}</td>
            <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>{props.item.state}</td>
            <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>{props.item.deadline}</td>
            <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>{props.item.url}</td>
        </tr>
    );
}

export default Applications;
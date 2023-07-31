'use client';

import Data from '@/data/Data';
import { use, useContext } from 'react';
import { useApplicationContext } from '@/app/context/ApplicationContext';
import type { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import { Application } from '@/app/interfaces';
import { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { Tooltip } from 'antd';
import { useEffect } from 'react';
// import { map, includes, sortBy, uniqBy, each, result, get } from "lodash";

interface DataType {
    key: String,
    name: String,
    description: String,
    type: String,
    status: String,
    deadline: String,
    url: String,
}

const Applications = forwardRef((props, ref)  => {

    const {applications} = useApplicationContext();
    
    const nameFilters = () => {
        var nameFilters: {text: String, value: String}[] = [];
        for (var i = 0; i < applications.length; i++) {
            nameFilters.push({text: applications[i].name, value: applications[i].name});
        }
        return nameFilters;
    }

    useEffect(() => {
        props.setShowInstruction(false);
        for (var i = 0; i < applications.length; i++) {
            if (applications[i].description != "") {
                props.setShowInstruction(true);
            }
        }
      }, []);

    const ApplicationsList = () => {
        var applicationsList: DataType[] = [];

        if (applications.length == 0) {
            return applicationsList;
        }
        console.log("applications")
        console.log(applications)

        for (var i = 0; i < applications.length; i++) {
            applicationsList.push({
                // key: i.toString(),
                key: applications[i].id,
                name: applications[i].name,
                description: applications[i].description,
                type: applications[i].type,
                status: applications[i].status,
                deadline: applications[i].deadline,
                url: applications[i].url
            });
        }
        return applicationsList;
    }

    const [data, setData] = useState<DataType[]>(ApplicationsList());
    useEffect(() => {
        setData(ApplicationsList());
    }, [applications]);

    useEffect(() => {
        const apps = ApplicationsList();
        setData(apps);
        const data = apps;
        const reg = new RegExp(props.searchedValue, "gi");
        const filteredData = data.map((record) => {
            const nameMatch = record?.name?.match(reg);
            const descriptionMatch = record?.description?.match(reg);
            const typeMatch = record?.type?.match(reg);
            const statusMatch = record?.status?.match(reg);
            const deadlineMatch = record?.deadline?.match(reg);
            const urlMatch = record?.url?.match(reg);
            if (!nameMatch && !descriptionMatch && !typeMatch && !statusMatch && !deadlineMatch && !urlMatch) {
                return null;
            }
            return record;
        }).filter(record => !!record);
        console.log("filteredData: ", filteredData)
        if (props.searchedValue) {
            setData(filteredData);
        } else {
            setData(ApplicationsList());
        }
    }, [applications, props.searchedValue]); 

    // const data: DataType[] = ApplicationsList();


    const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  
    const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('Various parameters', pagination, filters, sorter, extra);
        setFilteredInfo(filters);
        setSortedInfo(sorter as SorterResult<DataType>);
    };


    const clearFilters = () => {
        setFilteredInfo({});
    };
    
    const clearAll = () => {
        console.log(data);
        setFilteredInfo({});
        setSortedInfo({});
        // setData(originalData);
    };

    useImperativeHandle(ref, () => ({
        clear() {
            clearAll();
        }
    }));

    console.log("nameFilters: ", nameFilters)
    const columns: ColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          filters: nameFilters(),
          filteredValue: filteredInfo.name || null,
          onFilter: (value: string, record) => record.name.includes(value),
          sorter: {
            compare: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
            multiple: 1,
          },
          sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
          filterSearch: true,
          width: '30%',
          ellipsis: true,
        },
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     key: 'description',
        //     ellipsis: true,
        // },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            filters: [
              { text: 'Full Time', value: 'Full Time' },
              { text: 'Internship', value: 'Internship' },
              { text: 'Contractor', value: 'Contractor' },
            ],
            filteredValue: filteredInfo.type || null,
            onFilter: (value: string, record) => record.type.includes(value),
            filterSearch: true,
          //   sorter: (a, b) => a.address.length - b.address.length,
            // sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filters: [
              { text: 'Not Applied', value: 'Not Applied' },
              { text: 'Applied', value: 'Applied' },
              { text: 'Interview', value: 'Interview' },
              { text: 'Offer', value: 'Offer' },
              { text: 'Rejected', value: 'Rejected' },
              { text: 'Online Assessment', value: 'OA' },
            ],
            filteredValue: filteredInfo.status || null,
            onFilter: (value: string, record) => record.status.includes(value),
            filterSearch: true,
          //   sorter: (a, b) => a.address.length - b.address.length,
            // sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
          title: 'Deadline',
          dataIndex: 'deadline',
          key: 'deadline',
          sorter: {
            compare: (a, b) => a.deadline.toLowerCase().localeCompare(b.deadline.toLowerCase()),
            multiple: 2,
          },
          sortOrder: sortedInfo.columnKey === 'deadline' ? sortedInfo.order : null,
          ellipsis: true,
        },
        {
            title: 'URL',
            dataIndex: 'url',
            key: 'url',
            ellipsis: true,
            render: (value) => <a href={value} target="_blank">{value != "" && value != undefined ? "Open" : null}</a>,
        },
        {
            title: 'Action',
            dataIndex: 'key',
            key: 'key',
            ellipsis: true,
            width: '20%',
            render: (value) => {
                return (
                    <div className='flex space-x-5'>
                        <Button onClick={() => null}>Edit</Button>
                        <Button onClick={() => null} danger>Delete</Button>
                    </div>
                );
            }
        }
    ];

    const generateExpanable = (record: DataType) => {
        return (
            <>
                {/* <p style={{ margin: 0 }}>{"Name: " + record.name}</p> */}
                {record.description != "" ? <p style={{ margin: 0 }}>{"Description: " + record.description}</p> : null}
                {/* <p style={{ margin: 0 }}>{"Type: " + record.type}</p> */}
                {/* <p style={{ margin: 0 }}>{"Status: " + record.status}</p> */}
                {/* {record.deadline != "" ? <p style={{ margin: 0 }}>{"Deadline: " + record.deadline}</p> : null} */}
                {/* {record.url != "" ? <p style={{ margin: 0 }}>{"URL: " + record.url}</p> : null} */}
            </>
        );
    }

    return (
        <>
            <Table 
                columns={columns} 
                expandable={{
                    expandedRowRender: (record) => generateExpanable(record),
                    rowExpandable: (record) => record.description != "",
                }}
                dataSource={data} 
                onChange={handleChange} 
            />
        </>
    );
});

export default Applications;
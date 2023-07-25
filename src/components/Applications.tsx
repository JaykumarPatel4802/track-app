'use client';

import Data from '@/data/Data';
import { useContext } from 'react';
import { useApplicationContext } from '@/app/context/ApplicationContext';
import type { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import { Application } from '@/app/interfaces';
import { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';

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

    const ApplicationsList = () => {
        var applicationsList: DataType[] = [];

        if (applications.length == 0) {
            return applicationsList;
        }

        for (var i = 0; i < applications.length; i++) {
            applicationsList.push({
                key: i.toString(),
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

    const data: DataType[] = ApplicationsList();

    const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  
    const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('Various parameters', pagination, filters, sorter, extra);
        setFilteredInfo(filters);
        console.log("sortedInfo: ", sortedInfo);
        console.log("sorter: ", sorter);
        setSortedInfo(sorter as SorterResult<DataType>);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };
    
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    useImperativeHandle(ref, () => ({
        clear() {
            setFilteredInfo({});
            setSortedInfo({});
        }
    }));

    const columns: ColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: {
            compare: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
            multiple: 1,
          },
          sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
          ellipsis: true,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true,
        },
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
        },
    ];
    

    return (
        <>
            {/* <Space style={{ marginBottom: 16 }}>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space> */}
            <Table columns={columns} dataSource={data} onChange={handleChange} />
        </>
    );
});

export default Applications;
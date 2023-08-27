"use client";

import React, { use, useEffect, useReducer } from 'react';
import Link from 'next/link';
import Navbar from '@/app/home/components/navbar';
import Intro from '@/app/home/components/intro';
import Features from '@/app/home/components/features';
import { Button, Form, Input } from 'antd';


export default function Home() {

  const [content, setContent] = React.useState<String | null>("AboutMe");
  const [login, setLogin] = React.useState<Boolean>(false);
  const [signUp, setSignUp] = React.useState<Boolean>(false);

  const showPage = (page: String) => {
    setContent(page);
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='flex relative w-full'>
        <div className='flex absolute inset-0 bg-gradient-to-r from-pink-100 from-10% via-white-100 via-50% to-blue-100 to-90%'></div>
        <div className='flex absolute inset-0 bg-gradient-to-b from-transparent to-white'></div>
        <div className='flex flex-col inset-0 w-full'>
          <div className='flex flex-col z-10 justify-between sticky top-0 backdrop-filter backdrop-blur-lg'><Navbar giveChoice={showPage} login={login} setLogin={setLogin} signUp={signUp} setSignUp={setSignUp} /></div>
          <div className='z-10'>
            { login == false && signUp == false &&
              <Intro />
            }
            { (login == true || signUp == true) &&
                <SignInUp login={login} signUp={signUp} />
            }
          </div>
        </div>
      </div>
      { login == false && signUp == false &&
        <div className='flex flex-col items-center mt-auto'>
          <div className='w-full'><Features /></div>
          <div className='w-full'><Intro /></div>
        </div>
      }
    </main>
  )
}

const SignInUp = (props: any) => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  type FieldType = {
    email?: string;
    password?: string;
  };
  

  return (
      <div className='grid grid-cols-1'>
          <div className="flex flex-col mt-40 mb-8">
              { props.login == true &&
                <h1 className="flex justify-center m-0 font-extrabold pb-3 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                    Login Below!
                </h1>
              }
              { props.signUp == true &&
                <h1 className="flex justify-center m-0 font-extrabold pb-3 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                    Sign Up Below!
                </h1>
              }  
          </div>
          <div className="flex justify-center mb-64">
            <Form
              name="basic"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className='flex flex-col w-6/12'
            >
              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 18, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
      </div>
  )
}
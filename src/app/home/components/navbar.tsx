import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = (props: any) => {
    const callPropFunc = (pageType: String) => {
        console.log("Navbar: callPropFunc: pageType: ", pageType);
        props.giveChoice(pageType);
    }

    return (
        // <Layout className="layout">
        //     <Header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
        //         <div className='flex items-center'>
        //             <a href="app_manager">
        //                 LOGO
        //             </a>
        //         </div>
        //         <div className='flex items-center space-x-5'>
        //             <Button type="text">Pricing</Button>
        //             <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
        //             <Button>Sign up for free!</Button>
        //         </div>
        //     </Header>
        // </Layout>
        <Header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
            <div className='flex items-center'>
                <a href="app_manager">
                    LOGO
                </a>
            </div>
            <div className='flex items-center space-x-5'>
                <Button type="text">Pricing</Button>
                <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
                <Button>Sign up for free!</Button>
            </div>
        </Header>
    )
}

export default Navbar;
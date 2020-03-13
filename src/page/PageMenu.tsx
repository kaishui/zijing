import * as React from 'react';

import {Layout, Menu} from "antd";

const {Header, Content, Sider} = Layout;


export class PageMenu extends React.Component<{}> {


    render() {
        return (
            <Sider>
                <Menu>
                    <Menu.Item>Home</Menu.Item>
                    <Menu.Item>About</Menu.Item>
                    <Menu.Item>Users</Menu.Item>
                    <Menu.Item>topics</Menu.Item>
                </Menu>
            </Sider>

        );
    }
}
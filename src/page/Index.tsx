import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Content} from './Content';
import {PageHeader} from './PageHeader';
import {Menu} from './Menu';
import {Footer} from './Footer';
import './index.scss'

export class Layout extends React.Component {

    render(){
        return (
            <div className='layout'>
                <PageHeader></PageHeader>
                <div className='main'>
                    <Menu></Menu>
                    <Content companyName='content'></Content>
                </div>
                <Footer companyName='zijing footer'></Footer>
            </div>
        );
    }
}
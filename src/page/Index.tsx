import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {PageContent} from './PageContent';
import {PageHeader} from './PageHeader';
import {PageMenu} from './PageMenu';
import {PageFooter} from './PageFooter';
import {Layout} from "antd"

import MenuContainer from '../containers/MenuContainer'


export class Page extends React.Component {

    render() {
        let {} = this.props
        return (
            <Layout style={{minHeight: '100vh'}}>
                <PageHeader></PageHeader>
                <Layout>
                    <MenuContainer></MenuContainer>
                    <PageContent companyName='content'></PageContent>
                    <PageFooter companyName='zijing footer'></PageFooter>
                </Layout>
            </Layout>
        );
    }
}
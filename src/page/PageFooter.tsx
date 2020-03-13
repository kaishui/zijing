import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Layout, Menu, Breadcrumb} from 'antd';

import styles from "./footer.less"
const {Footer} = Layout


export class PageFooter extends React.Component<{ companyName: string }> {

    render() {
        const {companyName} = this.props;
        console.log("styles" + styles.footer)

        return (
            <Layout className="footer">
                <Footer style={{ textAlign: 'center' }}>
                    there is footer div: {companyName}
                </Footer>
            </Layout>
        );
    }
}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import {Counter} from '../components/Counter';
import ContentContainer from '../containers/ContentContainer';
import {Layout, Menu, Breadcrumb} from 'antd';

const {Content} = Layout

function Home() {
    return <div>Home</div>;
}

function About() {
    return <div>About</div>;
}

function Users() {
    return <div>Users</div>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let {topicId} = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

export class PageContent extends React.Component<{ companyName: string }> {

    render() {
        return (
            <Layout className="site-layout" style={{ margin: '0 16px' }}>
                <Content >
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Test</Breadcrumb.Item>
                    </Breadcrumb>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/users/">
                            <Users/>
                        </Route>
                        <Route path="/topics">
                            <Topics/>
                        </Route>
                        <Route path="/">
                            <Home/>
                            <ContentContainer></ContentContainer>
                        </Route>

                    </Switch>
                </Content>
            </Layout>
        );
    }
}
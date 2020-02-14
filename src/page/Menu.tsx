import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './menu.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export class Menu extends React.Component<{}> {

    render() {
        return (
            <div className='menu'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/topics">topics</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
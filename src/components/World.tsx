import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Hello} from './Hello'

type Message = {
    message: string
};

type CountState = {
    count: number
};

interface AppState {
    count: number;
};

class World extends React.Component<Message, AppState> {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        return (
        <div>
            message : {this.props.message} state count: {this.state.count}
            <Hello message='provide informations to the user'></Hello>
        <button onClick={this.increment}>increment {this.state.count}</button>
        </div>
        );
    }
}

export { World };
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Hello} from './Hello'

class World extends React.Component<{message: string},{count: number}> {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
        <div>
            message : {this.props.message} state count: {this.state.count}
            <Hello message='provide informations to the user'></Hello>
        </div>
        );
    }
}

export { World };
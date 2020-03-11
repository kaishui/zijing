import * as React from 'react';
import { submitText } from '../actions/index';

type CounterProps = {
    isOn: boolean,
    text: string,
    onclick: any,
    submitText: any
}

export class Counter extends React.Component<CounterProps>{
    render() {
        let {onclick, submitText} = this.props
        return (
            <div>
                <button onClick={submitText}> button: {this.props.text}</button>
                <div>{this.props.isOn}</div>
            </div>
        );
    }
}
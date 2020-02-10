import * as React from 'react';

type CounterProps = {
    isOn: boolean,
    text: string,
    onclick: any
}

export class Counter extends React.Component<CounterProps>{
    render() {
        return (
            <div>
                <button onClick={this.props.onclick}> button: {this.props.text}</button>
                <div>{this.props.isOn}</div>
            </div>
        );
    }
}
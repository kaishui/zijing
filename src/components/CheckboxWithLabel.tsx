import * as React from 'react';
import * as ReactDom from 'react-dom';

type CheckboxProps = {
    on: string,
    off: string
}

type CheckboxState = {
    isCheck: boolean
}

class CheckboxWithLabel extends React.Component<CheckboxProps, CheckboxState> {

    constructor(props) {
        super(props);
        this.state = { isCheck: false }
    }


    onChange = () => {

        let { isCheck } = this.state;
        console.log({ isCheck });
        this.setState({
            isCheck: !this.state.isCheck
        })
    }
    render() {
        return (
            <div>
                <label>{this.state.isCheck ? this.props.on : this.props.off}</label>
                <input type='checkbox' checked={this.state.isCheck} onChange={this.onChange}>
                </input>
            </div>
        );
    }
}

export { CheckboxWithLabel };
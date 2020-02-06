import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './footer.scss'

export class Footer extends React.Component<{companyName: string}> {

    render(){
        const {companyName} = this.props;

        return (
            <div className='footer'>
                there is footer div: {companyName}
            </div>
        );
    }
}
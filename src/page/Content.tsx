import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./content.scss"

export class Content extends React.Component<{ companyName: string }> {

    render() {
        return (
            <div className='content'>
                <div>
                    To run the setup file to configure Enzyme and the Adapter
                </div>
                <div>
                    <img src='http://zh.learnlayout.com/images/ilta.png'></img>
                </div>
            </div>
        );
    }
}
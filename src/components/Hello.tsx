import * as React from 'react';
import * as ReactDom from 'react-dom';

type Message = {
    message:  string
}
export const Hello : React.SFC<Message> = ({message}) => {
return <div>say : {message}</div>
};
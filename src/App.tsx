import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {World} from './components/World'

ReactDOM.render(
    <World message='content from startup'/>,
    document.getElementById('root')
);
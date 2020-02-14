import { connect, ConnectedProps } from 'react-redux';
import * as React from 'react';
import { toggleIsOn } from '../actions/index';
import {Layout} from '../page/Index'
type ContentState = {
    text: string,
    isOn: boolean
}

const mapStateToProps = (state) => {
    const {creducer} = state
    console.log("map state to props:" + creducer.text)
    return {
        text: creducer.text,
        isOn: creducer.isOn
    }
}

const mapDispathToProps = (dispath, ownerProps) => ({
    onclick: (...args) => dispath(toggleIsOn("text", true))
})

export default connect(mapStateToProps, mapDispathToProps)(Layout);
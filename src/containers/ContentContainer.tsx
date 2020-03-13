import { connect, ConnectedProps } from "react-redux";
import * as React from "react";
import { Counter } from "../components/Counter";
import { toggleIsOn, submitText } from '../actions/index';
import { bindActionCreators } from 'redux'


type ContentState = {
  text: string;
  isOn: boolean;
};

const mapStateToProps = state => {
  const { creducer } = state;
  console.log("map state to props:" + creducer.text);
  return {
    text: creducer.text,
    isOn: creducer.isOn
  };
};

const mapDispathToProps = (dispath, ownerProps) => bindActionCreators({submitText, toggleIsOn},dispath)

export default connect(mapStateToProps, mapDispathToProps)(Counter);

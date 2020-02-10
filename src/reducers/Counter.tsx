 
import { TOGGLE_IS_ON } from '../constants/ActionType'

type CounterActionProps = {
  type: string,
  text: string,
  isOn: boolean
}
const creducer = (state = { text: '123'}, action: CounterActionProps) => {
  console.log("action:" + action.text + action.isOn)
  switch (action.type) {
    case TOGGLE_IS_ON:
      return {text : action.text, isOn: !action.isOn}
    default:
      return state
  }
}

export default creducer
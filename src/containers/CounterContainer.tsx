import { connect, ConnectedProps } from 'react-redux'
import * as React from 'react'
interface RootState {
  isOn: boolean,
  text: string
}
const mapState = (state: RootState) => ({
  isOn: state.isOn, 
  text: state.text
})
const mapDispatch = {
  toggleOn: () => {
    console.log('type')
    return ({
      type: 'TOGGLE_IS_ON',
      isOn: true
    })
  }
}
const connector = connect(
  mapState,
  mapDispatch
)
// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  backgroundColor: string
}
const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? 'ON' : 'OFF'}
    </button>
  </div>
)
export default connector(MyComponent)
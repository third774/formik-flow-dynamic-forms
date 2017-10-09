// @flow

import React, {Component} from "react"

type FieldFeedbackProps = {
  error: string,
  touched: boolean,
  hasFocus: boolean,
  name: string,
  value: any
}

export class FieldFeedback extends Component<FieldFeedbackProps, any> {
  state = {
    debounceTimer: null
  }

  componentWillReceiveProps(nextProps: FieldFeedbackProps) {
    clearTimeout(this.state.debounceTimer)
    // Is still focused and the value has changed
    if (nextProps.hasFocus && nextProps.value !== this.props.value) {
      const debounceTimer = setTimeout(() => {
        this.setState({debounceTimer: null})
      }, 500)
      this.setState({debounceTimer})
    } else {
      this.setState({debounceTimer: null})
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.debounceTimer)
  }

  render() {
    const {error, hasFocus, touched} = this.props
    const {debounceTimer} = this.state
    return touched && error && !debounceTimer ? (
      <div style={{color: "red"}}>{error}</div>
    ) : null
    // return (
    //   <div>
    //     <div>Has Focus: {hasFocus.toString()}</div>
    //     {touched && error && !debounceTimer && <div style={{color: "red"}}>{error}</div>}
    //   </div>
    // )
  }
}

// @flow

import React, {Component} from "react"

type FieldFeedbackProps = {
  error: string,
  touched: boolean,
  dirty: boolean,
  name: string,
  value: any
}

export class FieldFeedback extends Component<FieldFeedbackProps, {debounceTimer: any}> {
  state = {
    debounceTimer: null
  }

  componentWillReceiveProps(nextProps: FieldFeedbackProps) {
    clearTimeout(this.state.debounceTimer)
    // value has changed
    if (nextProps.value !== this.props.value) {
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
    const {error, touched, dirty} = this.props
    const {debounceTimer} = this.state
    return error && ((touched && !debounceTimer) || (dirty && !debounceTimer)) ? (
      <div style={{color: "red"}}>{error}</div>
    ) : null
  }
}

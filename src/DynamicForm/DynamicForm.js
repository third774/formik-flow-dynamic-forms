// @flow

import React, {Component} from "react"
import type {StatelessFunctionalComponent, ComponentType} from "react"
import {withFormik} from "formik"

import {FieldConfiguration, FieldComponentProps} from "./FieldInterfaces"
import {Validators} from "./Validators"
import {DynamicInput} from "./dynamic-input-components/DynamicInput"
import {DynamicCheckbox} from "./dynamic-input-components/DynamicCheckbox"
import {DynamicSelect} from "./dynamic-input-components/DynamicSelect"
import {DynamicRadio} from "./dynamic-input-components/DynamicRadio"
import {DynamicTextArea} from "./dynamic-input-components/DynamicTextArea"
import {DynamicMultiCheckbox} from "./dynamic-input-components/DynamicMultiCheckbox"

import {FieldFeedback} from "./FieldFeedback"

type DynamicFormProps = {
  values: any,
  touched: any,
  errors: any,
  dirty: any,
  isSubmitting: any,
  handleChange: () => any,
  handleBlur: () => any,
  handleSubmit: () => any,
  handleReset: () => any,
  config: FieldConfiguration<any>[]
}

type DynamicFormState = {
  dirtyFields: {
    [key: string]: boolean
  }
}

const FIELD_MAP = {
  input: DynamicInput,
  checkbox: DynamicCheckbox,
  select: DynamicSelect,
  radio: DynamicRadio,
  textarea: DynamicTextArea,
  multicheckbox: DynamicMultiCheckbox
}

class _DynamicForm extends Component<DynamicFormProps, DynamicFormState> {
  state = {
    dirtyFields: {}
  }

  handleReset = () => {
    this.setState({dirtyFields: {}})
    this.props.handleReset()
  }

  handleChange = e => {
    this.setState({
      dirtyFields: {
        ...this.state.dirtyFields,
        [e.target.name]: true
      }
    })
  }

  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      config
    } = this.props
    const {focusedFieldName, dirtyFields} = this.state
    return (
      <form onSubmit={handleSubmit} onChange={this.handleChange}>
        {config.map((field, index) => {
          const FieldComponent:
            | StatelessFunctionalComponent<FieldComponentProps<any>>
            | ComponentType<FieldComponentProps<any>> =
            FIELD_MAP[field.fieldType]
          return (
            <div className="form-group" key={index}>
              <label className="control-label">
                {field.label}
                <FieldComponent
                  className="form-control"
                  name={field.name}
                  value={values[field.name]}
                  fieldTypeConfiguration={field.fieldTypeConfiguration || {}}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <FieldFeedback
                touched={touched[field.name]}
                value={values[field.name]}
                error={errors[field.name]}
                dirty={dirtyFields[field.name]}
                name={field.name}
              />
            </div>
          )
        })}
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button
          className="btn btn-default pull-right"
          type="button"
          onClick={this.handleReset}
        >
          Reset
        </button>
      </form>
    )
  }
}

const formikEnhancer = withFormik({
  validate: (values, props) => {
    const config: FieldConfiguration<any>[] = props.config
    const errors = {}
    config.forEach(field => {
      if (field.validators) {
        const firstBrokenValidationRule = field.validators.find(validatorConfig => {
          return Validators[validatorConfig.validatorType](
            values[field.name],
            field.label,
            ...[validatorConfig.validatorArgs]
          )
        })
        if (firstBrokenValidationRule) {
          errors[field.name] = Validators[firstBrokenValidationRule.validatorType](
            values[field.name],
            field.label,
            ...[firstBrokenValidationRule.validatorArgs]
          )
        }
      }
    })
    return errors
  },

  mapPropsToValues: props => {
    const config: FieldConfiguration<any>[] = props.config
    const values = config.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: field.value
      }),
      {}
    )
    return values
  },
  handleSubmit: (payload, {setSubmitting}) => {
    console.log(payload)
    setSubmitting(false)
  }
})

export const DynamicForm = formikEnhancer(_DynamicForm)

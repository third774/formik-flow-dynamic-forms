// @flow

import React, { Component } from "react";

import { FieldConfiguration } from "./FieldInterfaces";
import { DynamicInput } from "./dynamic-input-components/DynamicInput";
import { DynamicCheckbox } from "./dynamic-input-components/DynamicCheckbox";
import { withFormik } from "formik";
import { Validators } from "./Validators";

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
};

const FIELD_MAP = {
  input: DynamicInput,
  checkbox: DynamicCheckbox
};

class _DynamicForm extends Component<any, DynamicFormProps, any> {
  render() {
    const {
      values,
      // touched,
      errors,
      // dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      // handleReset,
      config
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {config.map((field, index) => {
          const FieldComponent = FIELD_MAP[field.fieldType];
          return (
            <div key={index}>
              <label>{field.label}</label>
              <FieldComponent
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                {...field}
              />
              {errors[field.name] && <div>{errors[field.name]}</div>}
            </div>
          );
        })}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    );
  }
}

const formikEnhancer = withFormik({
  validate: (values, props) => {
    const config: FieldConfiguration<any>[] = props.config;
    const errors = {};
    config.forEach(field => {
      if (field.validators) {
        const firstBrokenValidationRule = field.validators.find(
          validatorName => {
            return Validators[validatorName](values[field.name], field.label);
          }
        );
        if (firstBrokenValidationRule) {
          errors[field.name] = Validators[firstBrokenValidationRule](
            values[field.name],
            field.label
          );
        }
      }
    });
    return errors;
  },

  mapPropsToValues: props => {
    const config: FieldConfiguration<any>[] = props.config;
    const values = config.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: field.value
      }),
      {}
    );
    return values;
  },
  handleSubmit: (payload, { setSubmitting }) => {
    console.log(payload);
    setSubmitting(false);
  }
});

export const DynamicForm = formikEnhancer(_DynamicForm);

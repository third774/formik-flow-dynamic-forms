// @flow

import { FieldConfiguration } from "./DynamicForm/FieldInterfaces";

export const FIELD_CONFIG: FieldConfiguration<any>[] = [
  {
    label: "Email",
    name: "email",
    value: "",
    fieldType: "input",
    validators: ["required"],
    fieldTypeConfiguration: {
      placeholder: "jane.doe@email.com",
      inputType: "email"
    }
  },
  {
    label: "Password",
    name: "password",
    value: "",
    fieldType: "input",
    validators: ["required"],
    fieldTypeConfiguration: {
      placeholder: "Password",
      inputType: "password"
    }
  },
  {
    label: "Remember Me",
    name: "rememberMe",
    value: false,
    fieldType: "checkbox",
    // validators: ["required"],
    fieldTypeConfiguration: {
      // placeholder: "What's your first name?",
      // type: "text"
    }
  }
];

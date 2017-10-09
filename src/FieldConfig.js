// @flow

import {FieldConfiguration} from "./DynamicForm/FieldInterfaces"

export const FIELD_CONFIG: FieldConfiguration<any>[] = [
  {
    label: "Email",
    name: "email",
    value: "",
    fieldType: "input",
    validators: ["required", "email"],
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
  },
  {
    label: "How did you hear about us?",
    name: "howDidYouHearAboutUs",
    value: "",
    fieldType: "select",
    validators: ["required"],
    fieldTypeConfiguration: {
      options: ["Friend", "Conference Talk", "Social Media"]
    }
  },
  {
    label: "Preferred Contact Method",
    name: "preferredContactMethod",
    value: "email",
    fieldType: "radio",
    validators: ["required"],
    fieldTypeConfiguration: {
      options: ["email", "phone", "snail mail"]
    }
  }
]

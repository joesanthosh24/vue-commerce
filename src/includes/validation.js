import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage,
  defineRule,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces,
  email,
  integer,
  min_value,
  max_value,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alpha_spaces);
    defineRule("email", email);
    defineRule("integer", integer);
    defineRule("min_value", min_value);
    defineRule("max_value", max_value);

    configure({
      // generateMessage function takes context object and called whenever a global validator function returns false. We return message we want to return for error
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces`,
          email: `The field ${ctx.field} must be a valid email`,
          integer: `The field ${ctx.field} must be a valid whole number`,
          min_value: `The field ${ctx.field} number is below minimum value`,
          max_value: `The field ${ctx.field} number is above maximum value`,
        };

        // ctx.rule.name refers to name of rule broken
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid`;

        return message;
      },
      // validateOnBlur will tell vee-validate to validate on blur event
      validateOnBlur: true,
      // validateOnChange will tell vee-validate if it should validate a field on the change event
      validateOnChange: true,
      // whether we should validate whenever input changes (input change is fired whenever a key is pressed)
      validateOnInput: false,
      // validate the input whenever value changes internally through the v-model directive
      validateOnModelUpdate: true,
    });
  },
};

import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";

export const Rehabilitation = reduxForm({
  form: "rehabilitation"
})(({ handleSubmit, disabled }) => {
  return (
    <Form id="rehabilitation" onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="username">Ваш ID в telegram</label>
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input
            tag={Field}
            component="input"
            name="username"
            placeholder="ychebotaev"
            disabled={disabled}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Адрес электронной почты</label>
        <Input
          tag={Field}
          component="input"
          name="email"
          type="email"
          placeholder="yury.79120345101@gmail.com"
          disabled={disabled}
        />
      </FormGroup>
      <FormGroup>
        <Input
          tag={Field}
          component={"textarea"}
          name="text"
          placeholder="Опишите, что произошло"
          disabled={disabled}
        />
      </FormGroup>
    </Form>
  );
});

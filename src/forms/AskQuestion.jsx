import React from "react";
import { reduxForm, Field } from "redux-form";
import { Form, FormGroup, Input } from "reactstrap";
import { siteKey } from "../constants/recaptcha";
import ReCAPTCHA from "react-google-recaptcha";

export const AskQuestion = reduxForm({
  form: "ask-question"
})(({ handleSubmit, onRecaptchaComplete, onRecaptchaExpire, disabled }) => {
  return (
    <Form id="ask-question" name="ask-question" onSubmit={handleSubmit}>
      <p>Старайтесь формулировать вопрос максимально четко, ясно и просто.</p>
      <FormGroup>
        <Input
          tag={Field}
          component="textarea"
          name="text"
          placeholder="Задайте вопрос"
          rows="5"
          disabled={disabled}
        />
        <p>Поддерживается markdown разметка.</p>
      </FormGroup>
      <FormGroup>
        <ReCAPTCHA
          sitekey={siteKey}
          size="normal"
          onChange={onRecaptchaComplete}
          onExpire={onRecaptchaExpire}
        />
      </FormGroup>
      {/*
      <FormGroup>
        <label htmlFor="screenshot">Приложите скриншот кода</label>
        <Input
          tag={Field}
          component="input"
          type="file"
          name="screenshot"
          accept=".jpeg,.jpg,.png,.gif"
          disabled={disabled}
        />
      </FormGroup>
      */}
    </Form>
  );
});

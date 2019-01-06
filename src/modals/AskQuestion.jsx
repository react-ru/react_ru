/* global ym*/

import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Alert
} from "reactstrap";
import { withModal } from "../HOCs/withModal";
import { endpointBase } from "../constants/endpointBase";
import { chatId } from "../constants/chatId";
import axios from "axios";
import { AskQuestion as AskQuestionForm } from "../forms/AskQuestion";

const AskQuestionSuccess = ({ success }) => {
  if (success) {
    return (
      <Alert color="success">
        Спасибо за обращение! Вступите в группу, чтобы получить ответ на вопрос.
      </Alert>
    );
  } else {
    return null;
  }
};

const AskQuestionError = ({ error }) => {
  if (error) {
    return <Alert color="danger">{error.stack}</Alert>;
  } else {
    return null;
  }
};

const SendButton = ({ disabled, toggle }) => {
  return (
    <Button form="ask-question" color="primary" disabled={disabled}>
      Отправить
    </Button>
  );
};

const JoinButton = ({ toggle, disabled }) => {
  const onClick = () => {
    ym(46609578, "reachGoal", "GOTO_CHAT");
    toggle();
  };

  return (
    <Button
      tag="a"
      href="tg://resolve?domain=react_ru"
      color="success"
      disabled={disabled}
      onClick={onClick}
    >
      Присоединиться
    </Button>
  );
};

export const AskQuestion = withModal("ask-question")(({ toggle, isOpen }) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [reCaptchaSuccess, setReCaptchaSuccess] = useState(false);

  const onSubmit = async values => {
    try {
      setPending(true);
      setError(null);
      setSuccess(false);
      const { data } = await axios.post(`${endpointBase}/api/ask_question`, {
        chat_id: chatId,
        ...values
      });
      setSuccess(data);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  const onRecaptchaComplete = () => {
    setReCaptchaSuccess(true);
  };

  const onRecaptchaExpire = () => {
    setReCaptchaSuccess(false);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Задать вопрос в чат</ModalHeader>
      <ModalBody>
        <AskQuestionSuccess success={success} />
        <AskQuestionError error={error} />
        <AskQuestionForm
          onSubmit={onSubmit}
          disabled={pending}
          onRecaptchaComplete={onRecaptchaComplete}
          onRecaptchaExpire={onRecaptchaExpire}
        />
      </ModalBody>
      <ModalFooter>
        {success ? (
          <JoinButton />
        ) : (
          <SendButton disabled={pending || !reCaptchaSuccess} />
        )}
      </ModalFooter>
    </Modal>
  );
});

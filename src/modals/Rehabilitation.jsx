import React, { useState } from "react";
import {
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";
import { withModal } from "../HOCs/withModal";
import { endpointBase } from "../constants/endpointBase";
import { chatId } from "../constants/chatId";
import axios from "axios";
import { Rehabilitation as RehabilitationForm } from "../forms/Rehabilitation";

const RehabilitationError = ({ error }) => {
  if (error) {
    return <Alert color="danger">{error.stack}</Alert>;
  } else {
    return null;
  }
};

const RehabilitationSuccess = ({ success, success: { email } }) => {
  if (success) {
    return (
      <Alert color="success">
        Спасибо за обращение! Мы пришлем ответ на <b>{email}</b>, ожидайте.
      </Alert>
    );
  } else {
    return null;
  }
};

const SendButton = ({ pending }) => {
  return (
    <Button
      form="rehabilitation"
      color="primary"
      type="submit"
      disabled={pending}
    >
      Отправить
    </Button>
  );
};

const CloseButton = ({ pending, toggle }) => {
  return (
    <Button color="primary" type="button" disabled={pending} onClick={toggle}>
      Закрыть
    </Button>
  );
};

export const Rehabilitation = withModal("rehabiltiation")(
  ({ isOpen, toggle }) => {
    const [pending, togglePending] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const onSubmit = async values => {
      try {
        togglePending(true);
        setError(null);
        setSuccess(false);
        const { data } = await axios.post(
          `${endpointBase}/api/rehabilitation`,
          {
            chat_id: chatId,
            ...values
          }
        );
        // toggle();
        setSuccess(data);
      } catch (error) {
        setError(error);
      } finally {
        togglePending(false);
      }
    };

    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Реабилитация в чате</ModalHeader>
        <ModalBody>
          <RehabilitationError error={error} />
          <RehabilitationSuccess success={success} />
          <RehabilitationForm onSubmit={onSubmit} disabled={pending} />
        </ModalBody>
        <ModalFooter>
          {success ? (
            <CloseButton toggle={toggle} pending={pending} />
          ) : (
            <SendButton pending={pending} />
          )}
        </ModalFooter>
      </Modal>
    );
  }
);

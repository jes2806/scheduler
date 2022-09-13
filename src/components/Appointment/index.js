import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from '../../hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDITING = "EDITING";
const ERROR_DELETE = "ERROR_DELETE";
const ERROR_SAVE = "ERROR_SAVE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(() => { transition(SHOW) })
      .catch(error => transition(ERROR_SAVE, true));
  }

  function deleting(event) {
    transition(DELETING, true);
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  }

  function cancel() {
    transition(CONFIRM)
  }

  function edit(name, interviewer) {
    transition(EDITING);
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={cancel}
          onEdit={edit}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />)}
      {mode === SAVING && <Status message={'Saving...'} />}
      {mode === DELETING && <Status message={'DELETING...'} />}
      {mode === CONFIRM &&
        <Confirm
          message="Are you sure you wish to delete this appointment?"
          onConfirm={deleting}
        />}
      {mode === EDITING &&
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
        />}
      {mode === ERROR_DELETE && <Error message={"Error canceling the appointment"} onClose={back} />}
      {mode === ERROR_SAVE && <Error message={"Error saving the appointment"} onClose={back} />}
    </article>
  )
};
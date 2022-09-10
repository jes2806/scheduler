import React, { useState } from 'react';
import InterviewerList from '../InterviewerList';
import Button from '../Button';



export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function reset() {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = function () {
    reset();
    props.onCancel()
  }

  const saveAppointment = function () {
    props.onSave(student, interviewer)
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event => setStudent(event.target.value))}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers} 
          value={interviewer}
          setInterviewer={setInterviewer}
          />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={saveAppointment}>Save</Button>
        </section>
      </section>
    </main>
  )
};
import React from 'react';
import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem.js';

export default function InterviewerList(props) {
  const interviewersArray = props.interviewers.map((eachInterviewer) => {
    console.log('console log:', eachInterviewer.name, props)
    return (
      <InterviewerListItem 
      key={eachInterviewer.id}
      id={eachInterviewer.id}
      name={eachInterviewer.name}
      avatar={eachInterviewer.avatar}
      selected={eachInterviewer.id === props.interviewer}
      setInterviewer={props.setInterviewer}
      />
    )
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersArray}</ul>
    </section>
  )
};
import React from 'react';
// import { useState } from 'react';
import './InterviewerListItem.scss';
import classNames from 'classnames/bind';

export default function InterviewerListItem(props) {

  const interviewerClass = classNames('interviewers__item', { 'interviewers__item--selected': props.selected })
  // const [interviewer, setInterviewer] = useState(props.id);
  const nameSelected = props.selected && props.name

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {nameSelected}
    </li>
  )
};
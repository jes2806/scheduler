import React from 'react';
import DayListItem from './DayListItem.js';
// import days from '../../stories/index.js';

export default function DayList(props) {
  console.log('props:', props);
  const daysArray = props.days.map((eachDay) => {
    return (
      <DayListItem
        key={eachDay.id}
        name={eachDay.name}
        spots={eachDay.spots}
        selected={eachDay.name === props.day}
        setDay={props.setDay}
      />
    )

  })
  return <ul>{daysArray}</ul>
};
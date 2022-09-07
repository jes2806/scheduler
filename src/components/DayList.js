import React from 'react';
import DayListItem from './DayListItem.js';

export default function DayList(props) {
  console.log('props:', props);
  const daysArray = props.days.map((eachDay) => {
    return (
      <DayListItem
        key={eachDay.id}
        name={eachDay.name}
        spots={eachDay.spots}
        selected={eachDay.name === props.value}
        setDay={props.onChange}
      />
    )

  })
  return <ul>{daysArray}</ul>
};
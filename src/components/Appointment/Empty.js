import React from 'react';

export default function Empty(props) {
  console.log('console testing:', props)
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt={props}
        onClick={props.onAdd}
      />
    </main>
  )
};
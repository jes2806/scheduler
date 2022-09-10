import React, { useState } from 'react';



export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    replace === true && setHistory([initial])
    setHistory(prev => [...prev, mode])
  }
  const back = () => {
    history.length > 1 && setHistory(prev => prev.slice(0, -1))
  }
  return { mode: history[history.length - 1], transition, back };
}
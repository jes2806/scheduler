import { useState, useEffect } from 'react';
import axios from 'axios';




export default function useApplicationData() {

  //sets state
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  //sets state from return of days, interviewers requests, and appointments
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((response) => {
      const daysResponse = response[0].data;
      const appointmentsResponse = response[1].data;
      const interviewersResponse = response[2].data;
      setState(prev => ({ ...prev, days: daysResponse, appointments: appointmentsResponse, interviewers: interviewersResponse }));
    });
  }, []);

  const setDay = day => setState((prev) => ({ ...prev, day }));

  const updateSpots = (incomingState, appointments, day) => {
    const state = { ...incomingState };
    const currentDay = day || state.day;


    const currentDayObject = state.days.find(
      (dayObj => dayObj.name === currentDay)
    );
    const currentDayIndex = state.days.findIndex(
      dayObj => dayObj.name === currentDay
    );

    const listofAppointmentIds = currentDayObject.appointments;
    const listOfNoAppointments = listofAppointmentIds.filter(
      (id) => !appointments[id].interview
    );

    const spots = listOfNoAppointments.length;
    const updatedDayObject = { ...currentDayObject, spots };
    const days = state.days;
    days[currentDayIndex] = updatedDayObject;
    return days;

  };



  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      const updatedDays = updateSpots(state, appointments, state.day);
      setState({ ...state, appointments: appointments, days: updatedDays, })
    })

  };

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const updatedDays = updateSpots(state, appointments, state.day);
        setState({ ...state, appointments: appointments, days: updatedDays })
      })
  };

  return { state, setDay, bookInterview, cancelInterview };
}
export function getAppointmentsForDay(state, correctDay) {
  if (state.days.length === 0) {
    return [];
  }

  const appointmentArray = state.days.filter(day => day.name === correctDay);
  return (appointmentArray.length === 0 ? [] : appointmentArray[0].appointments.map(id => state.appointments[id]));

};
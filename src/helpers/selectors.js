export const getAppointmentsForDay = function(state, correctDay) {
  if (state.days.length === 0) {
    return [];
  }

  const appointmentArray = state.days.filter(day => day.name === correctDay);
  return (appointmentArray.length === 0 ? [] : appointmentArray[0].appointments.map(id => state.appointments[id]));

};

export const getInterview = function(state, interview) {
  let interviewData = {}
  if (!interview) {
    return null;
  }
  interviewData.student = interview.student;

  for (const interviewer in state.interviewers) {
    if (interview.interviewer === state.interviewers[interviewer].id) {
      interviewData.interviewer = state.interviewers[interviewer];
    }
  }
  return interviewData;
};
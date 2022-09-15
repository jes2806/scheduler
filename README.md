# Interview Scheduler

Interview Scheduler is a single page application (SPA) for schedule management.

User can: add, edit, or delete interviews through the week with a list of interviewers!

Along with React, this requires use of the additional skills:
- **Axios**, 
- API server with **PostgreSQL**,
- Testing libraries such as **Jest**, **Storybook**, and **Cypress**,
- **Webpack** & **Babel**,
- **Webpack Dev Server**
- **Create React App**

## Major Features of this Product

- Interviews can be booked, cancelled and edited for different weekdays.

- A user can switch between weekdays.

- A user can book an interview in an empty appointment slot, by typing in a student name and clicking on an interviewer from a list of available interviewers.

!["Main View"](https://github.com/jes2806/scheduler/blob/master/docs/mainview.png?raw=true)

- On left toolbar, you can see the days of the week with the available amount of spots left for the day.

- The main body shows the appointment times, and if any appointments are booked.

- A user can edit or delete an existing interview.

!["Appointment Form"](https://github.com/jes2806/scheduler/blob/master/docs/form.png?raw=true)

- A user types in their name to book an appointment.

- A user is shown a list of interviewers, they can select to book an appointment with said interviewer.

- User can cancel the form, or submit it to edit or book the form!

!["Saving an Edit or Appointment"](https://github.com/jes2806/scheduler/blob/master/docs/saving.png?raw=true)

- A user will get a spinner letting them know their appointment is being saved to the schedule.

!["Confirming a Delete"](https://github.com/jes2806/scheduler/blob/master/docs/Confirm.png?raw=true)

- A user is presented with a confirmation when they attempt to delete an interview.


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```
## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Jest Test Framework

```sh
npm test
```

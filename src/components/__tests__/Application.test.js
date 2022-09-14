import React from "react";
import { render, cleanup, waitForElement, fireEvent, getByPlaceholderText, getByText, prettyDOM, getAllByTestId, getByAltText } from "@testing-library/react";
import Application from "components/Application";

describe("Application", () => {
  afterEach(cleanup);

  // it("defaults to Monday and changes the schedule when a new day is selected", () => {
  //   const { getByText } = render(<Application />);

  //   return waitForElement(() => getByText("Monday"))
  //     .then(() => {
  //       fireEvent.click(getByText("Tuesday"));
  //       expect(getByText("Leopold Silvers")).toBeInTheDocument();
  //     });
  // });

  it("changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);

    await waitForElement(() => getByText("Monday"));

    fireEvent.click(getByText("Tuesday"));

    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });

  it("loads data, books an interview, and reduces the spots remaining for the first day by 1", async () => {
    const { container } = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));
    console.log(prettyDOM(container));

    // const addButton = getAllByTestId(container, "Add-button")
    // console.log('test', addButton);
    const appointments = getAllByTestId(container, "appointment");
    // console.log(prettyDOM(appointments))
    const appointment = appointments[0]
    // console.log(prettyDOM(appointment))
    fireEvent.click(getByText(appointment, "Save"));
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });
    
    fireEvent.click(getByAltText(appointment, "Add"));
  });
});
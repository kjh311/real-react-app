import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import StarWars from "./StarWars";

// Mocking fetch to avoid network request
global.fetch = jest.fn();

describe("StarWars Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly and handles user input", async () => {
    const mockData = {
      name: "Luke Skywalker",
      height: "172",
      hair_color: "blond",
      eye_color: "blue",
    };

    // Mock the fetch API to resolve with mock data
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<StarWars />);

    // Simulate user typing in input field
    fireEvent.change(screen.getByPlaceholderText("Enter a number"), {
      target: { value: "1" },
    });

    // Simulate button click to submit the input
    fireEvent.click(screen.getByText("Sumbit"));

    // Wait for the component to update after the API call
    await waitFor(() => screen.getByText(mockData.name));

    // Verify if the name is displayed
    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(`Height: ${mockData.height}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Hair Color: ${mockData.hair_color}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Eye Color: ${mockData.eye_color}`)
    ).toBeInTheDocument();
  });

  it("does not make API call if input is empty", () => {
    render(<StarWars />);

    // Simulate empty input
    fireEvent.change(screen.getByPlaceholderText("Enter a number"), {
      target: { value: "" },
    });

    // Simulate button click to submit the input
    fireEvent.click(screen.getByText("Sumbit"));

    // Check if fetch was not called
    expect(fetch).not.toHaveBeenCalled();
  });

  it("does not display info when API request fails", async () => {
    // Mock fetch to reject with an error
    fetch.mockRejectedValueOnce(new Error("Error fetching info"));

    render(<StarWars />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText("Enter a number"), {
      target: { value: "1" },
    });

    // Simulate button click to submit the input
    fireEvent.click(screen.getByText("Sumbit"));

    // Wait for the component to update after the API call
    await waitFor(() => screen.queryByText("Luke Skywalker"));

    // Verify that the info is not displayed
    expect(screen.queryByText("Luke Skywalker")).not.toBeInTheDocument();
  });
});

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Login from ".";
import { store } from "../../store";
import Theme from "../../styles/theme/light";

describe("Login page", () => {
  it("Testing input", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme()}>
          <Login />
        </ThemeProvider>
      </Provider>
    );
    const input = await screen.findByPlaceholderText("Ex: email@mail.com");
    fireEvent.change(input, { target: { value: "nina@gmail.com" } });
    expect(screen.getByDisplayValue("nina@gmail.com")).toBeInTheDocument();
  });

  it("Check button if is enable", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={Theme()}>
          <Login />
        </ThemeProvider>
      </Provider>
    );
    // .toHaveAttribute('disabled')
    expect(screen.getByText("Entrar").closest("button")).not.toBeDisabled();
  });
});

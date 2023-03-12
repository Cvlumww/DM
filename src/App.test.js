import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppProvider } from "./AppContext";
import TestWrapper from "./util/TestWrapper";

test("Renders header correctly", () => {
  render(TestWrapper(<Header />));

  // Header Loads Correctly
  const headerText = screen.getByText("DnD Easier Combat for GM's");
  expect(headerText).toBeInTheDocument();
});

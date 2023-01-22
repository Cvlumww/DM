import { render } from "@testing-library/react";
import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";

test("Renders header correctly", () => {
  render(<Header />);
  const HeaderText = screen.getByText("DnD Combat Initiative List Sorter");

  expect(HeaderText).toBeInTheDocument();
});

import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import Main from "../components/fest_main";
import { store } from "../reducer/store";

const renderWithRedux = (component: any, {} = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

const setSelectedProperty = jest.fn();

describe("Main", () => {
  it("main render", () => {
    renderWithRedux(<Main choiceFest={"Sundance"} />);
    expect(screen.queryByText("1960s")).toBeNull();
    expect(screen.getByText("2000s")).toBeInTheDocument();
    renderWithRedux(<Main choiceFest={"Cannes"} />);
    expect(screen.getByText("1950s")).toBeInTheDocument();
  });
  it("fn", () => {
    renderWithRedux(<Main choiceFest={"Cannes"} />);
    fireEvent.click(screen.getByText("1940s"));
    screen.debug();
  });
});

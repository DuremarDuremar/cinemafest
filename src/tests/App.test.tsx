import { render, screen } from "@testing-library/react";
import Header from "../components/fest_header";
import { Provider } from "react-redux";

import { store } from "../reducer/store";

const renderWithRedux = (component: any, {} = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

const setSelectedProperty = jest.fn();

describe("Header", () => {
  it("header render", () => {
    renderWithRedux(
      <Header choiceFest={"Cannes"} setChoiceFest={setSelectedProperty} />
    );

    expect(screen.getByText("Cinema Festivals")).toBeInTheDocument();
  });
  it("header snapshot", () => {
    const component = renderWithRedux(
      <Header choiceFest={"Cannes"} setChoiceFest={setSelectedProperty} />
    );
    expect(component).toMatchSnapshot();
  });
});

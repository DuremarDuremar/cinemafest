import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import Header from "../components/fest_header";
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
    expect(screen.queryByRole("list")).toBeInTheDocument();
  });
  it("header snapshot", () => {
    const component = renderWithRedux(
      <Header choiceFest={"Cannes"} setChoiceFest={setSelectedProperty} />
    );
    expect(component).toMatchSnapshot();
  });
});

// import { dataMock } from "./dataMock";
// import { api } from "../components/fest_main";

// jest.mock("../components/fest_main");
// const userApiMock = api;

// const dispatchMock = jest.fn();

// const initianalState: DefaultState = {
//   loading: false,
//   data: [],
//   error: "",
// };

// describe("rr", () => {
//   const thunk = fetchMenu("Cannes", userApiMock);
// });

// test("", async ()=> {

// })

import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Fest from "./pages/fest";
import Directors from "./pages/directors";
import { Global, Content } from "./style/app_style";

const App: FC = () => {
  const res1000 = useMediaQuery({ query: "(min-width: 1000px)" });
  const res715 = useMediaQuery({ query: "(min-width: 715px)" });

  console.log(res1000);
  console.log(res715);

  return (
    <BrowserRouter>
      <Global />
      <Content>
        <Switch>
          <Route path="/" component={Fest} exact />
          <Route path="/direct" component={Directors} />
        </Switch>
      </Content>
    </BrowserRouter>
  );
};

export default App;

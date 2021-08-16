import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Fest from "./pages/fest";
import Directors from "./pages/directors";
import { Global, Content } from "./style/app_style";

const App: FC = () => {
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

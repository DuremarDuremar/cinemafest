import React, { FC, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import Fest from "./pages/fest";
import Directors from "./pages/directors";
import { respons950, respons715 } from "./reducer/actions/responsA";
import { Global, Content } from "./style/app_style";

const App: FC = () => {
  const dispatch = useDispatch();
  const res950 = useMediaQuery({ query: "(min-width: 950px)" });
  const res715 = useMediaQuery({ query: "(min-width: 715px)" });

  useEffect(() => {
    dispatch(respons950(res950));
    dispatch(respons715(res715));
  }, [res950, res715, dispatch]);

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

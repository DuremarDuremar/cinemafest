import React, { FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import {
  respons950,
  respons730,
  respons520,
  respons1025,
} from "./reducer/actions/responsA";
import { Global, Content } from "./style/app_style";
import Pages from "./pages/pages";

const App: FC = () => {
  const dispatch = useDispatch();
  const res1025 = useMediaQuery({ query: "(min-width: 1025px)" });
  const res950 = useMediaQuery({ query: "(min-width: 950px)" });
  const res730 = useMediaQuery({ query: "(min-width: 730px)" });
  const res520 = useMediaQuery({ query: "(min-width: 520px)" });

  useEffect(() => {
    dispatch(respons1025(res1025));
    dispatch(respons950(res950));
    dispatch(respons730(res730));
    dispatch(respons520(res520));
  }, [res1025, res950, res520, res730, dispatch]);

  return (
    <BrowserRouter>
      <Global />
      <Content>
        <Pages />
      </Content>
    </BrowserRouter>
  );
};

export default App;

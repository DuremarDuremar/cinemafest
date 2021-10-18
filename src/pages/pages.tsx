import React, { useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Film from "./film";
import Fest from "./fest";
import Directors from "./directors";
import "../style/styles.css";
const Pages = () => {
  const location = useLocation();

  const nodeRef = useRef(null);

  return (
    <Switch>
      <Route path="/" component={Fest} exact />
      <Route path="/direct" component={Directors} />
      <TransitionGroup>
        <CSSTransition
          // nodeRef={nodeRef}
          key={location.key}
          classNames="page"
          timeout={1200}
        >
          <Switch location={location}>
            <Route path="/:id" component={Film} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Switch>
  );
};

export default Pages;

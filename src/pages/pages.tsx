import React, { useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Film from "./film";

import "../style/styles.css";
const Pages = () => {
  const location = useLocation();

  const nodeRef = useRef(null);

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          nodeRef={nodeRef}
          key={location.key}
          classNames="page"
          timeout={700}
        >
          <div ref={nodeRef}>
            <Switch location={location}>
              <Route path="/:id" component={Film} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Pages;
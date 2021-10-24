import React, { useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Film from "./film";

import "../style/stylesTransition.css";

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
          in
          timeout={{ enter: 800, exit: 100 }}
          unmountOnExit
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

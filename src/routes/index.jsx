// @flow
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "components/Loader";

const MainContainer = lazy(() => import("containers/MainContainer"));
const NotFoundContainer = lazy(() => import("containers/NotFoundContainer"));

const Routes = () => (
  <Switch>
    <Suspense fallback={Loader}>
      <Route path="/" component={MainContainer} />
      <Route path="*" component={NotFoundContainer} />
    </Suspense>
  </Switch>
);

export default Routes;

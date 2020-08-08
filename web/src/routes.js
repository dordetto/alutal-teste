import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main.js";
import Index from "./pages/productList.js";
import Insert from "./pages/main.js";
import Update from "./pages/productUpdate.js";
import Delete from "./pages/productDelete.js";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/list" component={Index} />
      <Route path="/insert" component={Insert} />
      <Route path="/update" component={Update} />
      <Route path="/delete" component={Delete} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

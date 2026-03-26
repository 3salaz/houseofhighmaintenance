import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "../components/layout/Layout";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Home from "../pages/public/Home";
import Services from "../pages/public/Services";

const AppRouter = () => {
  return (
    <IonRouterOutlet>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>

        <Redirect exact from="/home" to="/" />

        <Route exact path="/about">
          <Layout>
            <About />
          </Layout>
        </Route>

        <Route exact path="/services">
          <Layout>
            <Services />
          </Layout>
        </Route>

        <Route exact path="/contact">
          <Layout>
            <Contact />
          </Layout>
        </Route>

        <Redirect to="/" />
      </Switch>
    </IonRouterOutlet>
  );
};

export default AppRouter;

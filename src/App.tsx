import { Switch, Route, Redirect } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import "./App.css";
import Layout from "./components/layout/Layout";
import Navbar from "./components/layout/Navbar";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <IonApp>
      <IonReactRouter>
          <Navbar />
          <IonRouterOutlet id="main-content">
            <Switch>
              <Redirect exact from="/" to="/coming-soon" />
              <Route
                path="/coming-soon"
                render={() => (
                  <Layout>
                    <ComingSoon />
                  </Layout>
                )}
              />
              <Route
                path="/home"
                render={() => (
                  <Layout>
                    <Home />
                  </Layout>
                )}
              />
              <Route
                path="/about"
                render={() => (
                  <Layout>
                    <About />
                  </Layout>
                )}
              />
              <Route
                path="/services"
                render={() => (
                  <Layout>
                    <Services />
                  </Layout>
                )}
              />
              <Route
                path="/contact"
                render={() => (
                  <Layout>
                    <Contact />
                  </Layout>
                )}
              />
            </Switch>
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;

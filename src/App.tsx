import { Switch, Route, Redirect } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";
import ComingSoon from "./pages/ComingSoon";
import { EmailProvider } from "./context/EmailContext"; // Import EmailProvider

function App() {
  return (
    <IonApp>
      <EmailProvider>
        <IonReactRouter>
          <IonRouterOutlet id="main-content">
            <Switch>
              <Redirect exact from="/" to="/coming-soon" />
              <Route path="/coming-soon" render={() => <ComingSoon />} />
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
      </EmailProvider>
    </IonApp>
  );
}

export default App;

import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import AddDao from "./components/add-dao.component";
import DaoEdit from "./components/dao-edit.component";
import DaoList from "./components/dao-list.component";
import DaoDisplay from "./components/dao-display.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/home"} className="navbar-brand">
            DAOggregator
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/allDao"} className="nav-link">
                Daos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addDao"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/allDao"]} component={DaoList} />
            <Route exact path="/addDao" component={AddDao} />
            <Route path="/daos_display/:id" component={DaoDisplay} />
            <Route path="/daos_edit/:id" component={DaoEdit} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;

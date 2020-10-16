import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landingpage from "./Landingpage";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/mainpage">
            <Nav />
            <Banner />
            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOrignals}
              isLargeRow
            />
            <Row title="Trending Now " fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated " fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies " fetchUrl={requests.fetchHorrorMovies} />
            <Row
              title="Romance Movies "
              fetchUrl={requests.fetchRomanceMovie}
            />
            <Row
              title="Documentaries "
              fetchUrl={requests.fetchDocumentaries}
            />
          </Route>
          <Route path="/">
            <Landingpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

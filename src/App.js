import React from "react";
import "./App.css";
import Header from "./components/Header";
import Personal from "./components/Personal-info";
import Experience from "./components/Experience-info";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <body>
          <div id='edit-container'>
            <Personal />
            <Experience />
          </div>
        </body>
      </div>
    );
  }
}
export default App;

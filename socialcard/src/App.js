import React, { Component, Fragment } from 'react';
import './App.css';
import SocialCard from './components/socialcard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      alldata: [],
      error: null
    }
  }
  componentDidMount() {
    fetch('/data/userMessages.json')
      .then(response => response.json())
      .then(data => this.setState({ alldata: data }))
      .catch(error => this.setState({ error }));
  }
  render() {
    return (
      <Fragment>
        <div id="theme">
          <img src="/images/title.png" alt="Social App icon" className="img-title" /><br />
          Dev Card Application
      </div>
        {this.state.error && <p>{this.state.error.message}</p>}

        {this.state.alldata.map(content =>
          <SocialCard
            user={content.user}
            message={content.info}
            action={content.action}
            email={content.email}
            img={content.id}
            key={content.id}
          />
        )}
      </Fragment>
    );
  }
}

export default App;

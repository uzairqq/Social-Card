import React, { Component, Fragment } from 'react';
import './App.css';

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
    var userName = this.state.alldata.map((content) => {
      return <li key={content.user}>{content.user}</li>
    })
    var email = this.state.alldata.map((content) => {
      return <li key={content.user}>{content.email}</li>
    })
    return (
      <Fragment>
        <div id="theme">
          <img src="/images/title.png" alt="Social App Icon" className="img-title" />
        </div>
        {this.state.error && <p>{this.state.error.message}</p>}
        <table>
          <tbody>
            <tr>
              <th>UserName</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>{userName}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>



      </Fragment>
    );
  }
}

export default App;

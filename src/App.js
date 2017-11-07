import React, { Component } from "react";
import "./App.css";

import { fetchPosts, fetchClusters, tagPostWithCluster } from "./services";

const Body = () => (
  <div className="App-intro">
    {fetchPosts().map(post => (
      <div className="post" key={post.id}>
        <div>
          {`${post.id} - ${post.company}`} <pre>"{post.description}"</pre>
        </div>
        <div>
          <select
            type="text"
            onChange={event => tagPostWithCluster(post.id, event.target.value)}
          >
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            {fetchClusters().map(cluster => (
              <option value={cluster.id} key={cluster.id}>
                {cluster.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    ))}
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cluster tag manager</h1>
        </header>
        <Body />
      </div>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import MarkdownEditor from './components/MarkdownEditor';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/editor">Editor</a>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/editor" component={MarkdownEditor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

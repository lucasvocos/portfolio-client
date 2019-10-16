import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ProjectsProvider } from './contexts/ProjectsContext'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProjectsProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </ProjectsProvider>,
  document.getElementById('root'));

serviceWorker.unregister();

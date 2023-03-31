import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const notes = [
  {
    "id": 1,
    "content": "HTML is Easy",
    "date": "2023-02-14",
    "important": false
  },
  {
    "id": 2,
    "content": "Browser can execute only JavaScript",
    "date": "2023-02-15",
    "important": false
  },
  {
    "id": 3,
    "content": "GET and POST are the most important methods of HTTP protocol",
    "date": "2023-02-15",
    "important": true
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
);


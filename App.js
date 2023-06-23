import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignupForm from './components/Signupform';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <SignupForm />
      </Router>
    </div>
  );
};

export default App;

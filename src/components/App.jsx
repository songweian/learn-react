import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({children}) => {
  return (
    <MainLayout>
      <div>{children}</div>
    </MainLayout>
  );
};

App.propTypes = {
	children: PropTypes.element.isRequired,
};

export default App;

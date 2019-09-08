import React from 'react';
import ProjectList from './ProjectList'
import ReactDOM from 'react-dom'

describe(`ProjectListw component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProjectList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
});

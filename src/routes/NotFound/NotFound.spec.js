import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NotFound from './NotFound'

describe(`NotFound component`, () => {
  it('renders a NotFound by default', () => {
    const wrapper = shallow(<NotFound />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

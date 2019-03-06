import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'

import Snakke from './'

Enzyme.configure({ adapter: new Adapter() })

describe('Snakke', () => {
  it('renders without crashing', () => {
    shallow(<Snakke />)
  })

  it('renders an `div`', () => {
    const wrapper = shallow(<Snakke />)
    expect(wrapper.find('div')).to.have.lengthOf(1)
  })
})

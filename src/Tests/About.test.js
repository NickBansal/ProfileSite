import './setupTest';
import React from 'react';
import About from '../Pages/About';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('<Landing />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<About />)
    }) 
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('Checks that the main div component with id About exists', () => {
        expect(wrapper.find('div#About').exists()).toBe(true)
    })
    it('Counts the amount of icons on the page', () => {
        expect(wrapper.find('i').length).toBe(5)
    })
})
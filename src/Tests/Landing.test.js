import './setupTest';
import React from 'react';
import Landing from '../Pages/Landing';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('<Landing />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Landing />)
    }) 
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('Checks that the main div component with id TitlePage exists', () => {
        expect(wrapper.find('div#TitlePage').exists()).toBe(true)
    })
    it('Counts the amount of divs on the page', () => {
        expect(wrapper.find('div').length).toBe(2)
    })
})
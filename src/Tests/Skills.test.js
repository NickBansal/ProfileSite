import './setupTest';
import React from 'react';
import Skills from '../Pages/Skills';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('<Landing />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Skills />)
    }) 
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('Checks that the main div component with id Skills exists', () => {
        expect(wrapper.find('div#Skills').exists()).toBe(true)
    })
    it('Counts the amount of list topics on the page', () => {
        expect(wrapper.find('ul.SkillArea').length).toBe(5)
    })
})
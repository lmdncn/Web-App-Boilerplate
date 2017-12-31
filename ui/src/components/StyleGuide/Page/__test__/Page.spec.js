
import React from 'react'
import {shallow, mount} from 'enzyme';
import ConnectedComponent from '../PageContainer'
import Component from '../Page'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {createStore} from 'redux'


describe('>>> Page --- Shallow Render REACT COMPONENTS', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Component />)
    })

    // Snap Shot
    it('capturing Snapshot of Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1)
    });

    it('+++ contains main', () => {
        expect(wrapper.contains(
            <div>Page</div>
        )).toBe(true)
    });
});


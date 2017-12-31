
import React from 'react'
import {shallow, mount} from 'enzyme';
import ConnectedBoilerPlate from '../src/containers/BoilerPlateContainer'
import BoilerPlate from '../src/components/BoilerPlate'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {createStore} from 'redux'


describe('>>> Boilerplate --- Shallow Render REACT COMPONENTS', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<BoilerPlate />)
    })

    // Snap Shot
    it('capturing Snapshot of BoilerPlate', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('+++ render the DUMB component', () => {
        expect(wrapper.length).toEqual(1)
    });

    it('+++ contains main', () => {
        expect(wrapper.contains(
            <div>Test</div>
        )).toBe(true)
    });
});



// ******************************************************************************
// *************************
// describe('>>> Boilerplate --- Shallow Render REACT COMPONENTS', () => {
//     let wrapper
//     const output = 10

//     beforeEach(() => {
//         wrapper = shallow(<BoilerPlate output={output}/>)

//     })

//     it('+++ render the DUMB component', () => {
//         expect(wrapper.length).toEqual(1)
//     });

//     it('+++ contains header - h2', () => {
//         expect(wrapper.contains(
//             <h2>using React and Redux</h2>
//         )).toBe(true)
//     });
//     it('+++ h2 header value ', () => {
//         expect(wrapper.find('h2').get(0).props.children).toBe("using React and Redux")
//     });
//     it('+++ contains input1', () => {
//         expect(wrapper.find('input').at(0).equals(
//             <input type="text" placeholder="Input 1" ref="input1"></input>
//         )).toBe(true)
//     });
//     it('+++ contains input2', () => {
//         expect(wrapper.find('input').at(1).equals(
//             <input type="text" placeholder="Input 2" ref="input2"></input>
//         )).toBe(true)
//     });
//     it('+++ contains output', () => {
//         expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
//     });
//     it('+++ contains button with id="add"', () => {
//         expect(wrapper.find('button#add').type()).toEqual('button')
//     });
//     it('+++ contains button with id="subtract"', () => {
//         expect(wrapper.find('button#subtract').type()).toEqual('button')
//     });
// });

// // ******************************************************************************
// // *************************
// describe('>>> Boilerplate --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
//     const initialState = {
//             output: 100
//         }
//         const mockStore = configureStore()
//             let store,
//                 container

//             beforeEach(() => {
//                 store = mockStore(initialState)
//                 container = shallow(<ConnectedBoilerPlate store={store}/>)
//             })

//             it('+++ render the connected(SMART) component', () => {
//                 expect(container.length).toEqual(1)
//             });

//             it('+++ check Prop matches with initialState', () => {
//                 expect(container.prop('output')).toEqual(initialState.output)
//             });

//         });

//         // ******************************************************************************
//         // *************************
//         describe('>>> Boilerplate --- REACT-REDUX (Mount + wrapping in <Provider>)', () => {
//             const initialState = {
//                     output: 10
//                 }
//                 const mockStore = configureStore()
//                     let store,
//                         wrapper

//                     beforeEach(() => {
//                         store = mockStore(initialState)
//                         wrapper = mount(
//                             <Provider store={store}><ConnectedBoilerPlate/></Provider>
//                         )
//                     })

//                     it('+++ contains header - h2', () => {
//                         expect(wrapper.contains(
//                             <h2>using React and Redux</h2>
//                         )).toBe(true)
//                     });

//                     it('+++ render the connected(SMART) component', () => {
//                         expect(wrapper.find(ConnectedBoilerPlate).length).toEqual(1)
//                     });

//                     it('+++ check Prop matches with initialState', () => {
//                         expect(wrapper.find(BoilerPlate).prop('output')).toEqual(initialState.output)
//                     });

//                     it('+++ check action on dispatching ', () => {
//                         let action
//                         store.dispatch(addInputs(500))
//                         store.dispatch(subtractInputs(100))
//                         action = store.getActions()
//                         expect(action[0].type).toBe("ADD_INPUTS")
//                         expect(action[1].type).toBe("SUBTRACT_INPUTS")
//                     });

//                 });
//                 // ******************************************************************************
//                 // *************************
//                 describe('>>> Boilerplate --- REACT-REDUX (actual Store + reducers) more of Integration Testing', () => {
//                     const initialState = {
//                             output: 10
//                         }
//                         let store,
//                             wrapper

//                         beforeEach(() => {
//                             store = createStore(calculatorReducers)
//                             wrapper = mount(
//                                 <Provider store={store}><ConnectedBoilerPlate/></Provider>
//                             )
//                         })

//                         it('+++ check Prop matches with initialState', () => {
//                             store.dispatch(addInputs(500))
//                             expect(wrapper.find(BoilerPlate).prop('output')).toBe(500)
//                         });

//                     });
                    // ******************************************************************************
                    // *************************
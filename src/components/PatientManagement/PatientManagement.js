import React, { useReducer, useRef } from 'react';
import { patientReducers, patientState } from '../../reducers/patientReducers';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducers, patientState);
    
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD-PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1,
        })
        nameRef.current.value = '';
    }
    return (
        <div>
            <h1>Patient Management: {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>

                <input ref={nameRef}></input>
            </form>
            {
                state.patients.map(pt => <li key={pt.id}>{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;
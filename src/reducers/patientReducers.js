export const patientState = {
    patients: []
}

export const patientReducers = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatients = [...state.patients, newPatient];
            return {patients: allPatients};

        case 'REMOVE_PATIENT':
            return state;
        default:
            return state;
    }
}
const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_OUTPUT':
            return {
                ...state,
                output: [...state.output , action.payload]
            };
        case 'SET_CODE':
            return {
                ...state,
                is_code : action.payload
            }
        default:
            return state;
    }
};

export default Reducer;

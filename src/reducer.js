export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE AFTER DEVELOPING
    token: 'BQCOlXJfr583_jYBTwLm3adgiPnX5yBmgtPgkpEkyaXAjlFWbGfaXjFYDCBNrzlpMyvgv4C3FEQJGRTwhPl3QNq8W352ur0YWoPKekhF7GhvIVkKYkcjMkXX_EDUr8ChNzvN7S3VYaLUgP0KefsAK9KZUxnGx9g',
    //token: null
};

const reducer = (state, action) => {
console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        default:
            return state;
    }

}

export default reducer;
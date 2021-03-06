export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    playing: false,
    item: null,
    //REMOVE AFTER DEVELOPING
    //token: 'BQCOlXJfr583_jYBTwLm3adgiPnX5yBmgtPgkpEkyaXAjlFWbGfaXjFYDCBNrzlpMyvgv4C3FEQJGRTwhPl3QNq8W352ur0YWoPKekhF7GhvIVkKYkcjMkXX_EDUr8ChNzvN7S3VYaLUgP0KefsAK9KZUxnGx9g',
    token: null,
    discover_weekly: null,
    top_artists: null
};

const reducer = (state, action) => {
console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case "SET_PLAYING":
            return {
              ...state,
             playing: action.playing,
           };

        case "SET_ITEM":
            return {
              ...state,
              item: action.item,
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

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        case "SET_TOP_ARTISTS":
            return {
                 ...state,
                 top_artists: action.top_artists,
            };
        
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }

}

export default reducer;
const UPDATE_QUERY_TEXT = "UPDATE-QUERY-TEXT";

const stateForTags = () => {
    return ["tag1", "tag2", "tag3", "tag4", "tag5"];
}

const initialState = {
    tags: stateForTags(),
    inputSearch: ""
}

const searchReducer = (state = initialState, action) => {
    let cloneState = { ...state };

    switch (action.type) {
        case "ADD-NEW-TAG":
            cloneState.tags = { ...state.tags };
            cloneState.tags.push(action.tag);
            break;
        case "UPDATE-QUERY-TEXT":
            cloneState.inputSearch = action.queryText;
            break;
        default:
            break;
    }

    return cloneState;
}

export const updateQueryTextActionCreator = (queryText) => {
    return {
        type: UPDATE_QUERY_TEXT,
        queryText: queryText
    }
}

export default searchReducer;
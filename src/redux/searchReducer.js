const stateForTags = () => {

	return ["tag1", "tag2", "tag3", "tag4", "tag5"];
}

const initialState = {
    tags: stateForTags()
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-NEW-TAG":
            state.tags.push(action.tag);
            return state;
        default:
            return state;
    }
}

export default searchReducer;
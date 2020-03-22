const UPDATE_NAME_NEW_EVENT = "UPDATE-NAME-NEW-EVENT";

const initialState = {
    nameNewEvent: "",
    tagNewEvent: "",
    infoNewEvent: ""
}

const addEventReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE-NAME-NEW-EVENT":
            state.nameNewEvent = action.name;
            return state;
        case "ADD-NEW-EVENT":
            state.nameNewEvent = "";
            state.tagNewEvent = "";
            state.infoNewEvent = "";
            return state;
        default:
            return state;
    }
}

export const updateNameNewEventActionCreator = (newName) => {
    return { type: UPDATE_NAME_NEW_EVENT, name: newName };
};

export default addEventReducer;
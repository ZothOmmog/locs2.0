const UPDATE_NAME_NEW_EVENT = "UPDATE-NAME-NEW-EVENT";
const UPDATE_TAGS_NEW_EVENT = "UPDATE-TAGS-NEW-EVENT";
const UPDATE_INFO_NEW_EVENT = "UPDATE-INFO-NEW-EVENT";
const ADD_NEW_EVENT = "ADD-NEW-EVENT";

const initialState = {
    nameNewEvent: "",
    tagNewEvent: "",
    infoNewEvent: ""
}

const addEventReducer = (state = initialState, action) => {
    let cloneState = { ...state };

    switch (action.type) {
        case "UPDATE-NAME-NEW-EVENT":
            cloneState.nameNewEvent = action.name;
            break;
        case "UPDATE-TAGS-NEW-EVENT":
            cloneState.tagNewEvent = action.tag;
            break;
        case "UPDATE-INFO-NEW-EVENT":
            cloneState.infoNewEvent = action.info;
            break;
        case "ADD-NEW-EVENT":
            cloneState.nameNewEvent = "";
            cloneState.tagNewEvent = "";
            cloneState.infoNewEvent = "";
            break;
        default:
            break;
    }

    return cloneState;
}

export const updateNameNewEventActionCreator = (newName) => {
    return {
        type: UPDATE_NAME_NEW_EVENT,
        name: newName
    };
};
export const updateTagsNewEventActionCreator = (newTag) => {
    return {
        type: UPDATE_TAGS_NEW_EVENT,
        tag: newTag
    };
};
export const updateInfoNewEventActionCreator = (newInfo) => {
    return {
        type: UPDATE_INFO_NEW_EVENT,
        info: newInfo
    };
};
export const addNewEventActionCreator = (newName, newTag, newInfo) => {
    return {
        type: ADD_NEW_EVENT,
        event: {
            name: newName,
            type: newTag,
            info: newInfo
        }
    };
}

export default addEventReducer;
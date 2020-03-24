import React from 'react';
import AddEvent from './AddEvent';
import { updateNameNewEventActionCreator, 
    updateTagsNewEventActionCreator,
    updateInfoNewEventActionCreator, 
    addNewEventActionCreator} from '../../redux/addEventReducer';

const AddEventContainer = (props) => {
    const updateNameNewEvent = (newName) => {
        const changeNameNewEvent = updateNameNewEventActionCreator(newName);
        props.store.dispatch(changeNameNewEvent);
    }
    const updateTagsNewEvent = (newTag) => {
        const changeTagsNewEvent = updateTagsNewEventActionCreator(newTag);
        props.store.dispatch(changeTagsNewEvent);
    }
    const updateInfoNewEvent = (newInfo) => {
        const changeInfoNewEvent = updateInfoNewEventActionCreator(newInfo);
        props.store.dispatch(changeInfoNewEvent);
    }
    const addNewEvent = (newName, newTag, newInfo) => {
        const addNewEvent = addNewEventActionCreator(newName, newTag, newInfo);
        props.store.dispatch(addNewEvent);
    }
    
    return (
        <AddEvent
            updateNameNewEvent={updateNameNewEvent}
            updateTagsNewEvent={updateTagsNewEvent}
            updateInfoNewEvent={updateInfoNewEvent}
            addNewEvent={addNewEvent}
            state={props.store.getState().addEventPage}
        />
    );
}

export default AddEventContainer;
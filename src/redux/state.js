const GET_TAGS = "GET-TAGS";
const GET_EVENTS = "GET-EVENTS";
const CHANGE_NAME_NEW_EVENT = "CHANGE-NAME-NEW-EVENT";

const stateForEvents = () => {
	let str = "Съешь ещё этих сладких французских булок и выпей чаю ";
	let eventInfo = str.repeat(23);

	let Events = []
	for (let i = 0; i < 25; i++) {
		Events.push(
			{
				name: `Мероприятие ${i}`,
				type: `Тип мероприятия ${i}`,
				info: eventInfo
			}
		);
	}
	return Events;
}

const stateForTags = () => {

	return ["tag1", "tag2", "tag3", "tag4", "tag5"];
}

let rerenderEntireTree;

const Store = {
	State: {
		_tags: stateForTags(),
		_events: stateForEvents(),

		search: {
			
		},
		lenta: {
			
		},
		addEvent: {
			nameNewEvent: "",
			tagNewEvent: "",
			infoNewEvent: ""
		}
	},

	dispatch(action) {
		switch (action.type) {
			case "ADD-NEW-EVENT":
				this.State._tags.push(action.newEvent);
				rerenderEntireTree();
				this.State.addEvent.nameNewEvent = "";
				this.State.addEvent.tagNewEvent = "";
				this.State.addEvent.infoNewEvent = "";
				break;
			case "ADD-NEW-TAG":
				this.State._tags.push(action.newTag);
				rerenderEntireTree();
				break;
			case "GET-TAGS":
				return this.State._tags;
			case "GET-EVENTS":
				return this.State._events;

			case "CHANGE-NAME-NEW-EVENT":
				this.State.addEvent.nameNewEvent = action.name;
				rerenderEntireTree();
				break;
			default:
				break;
		}
	}
}

window.state = Store.State;

export let subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export const getEventsActionCreator = () => ({ type: GET_EVENTS });
export const getTagsActionCreator = () => ({ type: GET_TAGS });
export const changeNameNewEventActionCreator = (newName) => ({
	type: CHANGE_NAME_NEW_EVENT, name: newName 
});

export default Store;
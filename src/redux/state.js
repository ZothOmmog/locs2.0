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

const getConstructorState = () => {
	let events = stateForEvents();
	let tags = stateForTags();

	return function () {
		this.search = {
			getTags() {
				return tags.slice();
			}
		};
		this.lenta = {
			getEvents() {
				return events.slice();
			}
		};
		this.addEvent = {
			currentName: "",
			currentTags: "",
			currentInfo: "",

			changeCurrentName(text) {
				this.currentName = text;
				rerenderEntireTree();
			},
			changeCurrentTags(text) {
				this.currentTags = text;
				rerenderEntireTree();
			},
			changeCurrentInfo(text) {
				this.currentInfo = text;
				rerenderEntireTree();
			},
			addCurrentEvent() {
				events.push({ name: this.currentName, type: this.currentTags, info: this.currentInfo });
				this.currentName = "";
				this.currentTags = "";
				this.currentInfo = "";
				rerenderEntireTree();
			}
		};
		return this;
	}
}

const StateConstr = getConstructorState();
const state = new StateConstr();

export let subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state;
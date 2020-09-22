//const json = require("../data/mines.json");
import json from "../data/mines.js";

//Utility functons
let updateType = (types, type) => types[type] += 1
let updateData = (data, state, types) => data.set(state, types)

//Map for storing counts
let data = new Map();

let features = json[0]["features"];

for (let i = 0; i < features.length; i++) {

	let properties = features[i]["properties"];

	let state = properties["STATE"];
	let type = properties["Mineral_Type"];

	if (type == "Unknown") continue;

	let newTypes = {
		"Non-Metallic": 0,
		"Metallic": 0
	};

	if (!data.has(state)) {
		updateType(newTypes, type);
		updateData(data, state, newTypes);

	} else {

		let oldTypes = data.get(state);
		updateType(oldTypes, type);
		updateData(data, state, oldTypes);
	}
}

console.log(data);

export {data};

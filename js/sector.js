import json from "../data/mines.js";

let sortByValues = (sector) => {
    return new Map([...sector.entries()].sort((first, second) => second[1] - first[1]));
};

//Map for storing counts
export let sector1 = new Map();
export let sector2 = new Map();
export let sector3 = new Map();

let features = json[0]["features"];

for (let i = 0; i < features.length; i++) {

    let properties = features[i]["properties"];

    let Sector_1 = properties["Sector_1"];
    let Sector_2 = properties["Sector_2"];
    let Sector_3 = properties["Sector_3"];
    let count;
    if (Sector_1 != null) {
        count = sector1.get(Sector_1) || 0;
        sector1.set(Sector_1, count + 1);
    }
    if (Sector_2 != null) {
        count = sector2.get(Sector_2) || 0;
        sector2.set(Sector_2, count + 1);
    }
    if (Sector_3 != null) {
        count = sector3.get(Sector_3) || 0;
        sector3.set(Sector_3, count + 1);
    }
}

sector1 = sortByValues(sector1);
sector2 = sortByValues(sector2);
sector3 = sortByValues(sector3);

console.log(sector1);
console.log(sector2);
console.log(sector3);
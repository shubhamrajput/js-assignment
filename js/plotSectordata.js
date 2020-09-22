import plot from './genericBarChart.js';
import { sector1, sector2, sector3 } from './sector.js'

let sector1Lables = [];
let countsector1 = [];
for (let sector of sector1.keys()) {
    sector1Lables.push(sector);
    let uniqueCount = sector1.get(sector);
    countsector1.push(uniqueCount);
}

let sector2Lables = [];
let countsector2 = [];
for (let sector of sector2.keys()) {
    sector2Lables.push(sector);
    let uniqueCount = sector2.get(sector);
    countsector2.push(uniqueCount);
}

let sector3Lables = [];
let countsector3 = [];
for (let sector of sector3.keys()) {
    sector3Lables.push(sector);
    let uniqueCount = sector3.get(sector);
    countsector3.push(uniqueCount);
}


plot(countsector1, sector1Lables, "#sector1");
plot(countsector2, sector2Lables, "#sector2");
plot(countsector3, sector3Lables, "#sector3");
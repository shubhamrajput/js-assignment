import { data } from './state.js';

let MetallicCount = [];
let NonMetallicCount = [];
let states = [];

for (let state of data.keys()) {
  states.push(state);
  let types = data.get(state);
  MetallicCount.push(types["Metallic"]);
  NonMetallicCount.push(types["Non-Metallic"]);
}


var bar = c3.generate({
  bindto: "#states",

  data: {
    columns: [
      ['Metallic', ...MetallicCount],
      ['Non-Metallic', ...NonMetallicCount]
    ],

    type: 'bar'
  },
  bar: {
    width: {
      ratio: 0.3
    }
  },

  axis: {
    x: {
      type: 'category',
      categories: [...states],
      label: 'States'
    },
    y: {
      label: 'Count'
    }
  },
  grid: {
    x: {
      show: true
    },
    y: {
      show: true
    }
  }
});
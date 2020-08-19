const hitAreas = [
  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,10],
  [9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10],
  [9,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10],
  [9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10],
  [9,9,9,9,9,0,0,0,0,0,1,0,1,0,2,2,2,2,2,2,2,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10],
  [9,9,9,9,0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10],
  [9,9,9,9,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10],
  [9,9,9,9,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,10],
  [9,9,9,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10],
  [9,9,9,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,5,5,5,5,5,5,5,6,0,6,0,0,6,6,6,6,0,0,0,0,0,0,0,0,10,10,10],
  [9,9,9,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,5,5,5,5,5,5,5,6,6,6,0,0,6,6,6,6,0,0,0,0,0,0,0,0,10,10,10],
  [9,9,9,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,2,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,5,5,5,5,5,5,5,6,6,6,6,0,6,6,6,6,0,0,0,0,0,0,0,0,10,10,10],
  [9,9,0,0,0,0,0,0,1,1,1,1,1,1,0,2,2,0,2,2,0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,0,0,5,5,5,5,5,5,5,6,6,6,6,0,6,6,6,6,6,0,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,2,2,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,2,2,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,2,2,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,3,3,3,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,5,5,5,5,5,6,6,6,6,6,6,6,7,6,6,6,0,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,3,3,3,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,5,5,5,5,5,0,6,6,6,7,7,7,7,6,6,6,0,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,3,3,3,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,5,5,5,5,5,0,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,0,0,0,1,1,1,1,1,3,3,3,3,3,3,3,3,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,5,5,5,5,5,0,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,8,8,0,1,1,1,1,1,3,3,3,3,0,3,3,3,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0,5,5,5,5,5,0,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,8,8,0,1,1,1,1,1,3,0,0,3,0,0,3,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,5,5,5,5,5,5,0,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,8,8,8,8,1,1,1,1,1,0,0,0,3,0,0,3,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,10,10],
  [9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10],
  [9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10],
];

// Generated with the following code on the browser console:
/*
document.querySelector('.canvas-wrapper').remove();
document.querySelector('#x').remove();
document.querySelector('#exit').remove();
document.querySelector('#cart').remove();
document.querySelector('#add').remove();
const stage = document.querySelector('svg#storefront');
const sc = {};
sc.height = stage.getBoundingClientRect().height;
sc.top = stage.getBoundingClientRect().top;
sc.width = stage.getBoundingClientRect().width;
const unit_w = sc.width / 64;
const half_w = unit_w / 2;
const unit_h = sc.height / 36;
const half_h = unit_h / 2;
let hit_areas = [];
const highlights = {
  'A': 1,
  'B': 2,
  'C': 3,
  'D': 4,
  'E': 5,
  'F': 6,
  'G': 7,
  'H': 8,
  'nav_left_bg': 9,
  'nav_right_bg': 10,
}
let jsonString = '[\n';
for (let y = 0; y < 36; y++) {
  let row = [];
  for (let x = 0; x < 64; x++) {
    const el = document.elementFromPoint(half_w + (unit_w * x), half_h + (unit_h * y));
    if (el.tagName === 'path' && Object.keys(highlights).indexOf(el.id) > -1) {
        row.push(highlights[el.id]);
    } else {
      row.push(0);
    }
  }
  hit_areas.push(row);
  jsonString += '  '+JSON.stringify(row)+',\n';
}
jsonString += '];\n';
console.log(jsonString);
*/
// It divides the 1920x1080 image into 30px squares and samples the midpoint of them to create a hashtable for collision detection.

export default hitAreas;
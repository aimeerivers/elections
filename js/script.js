let map = document.getElementById("map");
let mapBox = getMapBoundingBox(regions);
map.style.width = xMultiplier * (1 + mapBox[1][0] - mapBox[0][0]) + "px";
map.style.height = yMultiplier * (1 + mapBox[1][1] - mapBox[0][1]) + "px";

regions.forEach(region => {
  let areaNumber = 0;
  region.areas.forEach(area => {
    areaNumber += 1;
    area.coordinates.forEach(coordinate => {
      blob = document.createElement("span");
      blob.classList.add("blob");
      blob.classList.add(slugify(region.name, areaNumber));
      blob.style.left = xMultiplier * coordinate[0] + "px";
      blob.style.top = yMultiplier * coordinate[1] + "px";
      if(area.result) {
        blob.classList.add(area.result);
      }
      map.appendChild(blob);
    });
  });
  if(region.short !== undefined) {
    box = getRegionBoundingBox(region);
    label = document.createElement("div");
    label.classList.add("region-label");
    label.classList.add(slugify(region.name));
    label.innerText = region.short;
    label.style.left = xMultiplier * box[0][0] + "px";
    label.style.top = yMultiplier * box[0][1] + "px";
    label.style.width = xMultiplier * (1 + box[1][0] - box[0][0]) + "px";
    label.style.height = yMultiplier * (1 + box[1][1] - box[0][1]) + "px";
    label.style.lineHeight = yMultiplier * (1 + box[1][1] - box[0][1]) + "px";
    map.appendChild(label);
  }
});

function getMapBoundingBox(regions) {
  x = [];
  y = [];
  regions.forEach(region => {
    region.areas.forEach(area => {
      area.coordinates.forEach(coordinate => {
        x.push(coordinate[0]);
        y.push(coordinate[1]);
      });
    });
  });
  return [
    [Math.min(...x), Math.min(...y)],
    [Math.max(...x), Math.max(...y)]
  ];
}

function getRegionBoundingBox(region) {
  x = [];
  y = [];
  region.areas.forEach(area => {
    area.coordinates.forEach(coordinate => {
      x.push(coordinate[0]);
      y.push(coordinate[1]);
    });
  });
  return [
    [Math.min(...x), Math.min(...y)],
    [Math.max(...x), Math.max(...y)]
  ];
}

updateData();

function updateData() {
  console.log("update");
  var dataUpdate = new XMLHttpRequest();
  dataUpdate.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);
      for(let regionName in response) {
        document.querySelectorAll('.' + slugify(regionName)).forEach(function(region) {
          region.classList.add(response[regionName]);
        });
      }
    }
  }
  dataUpdate.open("GET", resultsEndpoint + '?_=' + new Date().getTime(), true);
  dataUpdate.send();
}

setInterval(updateData, 1000 * resultsRefreshSeconds);


function slugify(string, number=1) {
  if(number > 1) { string += " " + number; }
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

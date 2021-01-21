let map = document.getElementById("map");
let mapBox = getMapBoundingBox(regions);
map.style.width = multiplier * (1 + mapBox[1][0] - mapBox[0][0]) + "px";
map.style.height = multiplier * (1 + mapBox[1][1] - mapBox[0][1]) + "px";

if(title) {
  document.getElementById('title').innerText = title;
  document.title = title;
}

regions.forEach(region => {
  region.areas.forEach(area => {
    area.coordinates.forEach(coordinate => {
      blob = document.createElement("span");
      blob.classList.add("blob");
      blob.classList.add(region.name.toLowerCase().replaceAll(" ", "-"));
      blob.style.left = multiplier * coordinate[0] + "px";
      blob.style.top = multiplier * coordinate[1] + "px";
      if(area.result) {
        blob.classList.add(area.result);
      }
      map.appendChild(blob);
    });
  });
  box = getRegionBoundingBox(region);
  label = document.createElement("div");
  label.classList.add("region-label");
  label.classList.add(region.name.toLowerCase().replaceAll(" ", "-"));
  label.innerText = region.short;
  label.style.left = multiplier * box[0][0] + "px";
  label.style.top = multiplier * box[0][1] + "px";
  label.style.width = multiplier * (1 + box[1][0] - box[0][0]) + "px";
  label.style.height = multiplier * (1 + box[1][1] - box[0][1]) + "px";
  label.style.lineHeight = multiplier * (1 + box[1][1] - box[0][1]) + "px";
  map.appendChild(label);
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

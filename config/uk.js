let gridX = 18;
let gridY = 10;

let blobWidth = 20;
let blobHeight = 20;

let regions = [

  // NORTHERN IRELAND

  { name: "West Tyrone", areas: [{ coordinates: [[0, 29]] }] },
  { name: "Foyle", areas: [{ coordinates: [[1, 28]] }] },
  { name: "East Londonderry", areas: [{ coordinates: [[2, 27]] }] },
  { name: "Fermanagh & South Tyrone", areas: [{ coordinates: [[0, 31]] }] },
  { name: "Upper Bann", areas: [{ coordinates: [[1, 30]] }] },
  { name: "Mid Ulster", areas: [{ coordinates: [[2, 29]] }] },
  { name: "North Antrim", areas: [{ coordinates: [[3, 28]] }] },

  // SCOTLAND

  { name: "Na H-Eileanan An Iar [Western Isles]", areas: [{ coordinates: [[9, 4]] }] },
  { name: "Caithness, Sutherland & Easter Ross", areas: [{ coordinates: [[12, 1]] }] },
  { name: "Orkney & Shetland", areas: [{ coordinates: [[15, 0]] }] },
  { name: "Perth & Perthshire North", areas: [{ coordinates: [[12, 3]] }] },
  { name: "Ross, Skye & Lochaber", areas: [{ coordinates: [[10, 7]] }] },
  { name: "Dunbartonshire West", areas: [{ coordinates: [[11, 6]] }] },
  { name: "Stirling", areas: [{ coordinates: [[12, 5]] }] },
  { name: "Ochil & South Perthshire", areas: [{ coordinates: [[13, 4]] }] },
  { name: "Banuff & Buchan", areas: [{ coordinates: [[14, 3]] }] },
  { name: "Inverness, Nairn, Badenoch & Strathspey", areas: [{ coordinates: [[10, 9]] }] },
  { name: "Cumbernauld, Kilsyth & Kirkintilloch East", areas: [{ coordinates: [[11, 8]] }] },
  { name: "Falkirk", areas: [{ coordinates: [[12, 7]] }] },
  { name: "Dundee West", areas: [{ coordinates: [[13, 6]] }] },
  { name: "Moray", areas: [{ coordinates: [[14, 5]] }] },
  { name: "Aberdeen North", areas: [{ coordinates: [[15, 4]] }] },
  { name: "Argyll & Bute", areas: [{ coordinates: [[10, 11]] }] },
  { name: "Glasgow North West", areas: [{ coordinates: [[11, 10]] }] },
  { name: "Glasgow North", areas: [{ coordinates: [[12, 9]] }] },
  { name: "Dunfermline & West Fife", areas: [{ coordinates: [[13, 8]] }] },
  { name: "Dundee East", areas: [{ coordinates: [[14, 7]] }] },
  { name: "Gordon", areas: [{ coordinates: [[15, 6]] }] },
  { name: "Aberdeen South", areas: [{ coordinates: [[16, 5]] }] },
  { name: "Ayrshire North & Arran", areas: [{ coordinates: [[9, 14]] }] },
  { name: "Inverclyde", areas: [{ coordinates: [[10, 13]] }] },
  { name: "Paisley & Renfrewshire North", areas: [{ coordinates: [[11, 12]] }] },
  { name: "Glasgow Central", areas: [{ coordinates: [[12, 11]] }] },
  { name: "Linlithgow & Falkirk East", areas: [{ coordinates: [[13, 10]] }] },
  { name: "Fife North East", areas: [{ coordinates: [[14, 9]] }] },
  { name: "Aberdeenshire West & Kincardine", areas: [{ coordinates: [[15, 8]] }] },
  { name: "Ayrshire Central", areas: [{ coordinates: [[10, 15]] }] },
  { name: "Glasgow South West", areas: [{ coordinates: [[11, 14]] }] },
  { name: "Dunbartonshire East", areas: [{ coordinates: [[12, 13]] }] },
  { name: "Airdrie & Shotts", areas: [{ coordinates: [[13, 12]] }] },
  { name: "East Lothian", areas: [{ coordinates: [[14, 11]] }] },
  { name: "Glenrothes", areas: [{ coordinates: [[15, 10]] }] },
  { name: "Angus", areas: [{ coordinates: [[16, 9]] }] },

  // ENGLAND

  { name: "Newcastle Upon Tyne North", areas: [{ coordinates: [[16, 19]] }] },
  { name: "Berwick-Upon-Tweed", areas: [{ coordinates: [[17, 18]] }] },
  { name: "Workington", areas: [{ coordinates: [[14, 23]] }] },
  { name: "Carlisle", areas: [{ coordinates: [[15, 22]] }] },
  { name: "Blaydon", areas: [{ coordinates: [[16, 21]] }] },
  { name: "Tyneside North", areas: [{ coordinates: [[17, 20]] }] },
  { name: "Wansbeck", areas: [{ coordinates: [[18, 19]] }] },
  { name: "Blyth Valley", areas: [{ coordinates: [[19, 18]] }] },

  // WALES

  { name: "Ynys Mon", areas: [{ coordinates: [[7, 46]] }] },
  { name: "Arfon", areas: [{ coordinates: [[8, 49]] }] },
  { name: "Aberconwy", areas: [{ coordinates: [[9, 48]] }] },
  { name: "Clwyd West", areas: [{ coordinates: [[9, 50]] }] },
  { name: "Vale Of Clwyd", areas: [{ coordinates: [[10, 49]] }] },
  { name: "Delyn", areas: [{ coordinates: [[11, 50]] }] },
  { name: "Alyn & Deeside", areas: [{ coordinates: [[11, 52]] }] },
  { name: "Dwyfor Meirionnydd", areas: [{ coordinates: [[11, 54]] }] },
  { name: "Wrexham", areas: [{ coordinates: [[12, 53]] }] },
  { name: "Montgomeryshire", areas: [{ coordinates: [[11, 56]] }] },
  { name: "Clywd South", areas: [{ coordinates: [[12, 55]] }] },

  // LONDON
  
  { name: "Ruislip, Northwood & Pinner", areas: [{ coordinates: [[19, 64]] }] },
  { name: "Harrow East", areas: [{ coordinates: [[20, 63]] }] },
  { name: "Hendon", areas: [{ coordinates: [[21, 62]] }] },
  { name: "Chipping Barnet", areas: [{ coordinates: [[22, 61]] }] },
  { name: "Enfield Southgate", areas: [{ coordinates: [[23, 60]] }] },
  { name: "Enfield North", areas: [{ coordinates: [[24, 59]] }] },
  { name: "Uxbridge & South Ruislip", areas: [{ coordinates: [[19, 66]] }] },
  { name: "Harrow West", areas: [{ coordinates: [[20, 65]] }] },
  { name: "Brent North", areas: [{ coordinates: [[21, 64]] }] },
  { name: "Finchley & Golders Green", areas: [{ coordinates: [[22, 63]] }] },
  { name: "Hornsey & Wood Green", areas: [{ coordinates: [[23, 62]] }] },
  { name: "Tottenham", areas: [{ coordinates: [[24, 61]] }] },
  { name: "Walthamstow", areas: [{ coordinates: [[25, 60]] }] },
  { name: "Hayes & Harlington", areas: [{ coordinates: [[19, 68]] }] },
  { name: "Ealing North", areas: [{ coordinates: [[20, 67]] }] },
  { name: "Hampstead & Kilburn", areas: [{ coordinates: [[21, 66]] }] },
  { name: "Westminster North", areas: [{ coordinates: [[22, 65]] }] },
  { name: "Holborn & St Pancras", areas: [{ coordinates: [[23, 64]] }] },
  { name: "Brent Central", areas: [{ coordinates: [[24, 63]] }] },
  { name: "Islington North", areas: [{ coordinates: [[25, 62]] }] },
  { name: "Edmonton", areas: [{ coordinates: [[26, 61]] }] },
  { name: "Chingford & Woodford Green", areas: [{ coordinates: [[27, 60]] }] },
];

let gridX = 18;
let gridY = 10;

let blobWidth = 20;
let blobHeight = 20;

let regions = [

  // NORTHERN IRELAND

  { name: "Belfast East", areas: [{ coordinates: [[4, 33]] }] },
  { name: "Belfast North", areas: [{ coordinates: [[3, 32]] }] },
  { name: "Belfast South", areas: [{ coordinates: [[3, 34]] }] },
  { name: "Belfast West", areas: [{ coordinates: [[2, 33]] }] },
  { name: "East Antrim", areas: [{ coordinates: [[4, 29]] }] },
  { name: "East Londonderry", areas: [{ coordinates: [[2, 27]] }] },
  { name: "Fermanagh & South Tyrone", areas: [{ coordinates: [[0, 31]] }] },
  { name: "Foyle", areas: [{ coordinates: [[1, 28]] }] },
  { name: "Lagan Valley", areas: [{ coordinates: [[2, 31]] }] },
  { name: "Mid Ulster", areas: [{ coordinates: [[2, 29]] }] },
  { name: "Newry & Armagh", areas: [{ coordinates: [[1, 34]] }] },
  { name: "North Antrim", areas: [{ coordinates: [[3, 28]] }] },
  { name: "North Down", areas: [{ coordinates: [[4, 35]] }] },
  { name: "South Antrim", areas: [{ coordinates: [[3, 30]] }] },
  { name: "South Down", areas: [{ coordinates: [[2, 35]] }] },
  { name: "Strangford", areas: [{ coordinates: [[3, 36]] }] },
  { name: "Upper Bann", areas: [{ coordinates: [[1, 30]] }] },
  { name: "West Tyrone", areas: [{ coordinates: [[0, 29]] }] },

  // SCOTLAND

  { name: "Aberdeen North", areas: [{ coordinates: [[15, 4]] }] },
  { name: "Aberdeen South", areas: [{ coordinates: [[16, 5]] }] },
  { name: "Aberdeenshire West & Kincardine", areas: [{ coordinates: [[15, 8]] }] },
  { name: "Airdrie & Shotts", areas: [{ coordinates: [[13, 12]] }] },
  { name: "Angus", areas: [{ coordinates: [[16, 9]] }] },
  { name: "Argyll & Bute", areas: [{ coordinates: [[10, 11]] }] },
  { name: "Ayr, Carrick & Cumnock", areas: [{ coordinates: [[10, 17]] }] },
  { name: "Ayrshire Central", areas: [{ coordinates: [[10, 15]] }] },
  { name: "Ayrshire North & Arran", areas: [{ coordinates: [[9, 14]] }] },
  { name: "Banuff & Buchan", areas: [{ coordinates: [[14, 3]] }] },
  { name: "Berwickshire, Roxburgh & Selkirk", areas: [{ coordinates: [[15, 20]] }] },
  { name: "Caithness, Sutherland & Easter Ross", areas: [{ coordinates: [[12, 1]] }] },
  { name: "Coatbridge, Chryston & Bellshill", areas: [{ coordinates: [[12, 15]] }] },
  { name: "Cumbernauld, Kilsyth & Kirkintilloch East", areas: [{ coordinates: [[11, 8]] }] },
  { name: "Dumfries & Galloway", areas: [{ coordinates: [[12, 21]] }] },
  { name: "Dumfriesshire, Clydesdale & Tweedale", areas: [{ coordinates: [[11, 20]] }] },
  { name: "Dunbartonshire East", areas: [{ coordinates: [[12, 13]] }] },
  { name: "Dunbartonshire West", areas: [{ coordinates: [[11, 6]] }] },
  { name: "Dundee East", areas: [{ coordinates: [[14, 7]] }] },
  { name: "Dundee West", areas: [{ coordinates: [[13, 6]] }] },
  { name: "Dunfermline & West Fife", areas: [{ coordinates: [[13, 8]] }] },
  { name: "East Kilbridge, Strathaven & Lesmahagow", areas: [{ coordinates: [[13, 18]] }] },
  { name: "East Lothian", areas: [{ coordinates: [[14, 11]] }] },
  { name: "Edinburgh East", areas: [{ coordinates: [[16, 15]] }] },
  { name: "Edinburgh North & Leith", areas: [{ coordinates: [[15, 14]] }] },
  { name: "Edinburgh South West", areas: [{ coordinates: [[14, 17]] }] },
  { name: "Edinburgh South", areas: [{ coordinates: [[15, 16]] }] },
  { name: "Edinburgh West", areas: [{ coordinates: [[14, 15]] }] },
  { name: "Falkirk", areas: [{ coordinates: [[12, 7]] }] },
  { name: "Fife North East", areas: [{ coordinates: [[14, 9]] }] },
  { name: "Glasgow Central", areas: [{ coordinates: [[12, 11]] }] },
  { name: "Glasgow East", areas: [{ coordinates: [[12, 17]] }] },
  { name: "Glasgow North East", areas: [{ coordinates: [[13, 14]] }] },
  { name: "Glasgow North West", areas: [{ coordinates: [[11, 10]] }] },
  { name: "Glasgow North", areas: [{ coordinates: [[12, 9]] }] },
  { name: "Glasgow South West", areas: [{ coordinates: [[11, 14]] }] },
  { name: "Glasgow South", areas: [{ coordinates: [[11, 16]] }] },
  { name: "Glenrothes", areas: [{ coordinates: [[15, 10]] }] },
  { name: "Gordon", areas: [{ coordinates: [[15, 6]] }] },
  { name: "Inverclyde", areas: [{ coordinates: [[10, 13]] }] },
  { name: "Inverness, Nairn, Badenoch & Strathspey", areas: [{ coordinates: [[10, 9]] }] },
  { name: "Kilmarnock & Loudoun", areas: [{ coordinates: [[13, 20]] }] },
  { name: "Kirkcaldy & Cowdenbeath", areas: [{ coordinates: [[14, 13]] }] },
  { name: "Lanark & Hamilton East", areas: [{ coordinates: [[14, 21]] }] },
  { name: "Linlithgow & Falkirk East", areas: [{ coordinates: [[13, 10]] }] },
  { name: "Livingston", areas: [{ coordinates: [[14, 19]] }] },
  { name: "Midlothian", areas: [{ coordinates: [[15, 18]] }] },
  { name: "Moray", areas: [{ coordinates: [[14, 5]] }] },
  { name: "Motherwell & Wishaw", areas: [{ coordinates: [[13, 16]] }] },
  { name: "Na H-Eileanan An Iar [Western Isles]", areas: [{ coordinates: [[9, 4]] }] },
  { name: "Ochil & South Perthshire", areas: [{ coordinates: [[13, 4]] }] },
  { name: "Orkney & Shetland", areas: [{ coordinates: [[15, 0]] }] },
  { name: "Paisley & Renfrewshire North", areas: [{ coordinates: [[11, 12]] }] },
  { name: "Paisley & Renfrewshire South", areas: [{ coordinates: [[10, 19]] }] },
  { name: "Perth & Perthshire North", areas: [{ coordinates: [[12, 3]] }] },
  { name: "Renfrewshire East", areas: [{ coordinates: [[11, 18]] }] },
  { name: "Ross, Skye & Lochaber", areas: [{ coordinates: [[10, 7]] }] },
  { name: "Rutherglen & Hamilton West", areas: [{ coordinates: [[12, 19]] }] },
  { name: "Stirling", areas: [{ coordinates: [[12, 5]] }] },

  // ENGLAND

  { name: "Newcastle Upon Tyne North", areas: [{ coordinates: [[16, 19]] }] },
  { name: "Berwick-Upon-Tweed", areas: [{ coordinates: [[17, 18]] }] },
  { name: "Workington", areas: [{ coordinates: [[14, 23]] }] },
  { name: "Carlisle", areas: [{ coordinates: [[15, 22]] }] },
  { name: "Blaydon", areas: [{ coordinates: [[16, 21]] }] },
  { name: "Tyneside North", areas: [{ coordinates: [[17, 20]] }] },
  { name: "Wansbeck", areas: [{ coordinates: [[18, 19]] }] },
  { name: "Blyth Valley", areas: [{ coordinates: [[19, 18]] }] },
  { name: "Barrow & Furness", areas: [{ coordinates: [[14, 25]] }] },
  { name: "Copeland", areas: [{ coordinates: [[15, 24]] }] },
  { name: "Hexham", areas: [{ coordinates: [[16, 23]] }] },
  { name: "Newcastle Upon Tyne Central", areas: [{ coordinates: [[17, 22]] }] },
  { name: "Gateshead", areas: [{ coordinates: [[18, 21]] }] },
  { name: "Newcastle Upon Tyne East", areas: [{ coordinates: [[19, 20]] }] },
  { name: "Tynemouth", areas: [{ coordinates: [[20, 19]] }] },
  { name: "Wyre & Preston North", areas: [{ coordinates: [[12, 29]] }] },
  { name: "Preston", areas: [{ coordinates: [[13, 28]] }] },
  { name: "Lancaster & Fleetwood", areas: [{ coordinates: [[14, 27]] }] },
  { name: "Westmorland & Lonsdale", areas: [{ coordinates: [[15, 26]] }] },
  { name: "Penrith & The Border", areas: [{ coordinates: [[16, 25]] }] },
  { name: "Durham North West", areas: [{ coordinates: [[17, 24]] }] },
  { name: "Durham North", areas: [{ coordinates: [[18, 23]] }] },
  { name: "Washington & Sunderland West", areas: [{ coordinates: [[19, 22]] }] },
  { name: "Jarrow", areas: [{ coordinates: [[20, 21]] }] },
  { name: "South Shields", areas: [{ coordinates: [[21, 20]] }] },
  { name: "Blackpool North & Cleveleys", areas: [{ coordinates: [[12, 31]] }] },
  { name: "Flyde", areas: [{ coordinates: [[13, 30]] }] },
  { name: "Blackburn", areas: [{ coordinates: [[14, 29]] }] },
  { name: "Ribble Valley", areas: [{ coordinates: [[15, 28]] }] },
  { name: "Morcambe & Lunesdale", areas: [{ coordinates: [[16, 27]] }] },
  { name: "Bishop Auckland", areas: [{ coordinates: [[17, 26]] }] },
  { name: "Sedgefield", areas: [{ coordinates: [[18, 25]] }] },
  { name: "Durham, City of", areas: [{ coordinates: [[19, 24]] }] },
  { name: "Houghton & Sunderland South", areas: [{ coordinates: [[20, 23]] }] },
  { name: "Sunderland Central", areas: [{ coordinates: [[21, 22]] }] },
  { name: "Lancashire West", areas: [{ coordinates: [[10, 35]] }] },
  { name: "South Ribble", areas: [{ coordinates: [[11, 34]] }] },
  { name: "Blackpool South", areas: [{ coordinates: [[12, 33]] }] },
  { name: "Bury North", areas: [{ coordinates: [[13, 32]] }] },
  { name: "Rossendale & Darwen", areas: [{ coordinates: [[14, 31]] }] },
  { name: "Hyndburn", areas: [{ coordinates: [[15, 30]] }] },
  { name: "Pendle", areas: [{ coordinates: [[16, 29]] }] },
  { name: "Darlington", areas: [{ coordinates: [[17, 28]] }] },
  { name: "Stockton South", areas: [{ coordinates: [[18, 27]] }] },
  { name: "Stockton North", areas: [{ coordinates: [[19, 26]] }] },
  { name: "Middlesbrough", areas: [{ coordinates: [[20, 25]] }] },
  { name: "Easington", areas: [{ coordinates: [[21, 24]] }] },
  { name: "Hartlepool", areas: [{ coordinates: [[22, 23]] }] },
  { name: "Southport", areas: [{ coordinates: [[10, 37]] }] },
  { name: "Wigan", areas: [{ coordinates: [[11, 36]] }] },
  { name: "Chorley", areas: [{ coordinates: [[12, 35]] }] },
  { name: "Bolton North East", areas: [{ coordinates: [[13, 34]] }] },
  { name: "Heywood & Middleton", areas: [{ coordinates: [[14, 33]] }] },
  { name: "Rochdale", areas: [{ coordinates: [[15, 32]] }] },
  { name: "Burnley", areas: [{ coordinates: [[16, 31]] }] },
  { name: "Keighley", areas: [{ coordinates: [[17, 30]] }] },
  { name: "Pudsey", areas: [{ coordinates: [[18, 29]] }] },
  { name: "Harrogate & Knaresborough", areas: [{ coordinates: [[19, 28]] }] },
  { name: "Skipton & Ripon", areas: [{ coordinates: [[20, 27]] }] },
  { name: "Richmond [Yorks]", areas: [{ coordinates: [[21, 26]] }] },
  { name: "Redcar", areas: [{ coordinates: [[22, 25]] }] },
  { name: "Middlesbrough South & Cleveland East", areas: [{ coordinates: [[23, 24]] }] },
  { name: "Bootle", areas: [{ coordinates: [[9, 40]] }] },
  { name: "Sefton Central", areas: [{ coordinates: [[10, 39]] }] },
  { name: "Liverpool Walton", areas: [{ coordinates: [[11, 38]] }] },
  { name: "Bolton West", areas: [{ coordinates: [[12, 37]] }] },
  { name: "Bolton South East", areas: [{ coordinates: [[13, 36]] }] },
  { name: "Oldham West & Royton", areas: [{ coordinates: [[14, 35]] }] },
  { name: "Oldham East & Saddleworth", areas: [{ coordinates: [[15, 34]] }] },
  { name: "Colne Valley", areas: [{ coordinates: [[16, 33]] }] },
  { name: "Calder Valley", areas: [{ coordinates: [[17, 32]] }] },
  { name: "Shipley", areas: [{ coordinates: [[18, 31]] }] },
  { name: "Leeds North West", areas: [{ coordinates: [[19, 30]] }] },
  { name: "Leeds West", areas: [{ coordinates: [[20, 29]] }] },
  { name: "Selby & Ainsty", areas: [{ coordinates: [[21, 28]] }] },
  { name: "Thirsk & Malton", areas: [{ coordinates: [[22, 27]] }] },
  { name: "Scarborough & Whitby", areas: [{ coordinates: [[23, 26]] }] },

  // WALES

  { name: "Aberavon", areas: [{ coordinates: [[8, 63]] }] },
  { name: "Aberconwy", areas: [{ coordinates: [[9, 48]] }] },
  { name: "Alyn & Deeside", areas: [{ coordinates: [[11, 52]] }] },
  { name: "Arfon", areas: [{ coordinates: [[8, 49]] }] },
  { name: "Blaenau Gwent", areas: [{ coordinates: [[10, 59]] }] },
  { name: "Brecon & Radnorshire", areas: [{ coordinates: [[12, 57]] }] },
  { name: "Bridgend", areas: [{ coordinates: [[7, 66]] }] },
  { name: "Caerphilly", areas: [{ coordinates: [[11, 64]] }] },
  { name: "Cardiff Central", areas: [{ coordinates: [[11, 66]] }] },
  { name: "Cardiff North", areas: [{ coordinates: [[10, 65]] }] },
  { name: "Cardiff South & Penarth", areas: [{ coordinates: [[12, 65]] }] },
  { name: "Cardiff West", areas: [{ coordinates: [[9, 66]] }] },
  { name: "Carmarthen East & Dinefwr", areas: [{ coordinates: [[6, 63]] }] },
  { name: "Carmarthen West & Pembrokeshire South", areas: [{ coordinates: [[6, 65]] }] },
  { name: "Ceredigion", areas: [{ coordinates: [[11, 58]] }] },
  { name: "Clwyd West", areas: [{ coordinates: [[9, 50]] }] },
  { name: "Clywd South", areas: [{ coordinates: [[12, 55]] }] },
  { name: "Cynon Valley", areas: [{ coordinates: [[11, 62]] }] },
  { name: "Delyn", areas: [{ coordinates: [[11, 50]] }] },
  { name: "Dwyfor Meirionnydd", areas: [{ coordinates: [[11, 54]] }] },
  { name: "Gower", areas: [{ coordinates: [[7, 62]] }] },
  { name: "Islwyn", areas: [{ coordinates: [[10, 61]] }] },
  { name: "Llanelli", areas: [{ coordinates: [[5, 64]] }] },
  { name: "Merthyr Tydfil & Rhymney", areas: [{ coordinates: [[9, 60]] }] },
  { name: "Monmouth", areas: [{ coordinates: [[12, 59]] }] },
  { name: "Montgomeryshire", areas: [{ coordinates: [[11, 56]] }] },
  { name: "Neath", areas: [{ coordinates: [[9, 62]] }] },
  { name: "Newport East", areas: [{ coordinates: [[12, 61]] }] },
  { name: "Newport West", areas: [{ coordinates: [[12, 63]] }] },
  { name: "Ogmore", areas: [{ coordinates: [[8, 65]] }] },
  { name: "Pontypridd", areas: [{ coordinates: [[9, 64]] }] },
  { name: "Preseli Pembrokeshire", areas: [{ coordinates: [[5, 66]] }] },
  { name: "Rhondda", areas: [{ coordinates: [[10, 63]] }] },
  { name: "Swansea East", areas: [{ coordinates: [[8, 61]] }] },
  { name: "Swansea West", areas: [{ coordinates: [[7, 64]] }] },
  { name: "Torfaen", areas: [{ coordinates: [[11, 60]] }] },
  { name: "Vale Of Clwyd", areas: [{ coordinates: [[10, 49]] }] },
  { name: "Vale Of Glamorgan", areas: [{ coordinates: [[8, 67]] }] },
  { name: "Wrexham", areas: [{ coordinates: [[12, 53]] }] },
  { name: "Ynys Mon", areas: [{ coordinates: [[7, 46]] }] },

  // LONDON
  
  { name: "Barking", areas: [{ coordinates: [[28, 63]] }] },
  { name: "Battersea", areas: [{ coordinates: [[22, 69]] }] },
  { name: "Beckenham", areas: [{ coordinates: [[26, 73]] }] },
  { name: "Bermondsey & Old Southwark", areas: [{ coordinates: [[25, 66]] }] },
  { name: "Bethnal Green & Bow", areas: [{ coordinates: [[26, 69]] }] },
  { name: "Bexleyheath & Crayford", areas: [{ coordinates: [[29, 70]] }] },
  { name: "Brent Central", areas: [{ coordinates: [[24, 63]] }] },
  { name: "Brent North", areas: [{ coordinates: [[21, 64]] }] },
  { name: "Brentford & Isleworth", areas: [{ coordinates: [[21, 70]] }] },
  { name: "Bromley & Chislehurst", areas: [{ coordinates: [[27, 72]] }] },
  { name: "Camberwell & Peckham", areas: [{ coordinates: [[25, 68]] }] },
  { name: "Carshalton & Wallington", areas: [{ coordinates: [[22, 73]] }] },
  { name: "Chelsea & Fulham", areas: [{ coordinates: [[24, 65]] }] },
  { name: "Chingford & Woodford Green", areas: [{ coordinates: [[27, 60]] }] },
  { name: "Chipping Barnet", areas: [{ coordinates: [[22, 61]] }] },
  { name: "Cities Of London & Westminster", areas: [{ coordinates: [[24, 67]] }] },
  { name: "Croydon Central", areas: [{ coordinates: [[24, 73]] }] },
  { name: "Croydon North", areas: [{ coordinates: [[25, 72]] }] },
  { name: "Croydon South", areas: [{ coordinates: [[23, 74]] }] },
  { name: "Dagenham & Rainham", areas: [{ coordinates: [[29, 66]] }] },
  { name: "Dulwich & West Norwood", areas: [{ coordinates: [[25, 70]] }] },
  { name: "Ealing Central & Acton", areas: [{ coordinates: [[21, 68]] }] },
  { name: "Ealing North", areas: [{ coordinates: [[20, 67]] }] },
  { name: "Ealing Southall", areas: [{ coordinates: [[20, 69]] }] },
  { name: "East Ham", areas: [{ coordinates: [[28, 65]] }] },
  { name: "Edmonton", areas: [{ coordinates: [[26, 61]] }] },
  { name: "Eltham", areas: [{ coordinates: [[28, 69]] }] },
  { name: "Enfield North", areas: [{ coordinates: [[24, 59]] }] },
  { name: "Enfield Southgate", areas: [{ coordinates: [[23, 60]] }] },
  { name: "Erith & Thamesmead", areas: [{ coordinates: [[29, 68]] }] },
  { name: "Feltham & Heston", areas: [{ coordinates: [[19, 70]] }] },
  { name: "Finchley & Golders Green", areas: [{ coordinates: [[22, 63]] }] },
  { name: "Greenwich & Woolwich", areas: [{ coordinates: [[28, 67]] }] },
  { name: "Hackney North & Stoke Newington", areas: [{ coordinates: [[26, 65]] }] },
  { name: "Hackney South & Shoreditch", areas: [{ coordinates: [[26, 67]] }] },
  { name: "Hammersmith", areas: [{ coordinates: [[22, 67]] }] },
  { name: "Hampstead & Kilburn", areas: [{ coordinates: [[21, 66]] }] },
  { name: "Harrow East", areas: [{ coordinates: [[20, 63]] }] },
  { name: "Harrow West", areas: [{ coordinates: [[20, 65]] }] },
  { name: "Hayes & Harlington", areas: [{ coordinates: [[19, 68]] }] },
  { name: "Hendon", areas: [{ coordinates: [[21, 62]] }] },
  { name: "Holborn & St Pancras", areas: [{ coordinates: [[23, 64]] }] },
  { name: "Hornchurch & Upminster", areas: [{ coordinates: [[29, 64]] }] },
  { name: "Hornsey & Wood Green", areas: [{ coordinates: [[23, 62]] }] },
  { name: "Ilford North", areas: [{ coordinates: [[28, 61]] }] },
  { name: "Ilford South", areas: [{ coordinates: [[27, 62]] }] },
  { name: "Islington North", areas: [{ coordinates: [[25, 62]] }] },
  { name: "Islington South & Finsbury", areas: [{ coordinates: [[25, 64]] }] },
  { name: "Kensington", areas: [{ coordinates: [[23, 68]] }] },
  { name: "Kingston & Surbiton", areas: [{ coordinates: [[20, 73]] }] },
  { name: "Lewisham Deptford", areas: [{ coordinates: [[27, 68]] }] },
  { name: "Lewisham East", areas: [{ coordinates: [[27, 70]] }] },
  { name: "Lewisham West & Penge", areas: [{ coordinates: [[26, 71]] }] },
  { name: "Leyton & Wanstead", areas: [{ coordinates: [[26, 63]] }] },
  { name: "Mitcham & Morden", areas: [{ coordinates: [[23, 72]] }] },
  { name: "Old Bexley & Sidcup", areas: [{ coordinates: [[28, 71]] }] },
  { name: "Orpington", areas: [{ coordinates: [[25, 74]] }] },
  { name: "Poplar & Limehouse", areas: [{ coordinates: [[27, 66]] }] },
  { name: "Putney", areas: [{ coordinates: [[23, 66]] }] },
  { name: "Richmond Park", areas: [{ coordinates: [[21, 72]] }] },
  { name: "Romford", areas: [{ coordinates: [[29, 62]] }] },
  { name: "Ruislip, Northwood & Pinner", areas: [{ coordinates: [[19, 64]] }] },
  { name: "Streatham", areas: [{ coordinates: [[23, 70]] }] },
  { name: "Sutton & Cheam", areas: [{ coordinates: [[21, 74]] }] },
  { name: "Tooting", areas: [{ coordinates: [[22, 71]] }] },
  { name: "Tottenham", areas: [{ coordinates: [[24, 61]] }] },
  { name: "Twickenham", areas: [{ coordinates: [[20, 71]] }] },
  { name: "Uxbridge & South Ruislip", areas: [{ coordinates: [[19, 66]] }] },
  { name: "Vauxhall", areas: [{ coordinates: [[24, 69]] }] },
  { name: "Walthamstow", areas: [{ coordinates: [[25, 60]] }] },
  { name: "West Ham", areas: [{ coordinates: [[27, 64]] }] },
  { name: "Westminster North", areas: [{ coordinates: [[22, 65]] }] },
  { name: "Wimbledon", areas: [{ coordinates: [[24, 71]] }] }

];

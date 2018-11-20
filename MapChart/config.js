const whiteColor = '#ffffff';
const backgroundColor = '#eafaf7';
const activeColor = '#4ea0d2';
const disabledColor = '#9b9b9b';

export const backgroundLayer = {
  id: 'da-mapbox-background',
  source: 'mapbox-streets',
  'source-layer': 'admin',
  type: 'background',
  paint: {
    'background-color': backgroundColor,
  },
};

export const blankLayer = {
  id: 'da-mapbox-background',
  type: 'background',
  paint: {
    'background-color': whiteColor,
  },
};

export const mapboxStreetsSource = {
  type: 'vector',
  url: 'mapbox://mapbox.mapbox-streets-v8',
};

export const bahamasOutline = {
  id: 'da-bahamas-outline',
  source: 'bahamas-source',
  type: 'line',
  paint: {
    'line-color': whiteColor,
    'line-width': 2,
  },
};

export const bahamasPolygon = {
  id: 'da-bahamas-polygon',
  source: 'bahamas-source',
  type: 'fill',
  interactive: true,
  paint: {
    'fill-color': {
      property: 'color',
      stops: [
        [0, disabledColor], [1, disabledColor],
        [1, activeColor], [1, activeColor],
      ],
    },
    'fill-outline-color': whiteColor,
  },
};

export const sectors = [
  { NAME_1: 'Acklins', color: 1 },
  { NAME_1: 'Berry Islands', color: 1 },
  { NAME_1: 'Biminis', color: 1 },
  { NAME_1: 'Black Point', color: 1 },
  { NAME_1: 'Cat Island', color: 1 },
  { NAME_1: 'Central Abaco', color: 1 },
  { NAME_1: 'Central Andros', color: 1 },
  { NAME_1: 'Central Eleuthera', color: 1 },
  { NAME_1: 'City of Freeport', color: 1 },
  { NAME_1: 'Crooked Island', color: 1 },
  { NAME_1: 'East Grand Bahama', color: 1 },
  { NAME_1: 'Exuma', color: 1 },
  { NAME_1: 'Grand Cay', color: 0 },
  { NAME_1: 'Harbour Island', color: 1 },
  { NAME_1: 'Hope Town', color: 1 },
  { NAME_1: 'Inagua', color: 0 },
  { NAME_1: 'Long Island', color: 0 },
  { NAME_1: 'Mangrove Cay', color: 1 },
  { NAME_1: 'Mayaguana', color: 0 },
  { NAME_1: 'Moore\'s Island', color: 1 },
  { NAME_1: 'New Providence', color: 1 },
  { NAME_1: 'North Abaco', color: 1 },
  { NAME_1: 'North Andros', color: 1 },
  { NAME_1: 'North Eleuthera', color: 1 },
  { NAME_1: 'Ragged Island', color: 0 },
  { NAME_1: 'Rum Cay', color: 0 },
  { NAME_1: 'San Salvador', color: 0 },
  { NAME_1: 'South Abaco', color: 1 },
  { NAME_1: 'South Andros', color: 1 },
  { NAME_1: 'South Eleuthera', color: 1 },
  { NAME_1: 'Spanish Wells', color: 0 },
  { NAME_1: 'West Grand Bahama', color: 1 },
];

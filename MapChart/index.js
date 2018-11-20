import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';

import { cityType } from 'configs/proptypes';
import bahamas from 'configs/geoJson/bahamas';
import MapPopup from './MapPopup';
import Pin from './Pin';
import * as S from './styled';

import {
  backgroundLayer,
  blankLayer,
  mapboxStreetsSource,
  bahamasPolygon,
  sectors,
} from './config';

const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

const bahamasData = {
  ...bahamas,
  features: bahamas.features.map(item => ({
    ...item,
    properties: {
      ...item.properties,
      ...sectors.filter(i => i.NAME_1 === item.properties.NAME_1)[0],
    },
  })),
};

const blankMapStyle = {
  version: 8,
  name: 'DA-blank-map-style',
  sources: {
    'mapbox-streets': mapboxStreetsSource,
  },
  layers: [
    blankLayer,
  ],
};

const mapStyle = {
  version: 8,
  name: 'DA-map-style',
  sources: {
    'bahamas-source': {
      type: 'geojson',
      data: bahamasData,
    },
  },
  layers: [
    backgroundLayer,
    bahamasPolygon,
  ],
};

class MapChart extends Component {
  static propTypes = {
    children: PropTypes.node,
    data: PropTypes.arrayOf(cityType).isRequired,
    height: PropTypes.number,
  }

  static defaultProps = {
    children: null,
    height: 500,
  }

  state = {
    isMapLoaded: false,
    popupInfo: null,
    viewport: {
      bearing: 0,
      height: null,
      latitude: 24.0080,
      longitude: -75.7055,
      pitch: 0,
      width: null,
      zoom: 5,
    },
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentDidUpdate(prevProps) {
    const { popupInfo } = this.state;

    if (popupInfo) {
      const prevCity = prevProps.data.filter(c => c.details === popupInfo.data.details)[0];
      const city = this.props.data.filter(c => c.details === popupInfo.data.details)[0];

      if (city) {
        if (prevCity.month !== city.month || prevCity.target !== city.target) {
          this.handleMarkerClick(city);
        }
      } else {
        this.handlePopupClose();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onViewportChange = (viewport) => {
    this.setState({ viewport });
  }

  onResize = () => {
    this.setState(state => ({
      viewport: {
        ...state.viewport,
        width: this.mapContainer.offsetWidth,
        height: this.mapContainer.offsetHeight,
      },
    }));
  }

  handleMarkerClick = (city) => {
    this.setState({
      popupInfo: {
        state: {
          longitude: city.lng,
          latitude: city.lat,
        },
        data: {
          ...city,
        },
      },
    });
  }

  handleLoad = () => {
    this.setState(state => ({
      isMapLoaded: true,
      viewport: {
        ...state.viewport,
        width: this.mapContainer.offsetWidth,
        height: this.mapContainer.offsetHeight,
      },
    }));
  }

  handlePopupActionClick = () => {
    console.log('MapPopup clicked!');
  }

  handlePopupClick = () => {

  }

  handlePopupClose = () => {
    this.setState({ popupInfo: null });
  }

  registerMapContainerRef = (ref) => {
    this.mapContainer = ref;
  }

  renderPopup = () => {
    const { popupInfo } = this.state;

    return popupInfo && (
      <MapPopup
        popupInfo={popupInfo}
        year={this.props.year}
        onPopupActionClick={this.handlePopupActionClick}
        onClose={this.handlePopupClose}
      />
    );
  }

  render() {
    const { data, children, height } = this.props;
    const { isMapLoaded, viewport } = this.state;

    return (
      <S.Container innerRef={this.registerMapContainerRef}>
        <ReactMapGL
          {...viewport}
          height={height}
          mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle={isMapLoaded ? mapStyle : blankMapStyle}
          maxZoom={10}
          minZoom={5}
          onLoad={this.handleLoad}
          onViewportChange={this.onViewportChange}
          width={(this.mapContainer && this.mapContainer.offsetWidth) || 400}
        >
          {this.renderPopup()}
          {data && data.map(city => <Pin key={city.id} onClick={this.handleMarkerClick} city={city} />)}
        </ReactMapGL>
        {children}
      </S.Container>
    );
  }
}

export default MapChart;

import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';

import { cityType } from 'configs/proptypes';
import { getRatingByStatus } from 'configs/helpers';
import * as S from './styled';

const Pin = ({ city, onClick }) => (
  <Marker latitude={city.lat} longitude={city.lng} offsetLeft={-16} offsetTop={-45}>
    {city.rating}
    <S.Icon onClick={() => onClick(city)} rating={getRatingByStatus(city.status)} />
  </Marker>
);

Pin.propTypes = {
  city: cityType.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Pin;

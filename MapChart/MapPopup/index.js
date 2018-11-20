import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-map-gl';
import ScoreKeyIndicator from 'components/ScoreKeyIndicator/index';
import { getRatingByStatus } from 'configs/helpers';

import * as S from './styled';

const MapPopup = ({ popupInfo, onClose, year }) => {
  const {
    state: { latitude, longitude },
    data,
  } = popupInfo;

  return (
    <Popup
      anchor="left"
      zIndex={2}
      closeButton={true}
      closeOnClick
      className="map-popup-container"
      dynamicPosition={false}
      longitude={longitude}
      latitude={latitude}
      onClose={onClose}
    >
      <S.Container>
        <S.Content>
          {!popupInfo.data.popupType ? (
            <React.Fragment>
              <S.Title>
                {data.title}
              </S.Title>
              <S.SummaryLine>
                <S.StatsContainer>
                  <S.ValueText>
                    {data.value}{data.valueType}
                  </S.ValueText>
                </S.StatsContainer>
                <S.ScoreKeyContainer>
                  <ScoreKeyIndicator padding={8} rating={getRatingByStatus(data.status)} size={50} />
                </S.ScoreKeyContainer>
              </S.SummaryLine>
            </React.Fragment>
          ) : null }
          {popupInfo.data.popupType === 'enroled' ? (
            <React.Fragment>
              <S.Title>
                {data.title}
              </S.Title>
              <S.SummaryLine>
                <S.StatsContainer>
                  <S.ValueText>
                    {data.fourYearsEnroled} of 4 year olds
                  </S.ValueText>
                  <S.ValueText>
                    {data.treeYearsEnroled} of 3 year olds
                  </S.ValueText>
                </S.StatsContainer>
                <S.ScoreKeyContainer>
                  <ScoreKeyIndicator padding={8} rating={getRatingByStatus(data.status)} size={50} />
                </S.ScoreKeyContainer>
              </S.SummaryLine>
            </React.Fragment>
          ) : null}
          {popupInfo.data.popupType === 'glat' ? (
            <React.Fragment>
              <S.Title>
                {data.title}
              </S.Title>
              <S.SummaryLine>
                <S.StatsContainer>
                  <S.ValueText>
                    {data[`passing${year}`]}% Students passing with A-D
                  </S.ValueText>
                </S.StatsContainer>
                <S.ScoreKeyContainer>
                  <ScoreKeyIndicator padding={8} rating={getRatingByStatus(data.status)} size={50} />
                </S.ScoreKeyContainer>
              </S.SummaryLine>
            </React.Fragment>
          ) : null}
          {popupInfo.data.popupType === 'evolution' ? (
            <React.Fragment>
              <S.Title>
                {data.title}
              </S.Title>
              <S.SummaryLine>
                <S.StatsContainer>
                  <S.ValueText>
                    Laptops: {data.laptops}
                  </S.ValueText>
                  <S.ValueText>
                    Projectors: {data.projectors}
                  </S.ValueText>
                  <S.ValueText>
                    Tablets: {data.tablets}
                  </S.ValueText>
                  <S.ValueText>
                    Wifi and Fiber: {data.compleatedStatus}
                  </S.ValueText>
                </S.StatsContainer>
                <S.ScoreKeyContainer>
                  <ScoreKeyIndicator padding={8} rating={getRatingByStatus(data.status)} size={50} />
                </S.ScoreKeyContainer>
              </S.SummaryLine>
            </React.Fragment>
          ) : null}
          {popupInfo.data.popupType === 'potholes' ? (
            <React.Fragment>
              <S.Title>
                {data.streetLocation}
              </S.Title>
              <S.SummaryLine>
                <S.StatsContainer>
                  <S.ValueText>
                    {data.workingDays}
                  </S.ValueText>
                </S.StatsContainer>
                <S.ScoreKeyContainer>
                  <ScoreKeyIndicator padding={8} rating={getRatingByStatus(data.status)} size={50} />
                </S.ScoreKeyContainer>
              </S.SummaryLine>
            </React.Fragment>
          ) : null}
        </S.Content>
      </S.Container>
    </Popup>
  );
};

MapPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  popupInfo: PropTypes.object.isRequired,
  year: PropTypes.number.isRequired,
};

export default MapPopup;

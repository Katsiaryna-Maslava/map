import styled from 'styled-components';

import { getCategoryPropertyByRating } from 'configs/helpers';

export const Icon = styled.img.attrs({
  alt: 'Pin icon',
  src: ({ rating }) => getCategoryPropertyByRating(rating, 'pinIcon'),
})`
  max-height: 28px;
  max-width: 28px;
`;


export const Name = styled.div`
  color: ${({ theme }) => theme.darkGray};
  font-size: 24px;
  font-weight: 600;
  left: 45px;
  position: absolute;
  top: 0;
`;

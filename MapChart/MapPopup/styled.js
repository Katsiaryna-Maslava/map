import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';

import BaseButton from 'components/buttons/Base';

export const Button = styled(BaseButton).attrs({
  backgroundColor: ({ theme }) => theme.lightBlue,
  color: ({ theme }) => theme.primaryWhite,
  fontSize: 14,
  fontWeight: 400,
  padding: [10, 20],
})`
  text-transform: uppercase;
`;

export const Container = styled(Flex).attrs({
  alignItems: 'center',
  flex: '1',
  justifyContent: 'center',
  px: 20,
  py: 18,
  width: 287,
})`
  background-color: ${({ theme }) => theme.primaryWhite};
  border: 2px solid ${({ theme }) => theme.primaryBlue};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.4);
  cursor: default;
  pointer-events: all;
  z-index: 2;

  ::before {
    border-bottom: 24px solid transparent;
    border-right: 24px solid ${({ theme }) => theme.primaryBlue};
    border-top: 24px solid transparent;
    content: '';
    height: 0;
        left: -22px;
    position: absolute;
    width: 0;
  }
`;

export const Content = styled(Flex).attrs({
  flex: '1',
  flexDirection: 'column',
})`
  color: ${({ theme }) => theme.primaryWhite};
  position: relative;
`;

export const Label = styled(Box).attrs({
  fontSize: 14,
})`
  color: ${({ theme }) => theme.lightBlack};
  letter-spacing: 1.6px;
  line-height: 20px;
  font-weight: 600;
`;

export const Labels = styled(Box).attrs({
  mt: 10,
  mb: 15,
})`

`;

export const ScoreKeyContainer = styled(Flex).attrs({
  alignItems: 'center',
})`
  position: relative;
`;

export const StatsContainer = styled(Flex).attrs({
  flex: '1',
  flexDirection: 'column',
})`
  position: relative;
`;

export const StatsLabel = styled(Flex).attrs({
  flex: '1',
  fontSize: 12,
  flexDirection: 'column',
})`
  color: ${({ theme }) => theme.lightBlack};
  font-weight: 600;
`;

export const StatsValue = styled(Flex).attrs({
  flex: '2',
  fontSize: 36,
  flexDirection: 'column',
})`
  color: ${({ theme }) => theme.lightBlack};
  font-weight: 800;
`;

export const ValueText = styled(Flex).attrs({
  flex: '2',
  fontSize: 14,
  flexDirection: 'column',
})`
  color: ${({ theme }) => theme.lightBlack};
  font-weight: 400;
`;

export const SummaryLine = styled(Flex).attrs({
  flex: '1',
})`
  position: relative;
`;

export const Title = styled(Box).attrs({
  fontSize: 20,
  mb: 10,
})`
  color: ${({ theme }) => theme.lightBlack};
  font-weight: 600;
`;

import styled from 'styled-components';

export const TimerContainer = styled.div`
  background: ${({ theme }) => theme.colors.background1};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  width: 280px;
  margin: 0 auto;
  margin-bottom: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100%;
    display: flex;
    padding: ${props => (props.active ? '22px 28px 50px 28px' : '22px 28px')};
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 0;
    width: 288px;
    height: 329px;
    flex-direction: column;
    position: absolute;
    right: 16px;
    top: 40px;
  }
`;

export const TimerTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  padding: 18px 30px;
  margin: 0 0 45px 0;

  color: #ffffff;
  background: ${({ theme }) => theme.colors.disabledBtn};
  box-shadow: ${({ theme }) => theme.shadows.header};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 275px;
    padding: 18px 20px;
    margin: 0 auto 0 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin: ${props => (props.active ? '0 0 80px 0' : '0 0 50px 0')};
  }
`;

export const TimerFlex = styled.ul`
  display: flex;
  justify-content: space-evenly;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    align-items: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const TimerBg = styled.div`
  width: ${props => (props.active ? '63px' : '100px')};
  height: ${props => (props.active ? '63px' : '100px')};
  background: ${({ theme }) => theme.colors.iconsHover};
  box-shadow: ${({ theme }) => theme.shadows.counter};
  margin: 0 0 15px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    height: 60px;
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin: 0 0 15px 0;
    height: ${props => (props.active ? '63px' : '100px')};
  }
`;

export const BoxTimer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 45px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: 0;
    position: relative;
    &:not(:last-child) {
      margin: ${props => (props.active ? '0 20px 0 0' : '0 40px 0 0')};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    &:not(:last-child) {
      margin: 0;
    }
  }
`;

export const TimerAmout = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: ${props => (props.active ? '35px' : '45px')};
  line-height: 38px;
  color: ${({ theme }) => theme.colors.numbers};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    font-size: ${props => (props.active ? '36px' : '45px')};
  }
`;

export const ColoredTimer = styled(TimerAmout)`
  color: ${({ theme }) => theme.colors.mainBrandColor};
`;

export const TimerText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: ${props => (props.active ? '11px' : '14px')};
  line-height: ${props => (props.active ? '13px' : '17px')};
  text-align: center;
  display: flex;
  white-space: pre-wrap;
  width: min-content;
  color: ${({ theme }) => theme.colors.lightText};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 11px;
    line-height: 13px;
    position: absolute;
    top: 65px;
    white-space: ${props => (props.active ? 'pre-warp' : 'nowrap')};
    width: ${props => (props.active ? 'min-content' : '100%')};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    font-size: ${props => (props.active ? '11px' : '14px')};
    line-height: ${props => (props.active ? '13px' : '17px')};
    position: unset;
    white-space: pre-wrap;
    width: min-content;
  }
`;

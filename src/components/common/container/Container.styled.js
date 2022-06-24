import styled from 'styled-components';

import bgImageMobile from 'assets/images/main/auth-mobile.jpg';
import bgImageMobile2x from 'assets/images/main/auth-mobile@2x.jpg';
import bgImageMobileAd from 'assets/images/main/auth-mobile-ad.jpg';
import bgImageMobileAd2x from 'assets/images/main/auth-mobile-ad@2x.jpg';
import bgImageTablet from 'assets/images/main/auth-tablet.jpg';
import bgImageTablet2x from 'assets/images/main/auth-tablet@2x.jpg';
import bgImageDesktop from 'assets/images/main/auth-desktop.jpg';
import bgImageDesktop2x from 'assets/images/main/auth-desktop@2x.jpg';

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 20px 20px;
  width: 100vw;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: ${({ theme }) => theme.breakPoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: ${({ theme }) => theme.breakPoints.tablet};
    padding: 32px 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 40px 16px;
    width: ${({ theme }) => theme.breakPoints.desktop};
  }
`;

export const AdvContainer = styled(StyledContainer)`
  width: 320px;
  padding-top: 32px;
  padding-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: ${({ theme }) => theme.breakPoints.tablet};
    padding: 64px 145px 88px 145px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin: 0 auto;
    width: calc(100vw / 2 + ${({ theme }) => theme.breakPoints.desktop} * 0.07);
    padding: 180px
      calc(
        (100vw / 2 + ${({ theme }) => theme.breakPoints.desktop} * 0.07) - 605px
      )
      0 125px;
  }
`;

export const QuoteContainer = styled(AdvContainer)`
  width: 245px;
  padding-top: 20px;
  padding-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 526px;
    padding: 75px 0 70px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin: 0 auto;
    width: calc(100vw / 2 + ${({ theme }) => theme.breakPoints.desktop} * 0.07);
    padding: 206px
      calc(
        (100vw / 2 + ${({ theme }) => theme.breakPoints.desktop} * 0.07) - 565px
      )
      0 165px;
  }
`;

export const SignContainer = styled(AdvContainer)`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 64px 184px 0 184px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin: 0 auto;
    width: calc(100vw / 2 - ${({ theme }) => theme.breakPoints.desktop} * 0.07);
    padding: ${({ forSignup }) => (forSignup ? '90px' : '185px')} 74px 0
      calc(
        (100vw / 2 - ${({ theme }) => theme.breakPoints.desktop} * 0.07) - 475px
      );
  }
`;

export const BackgroundContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  min-width: 320px;
  min-height: ${({ forSignup }) => (forSignup ? '588px' : '398px')};
  background-image: linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
    url(${bgImageMobile});

  background-repeat: no-repeat;
  background-size: auto 588px;
  background-position: top center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImageMobile2x});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    min-width: ${({ theme }) => theme.breakPoints.mobile};

    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImageMobileAd});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgImageMobileAd2x});
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    min-width: ${({ theme }) => theme.breakPoints.tablet};
    min-height: ${({ forSignup }) => (forSignup ? '735px' : '559px')};
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImageTablet});
    background-size: auto 735px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgImageTablet2x});
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    min-width: calc(
      100vw / 2 - ${({ theme }) => theme.breakPoints.desktop} * 0.07
    );
    width: calc(100vw / 2 - ${({ theme }) => theme.breakPoints.desktop} * 0.07);
    min-height: 790px;
    background-image: linear-gradient(
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgImageDesktop});
    background-size: auto 790px;
    background-position: top right;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgImageDesktop2x});
    }
  }
`;

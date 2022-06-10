import styled from 'styled-components';
import imagesMobile from 'images/main/auth-mobile.jpg';
import imagesMobileForIOS from 'images/main/auth-mobile@2x.jpg';
import imagesTablet from 'images/main/auth-tablet.jpg';
import imagesTabletForIOS from 'images/main/auth-tablet@2x.jpg';
import imagesDesktop from 'images/main/auth-desktop.jpg';
import imagesDesktopForIOS from 'images/main/auth-desktop@2x.jpg';

export const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.overlay};

  background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.overlay},
      ${({ theme }) => theme.colors.overlay}
    ),
    url(${imagesMobile});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.overlay},
        ${({ theme }) => theme.colors.overlay}
      ),
      url(${imagesMobileForIOS});
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.overlay},
        ${({ theme }) => theme.colors.overlay}
      ),
      url(${imagesTablet});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          ${({ theme }) => theme.colors.overlay},
          ${({ theme }) => theme.colors.overlay}
        ),
        url(${imagesTabletForIOS});
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 549px;
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.overlay},
        ${({ theme }) => theme.colors.overlay}
      ),
      url(${imagesDesktop});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          ${({ theme }) => theme.colors.overlay},
          ${({ theme }) => theme.colors.overlay}
        ),
        url(${imagesDesktopForIOS});
    }
  }
`;

export const StyledTablet = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 64px;
    margin-bottom: 65px;
    width: 400px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-top: 185px;
    margin-bottom: 175px;
  }
`;

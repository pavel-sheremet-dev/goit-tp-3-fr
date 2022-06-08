import styled from 'styled-components';
import images from 'images/main/auth-mobile.jpg';
import imagesForIOS from 'images/main/auth-mobile@2x.jpg';

export const StyledSection = styled.div`
  background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.overlay},
      ${({ theme }) => theme.colors.overlay}
    ),
    url(${images});
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: cover;

@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image:  linear-gradient(
      to right,
      ${({ theme }) => theme.colors.overlay},
      ${({ theme }) => theme.colors.overlay}
    ), url(${imagesForIOS});
    
`;

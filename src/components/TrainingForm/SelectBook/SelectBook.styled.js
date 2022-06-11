import styled from 'styled-components';

export const Wraper = styled.div`
  position: relative;
  width: 280px;
  height: 42px;
  padding: 12px;
  margin-bottom: 32px;
  border: none;
  color: ${({ theme }) => theme.colors.placeholder};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: inset ${({ theme }) => theme.shadows.inputShadow};

  & .iconDownInput {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    justify-content: end;
    margin-right: 5px;
    border-radius: 0;
    margin-top: 0;

    &:hover,
    &:focus {
      background-color: transparent;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 483px;
    margin-bottom: 0;
    margin-right: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 715px;
    margin-right: 0;
  }
`;

export const Placeholder = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const Select = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 1000;
  padding: 5px 12px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  backdrop-filter: blur(50px);
  overflow-y: auto;
`;

export const SelectItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.placeholder};
  transition: ${({ theme }) => theme.transition('color')},
    ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('border-radius')};
  padding: 2px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    border-radius: 2px;
  }
`;

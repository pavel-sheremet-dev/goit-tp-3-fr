import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const HeaderList = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`;

export const HeaderListItem = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.lightText};
  margin-left: auto;
  margin-right: auto;
`;

export const ListBooks = styled.ul`
  width: 280px;
  margin: 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 704px;
    max-height: 182px;
    overflow-y: auto;
    overflow-x: hidden;
    border-top: none;

    &::-webkit-scrollbar {
      width: 5px;
      background-color: ${({ theme }) => theme.colors.scroll};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.disabledBtn};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 100%;
  }
`;

export const ItemBooks = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  padding-top: 20px;
  padding-bottom: 20px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  & .checkIcon {
    position: absolute;
    border: 1px solid #a6abb9;
    border-radius: 1px;
    padding: 5px;
    width: 15px;
    height: 15px;
    background-color: transparent;

    & svg {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      position: relative;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 704px;
    justify-content: space-around;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Item = styled.p`
  display: flex;
  max-width: 200px;
  margin-left: 34px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  &.titleBook {
    width: 250px;
  }

  &.authorBook {
    width: 165px;
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      width: 180px;
    }
  }

  &.yearBook {
    width: 145px;
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      width: 160px;
    }
  }

  &.pagesBook {
    width: 80px;
    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      width: 90px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    font-size: 14px;
    line-height: 1.21;
    margin-left: 0;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const TitleItem = styled.span`
  min-width: 41px;
  margin-right: 28px;

  color: ${({ theme }) => theme.colors.lightText};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: 0;

    &.isHiddenItem {
      display: none;
    }
  }
`;

export const TextItem = styled.span`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    &.isHiddenItem {
      display: none;
    }
  }
`;

// Mobile version
export const EmptyItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 280px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    flex-direction: row;
    width: 704px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 100%;
    padding-top: 23px;
    padding-bottom: 23px;
  }
`;

export const EmptyTextItem = styled.p`
  display: flex;
  max-width: 200px;
  margin-left: 40px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    &.isHiddenItem {
      display: none;
    }
  }
`;

export const Placeholder = styled.span`
  max-width: 154px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.defaultFont};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 14px;
    line-height: 1.21;
  }
`;

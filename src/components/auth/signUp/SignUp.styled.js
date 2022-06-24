import styled from 'styled-components';

export const SectionStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.background1};

  & .sign {
    margin: 0 auto 28px auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    & button[type='submit'] {
      margin-top: 15px;
    }
  }
`;

export const ContentBox = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    background-color: ${({ theme }) => theme.colors.background1};
    padding: 40px;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;

  & p {
    color: ${({ theme }) => theme.colors.lightText};
  }

  & a {
    color: ${({ theme }) => theme.colors.mainBrandColor};
    text-decoration: underline;
  }
`;

import styled from 'styled-components';

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 430px;
  @media (max-width: 420px) {
    min-width: 80vw;
  }
`;

export const LogoImage = styled.img`
  margin-bottom: 40px;
`;

export const Title = styled.p`
  max-width: 250px;
  font-family: Roboto;
  font-size: 2.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.2px;
  text-align: center;
  color: var(--charcoal-grey);
  margin-bottom: 15px;
`;

export const Subtitle = styled.p`
  max-width: 400px;
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: 0.2px;
  text-align: center;
  color: var(--charcoal-grey);
  @media (max-width: 420px) {
    max-width: 70vw;
  }
`;

export const ErrorMsg = styled.p`
  max-width: 300px;
  flex-wrap: wrap;
  font-family: Roboto;
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  text-align: center;
  color: #ff0f44;
  margin-top: 8px;
`;

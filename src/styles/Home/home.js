import styled from 'styled-components';

export const InitialMsg = styled.p`
  font-family: Roboto;
  font-size: 2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: -0.45px;
  text-align: center;
  color: var(--charcoal-grey);
`;

export const NotFoundMsg = styled.p`
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  color: #b5b4b4;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  min-width: 90vw;
  height: 70vh;
  padding: 20px 15px;
`;

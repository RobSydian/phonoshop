import styled from "styled-components";

const StyledProductCard = styled.div`
  width: 350px;
  box-shadow: 0 0 15px -5px;
  /* transform: scale(1.1); */
  overflow: hidden;
  transition: 0.3s;
  animation: ease-in-out;
  box-sizing: border-box;
  margin: 1rem;
  box-sizing: border-box;
  background-color: white;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px 0;
    /* z-index: 100; */
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card--img {
    padding: 0.5rem;
  }

  .card--content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card--content--brand {
    font-size: 1.5rem;
  }
  .card--content--model {
    font-size: 1.2rem;
    color: black;
  }
  .card--content--price {
    font-size: 1.3rem;
  }
  @media (min-width: 600px) {
    width: 350px;
    min-height: 400px;
  }
`;

export default StyledProductCard;

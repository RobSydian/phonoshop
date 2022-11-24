import styled from "styled-components";

const StyledButton = styled.div`
  .success {
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    padding: 0.5rem;
    /* color: ${(props) => props.theme.colors.primary}; */
    color: white;
    background-color: #3fbf3f;
  }

  .success:hover {
    color: white;
    background-color: #36a436;
  }
`;

export default StyledButton;

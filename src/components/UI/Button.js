import StyledButton from "../../styles/UI/StyledButton";

export default function Button({ type, classType, text }) {
  return (
    <StyledButton>
      <button type={type} className={classType}>
        {text}
      </button>
    </StyledButton>
  );
}

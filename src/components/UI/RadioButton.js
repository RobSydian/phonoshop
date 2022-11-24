import StyledRadioButton from "../../styles/UI/StyledRadioButton";

export default function RadioButton({ id, name, value, checkValue = false }) {
  return (
    <StyledRadioButton>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checkValue}
      />
      <label htmlFor={id}>{id}</label>
    </StyledRadioButton>
  );
}

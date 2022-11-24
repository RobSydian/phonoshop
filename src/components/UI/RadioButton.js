import StyledRadioButton from "../../styles/UI/StyledRadioButton";

export default function RadioButton({
  id,
  name,
  value,
  checked,
  inputRef,
  onClickFn,
}) {
  return (
    <StyledRadioButton>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onClick={() => onClickFn(value)}
      />
      <label htmlFor={id}>{id}</label>
    </StyledRadioButton>
  );
}

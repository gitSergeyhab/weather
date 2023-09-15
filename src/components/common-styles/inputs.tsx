import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;

  & input {
    border-radius: 2px;
  }
`;

export const InputWrapperSearch = styled(InputWrapper)`
  & input {
    width: 254px;
    padding: 8px 20px;
    color: var(--color-text-input);
    background-color: var(--color-input-base);
    border: none;
    outline: none;
    transition: background-color var(--transition-base);
  }
  & input:hover {
    background-color: var(--color-input-hover);
  }
  & input:focus::placeholder {
    opacity: 0;
  }
  & input:focus {
    background-color: var(--color-input-focus);
  }
  & input::placeholder {
    color: var(--color-text-placeholder);
    transition: opacity var(--transition-base);
  }
`;

export const InputWrapperCheckBox = styled(InputWrapper)`
  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--color-label-base);
    border-radius: 2px;
    cursor: pointer;
    transition: background-color var(--transition-base),
      box-shadow var(--transition-base);
    user-select: none;

    &:hover {
      background-color: var(--color-label-hover);
      box-shadow: 0 4px 10px rgba(11, 23, 78, 0.5);
    }
    &:active {
      background-color: var(--color-label-active);
    }
    & > span {
      transition: opacity var(--transition-base);
    }
    &:active > span {
      opacity: 0.3;
    }
  }

  & input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);

    &:focus + label {
      background-color: var(--color-label-hover);
    }
    &:disabled + label {
      opacity: 0.5;
      pointer-events: none;
    }
    &:checked + label {
      background-color: var(--color-label-active);
      box-shadow: none;
    }
    &:checked + label:hover {
      background-color: var(--color-label-hover-checked);
    }
    &:checked:focus + label {
      background-color: var(--color-label-hover-checked);
    }
  }
`;

export const InputWrapperRadio = styled(InputWrapperCheckBox)`
  & label {
    justify-content: space-between;
    padding: 10px;
  }
`;



import styled from 'styled-components';

const Input = styled.input`
  width: 263px;
  height: 59px;
  background-color: var(--lightGrey);
  border-radius: 36px;
  border: none;
  font-size: 12.5px;
  line-height: 150%;
  color: rgba(92, 99, 112, 1);
  padding-left: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.6;
  }
`;

export default Input;

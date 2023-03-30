import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Bold = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const SaveButton = styled.button`
  width: 180px;
  height: 30px;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  width: 180px;
  height: 30px;
  margin-bottom: 10px;
`;

export const FormError = styled.div`
  color: red;
`;

export const Input = styled.input`
  width: 400px;
  padding: 5px;
`;

export const StyledSelect = styled.select`
  width: 400px;
  padding: 5px;
`;

export const Label = styled.label`
  display: flex;
  width: 700px;
  justify-content: space-between;
  align-items: center;
`;

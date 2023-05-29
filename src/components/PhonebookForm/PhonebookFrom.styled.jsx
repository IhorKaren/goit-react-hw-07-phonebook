import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  display: block;
  margin-right: auto;
`;

const StyledField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #00aeef;
  }
`;

const Error = styled.div`
  position: absolute;
  color: red;
  animation: ${appear} 500ms ease-in-out;
`;

const StyledButton = styled.button`
  background-color: #00aeef;
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  &:hover {
    background-color: #0077b5;
  }
`;

export {
  StyledLabel,
  StyledField,
  Error,
  StyledButton,
  StyledForm,
};

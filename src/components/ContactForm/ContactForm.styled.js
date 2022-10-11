import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding: 20px;
  border: 1px solid #064927;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  font-size: 16px;
  padding: 5px 15px;
  border: 1px solid #2c7953;
  border-radius: 4px;
`;

export const SubmitBtn = styled.button`
  display: block;
  width: 200px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #2c7953;
  border-radius: 4px;
  cursor: pointer;

  color: #064927;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;

  :hover {
    font-weight: 600;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: orangered;
`;

import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ItemText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const BtnDelete = styled.button`
  display: block;
  width: 100px;
  height: 30px;
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

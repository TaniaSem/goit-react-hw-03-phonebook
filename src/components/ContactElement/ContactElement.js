import PropTypes from 'prop-types';
import { ListItem, BtnDelete, ItemText } from './ContactElement.styled';

export const ContactElement = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem key={id}>
      <ItemText>
        {name}: {number}
      </ItemText>
      <BtnDelete onClick={() => onDeleteContact(id)}>Delete</BtnDelete>
    </ListItem>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

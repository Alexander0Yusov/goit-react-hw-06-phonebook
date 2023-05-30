import css from './Contacts.module.css';
import ListItem from 'components/ListItem/ListItem';

import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'store/contacts/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.firstCombineReducer);

  const filterByName = () => {
    const lowName = filter.toLowerCase();
    return contacts.filter(item => item.name.toLowerCase().includes(lowName));
  };

  const deleteHandler = id => {
    dispatch(removeContact(id));
  };

  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        {filterByName().map(({ id, name, number, url }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            url={url}
            deleteContact={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;

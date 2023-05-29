import { useEffect, useState } from 'react';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';

import css from './App.module.css';

const LS_KEY = 'phonebook';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    //localStorage.removeItem(LS_KEY);
    return (
      JSON.parse(localStorage.getItem(LS_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', url: '' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12', url: '' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79', url: '' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26', url: '' },
      ]
    );
  });
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  // hook useLocalStorage video_1 1:06

  // as did update
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const isIncludingName = (name, array) => {
    const lowName = name.toLowerCase();
    return array.find(({ name }) => name.toLowerCase() === lowName);
  };

  const addUser = newItem => {
    const decisionForAdd = isIncludingName(newItem.name, contacts);

    if (decisionForAdd) {
      alert(`${decisionForAdd.name} is already in contacts !`);
      return;
    }

    setContacts(prev => {
      return [...prev, newItem];
    });
  };

  const filterByName = () => {
    const lowName = filter.toLowerCase();
    return contacts.filter(item => item.name.toLowerCase().includes(lowName));
  };

  const inputHandler = e => {
    setFilter(e.target.value);
  };

  const deleteHandler = id => {
    const queryIndex = contacts.findIndex(item => item.id === id);
    setContacts(prev => {
      return [...prev].filter((item, index) => index !== queryIndex);
    });
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div
      className={css.Wrap}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section>
        <h2 className={css.title}>Phonebook</h2>
        <Filter
          inputHandler={inputHandler}
          onModalOpen={toggleModal}
          filter={filter}
        />
        <Contacts contactList={filterByName()} deleteContact={deleteHandler} />
      </Section>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Form addUser={addUser} toggleModal={toggleModal}></Form>
        </Modal>
      )}
    </div>
  );
};

// идеи тел. книги:
// расположение списка - строгое в ячейках таблицы
// кнопки удалить/вызвать появится при выделении строки
// строки разных оттенков
// при фокусе есть обводка, стрелками вверх-вниз смена строки, кнопки del/enter удаляют и начинают звонок
// перед началом звонка - модалка "вы уверены что хотите звонить?"
// при удалении - модалка "вы уверены что хотите удалить?"
// модалка с выбором эмоджи или загрузить фото
// проверка на существующий номер, для этого последние 9 цифр сравнить, для этого убрать пробелы и тире
// alert заменить на React-Toastify
// верстка адаптивная, на широком экране позади фон как в телеграмм, в два столбца
// применить Formik & Yup, react-icons, date-fns
// темизация(цветность) emotion 'dark/light'
// кастомный хук по типу hook useLocalStorage video_1 1:06

// ошибка в юзэффекте не дает норм деплой

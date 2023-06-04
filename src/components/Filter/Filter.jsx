import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { TiUserAdd } from 'react-icons/ti';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = ({ onModalOpen }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filterCombine);

  const inputHandler = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.panel}>
      <label className={css.label}>
        <input
          onChange={inputHandler}
          className={css.input}
          value={filter}
          type="text"
          placeholder="Search by Name"
        ></input>
        <span className={css.searchPic}>
          <FcSearch />
        </span>
      </label>
      <span
        onClick={() => onModalOpen()}
        className={css.modalOpen}
        type="button"
      >
        <TiUserAdd></TiUserAdd>
      </span>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onModalOpen: PropTypes.func.isRequired,
};

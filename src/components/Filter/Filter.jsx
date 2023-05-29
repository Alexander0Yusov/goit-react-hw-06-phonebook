import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { TiUserAdd } from 'react-icons/ti';

const Filter = ({ inputHandler, onModalOpen, filter }) => {
  return (
    <div className={css.panel}>
      <label className={css.label}>
        {/* Filter by Name: */}
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
  inputHandler: PropTypes.func.isRequired,
  onModalOpen: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

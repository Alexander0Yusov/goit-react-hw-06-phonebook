import PropTypes from 'prop-types';
import css from './ListItem.module.css';

const ListItem = ({ id, name, number, url, deleteContact }) => {
  return (
    <li className={css.listItem}>
      <div className={css.imageThumb}>
        {url && (
          <img className={css.photoDemo} src={url} alt="User portrait"></img>
        )}
      </div>

      <div className={css.dataBox}>
        <p className={css.pName}>{name}</p>
        <p className={css.pNumber}>{number}</p>
      </div>

      <button
        onClick={() => deleteContact(id)}
        className={css.button}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  url: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

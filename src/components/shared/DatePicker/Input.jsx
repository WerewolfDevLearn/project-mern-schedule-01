import PropTypes from 'prop-types';

export default function InputDate({ inputValue, labelTex, onClickHandler }) {
  return (
    <div className="input-wrapper">
      {/* <label className="input-label" htmlFor="start-date">
        {labelTex}
      </label> */}
      <div className="input-decor">
        <button id="inputdate" className="input-field" type="button" onClick={onClickHandler}>
          {inputValue}
        </button>
      </div>
    </div>
  );
}

InputDate.propTypes = {
  inputValue: PropTypes.string.isRequired,
  labelTex: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired
};

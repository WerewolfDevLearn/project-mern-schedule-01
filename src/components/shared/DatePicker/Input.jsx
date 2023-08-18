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

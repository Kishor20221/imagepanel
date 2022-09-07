import PropTypes from "prop-types";

import "Styles/Common/inputtext.css";

const InputText = ({
  isRequired = false,
  searchText = "",
  setSearchText,
  placeholder,
}) => (
  <>
    <input
      data-testid="inputText"
      type="text"
      value={searchText}
      placeholder={placeholder}
      required={isRequired}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
    />
  </>
);

InputText.propTypes = {
  isRequired: PropTypes.bool,
  searchText: PropTypes.string,
  placeholder: PropTypes.string,
  setSearchText: PropTypes.func,
};

InputText.defaultProps = {
  isRequired: false,
  searchText: "",
  placeholder: "Search",
  setSearchText: () => {},
};

export default InputText;

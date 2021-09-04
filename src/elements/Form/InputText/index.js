import React, { useState } from "react";
import propTypes from "prop-types";

export default function Text(props) {
  const { value, type, placeholder, name, prepend, append, outerClassName, inputClassName, errorResponse } = props;

  const [hasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") {
    pattern = /^[^\s@]+@[\s@]+\.[^\s@]+$/;
  }
  if (type === "tel") {
    pattern = "[0-9]*";
  }

  const onChange = (event) => {
    const target = {
      target: {
        name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError("");
    }

    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["mb-4 relative", outerClassName].join("")}>
      <div className="input-group">
        {prepend && (
          <div className="bg-gray-900">
            <span>{prepend}</span>
          </div>
        )}
        <input type={type} name={name} pattern={pattern} value={value} placeholder={placeholder} onChange={onChange} className={["form-payment", inputClassName].join(" ")} />
        {append && (
          <div className="bg-gray-900">
            <span>{append}</span>
          </div>
        )}
      </div>
      {hasError && <span className="absolute top-11 bg-red-600 text-white text-sm">{hasError}</span>}
    </div>
  );
}

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};

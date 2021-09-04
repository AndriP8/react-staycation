import React, { useRef } from "react";
import propTypes from "prop-types";

export default function Text(props) {
  const { value, placeholder, name, prepend, append, outerClassName, inputClassName, accept } = props;

  const refInputFile = useRef(null);

  return (
    <div className={["mb-4 relative", outerClassName].join("")}>
      <div className="input-group">
        {prepend && (
          <div className="bg-gray-900">
            <span>{prepend}</span>
          </div>
        )}
        <input type="file" name={name} value={value} onChange={props.onChange} className="hidden" accept={accept} ref={refInputFile} />
        <input onClick={() => refInputFile.current.click()} defaultValue={value} placeholder={placeholder} className={["form-payment", inputClassName].join(" ")} />
        {append && (
          <div className="bg-gray-900">
            <span>{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

Text.defaultProps = {
  placeholder: "Browser a file...",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  accept: propTypes.string.isRequired,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};

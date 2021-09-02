import React from "react";

import propTypes from "prop-types";
import Button from "../Button";

export default function Breadcrumb(props) {
  const className = ["breadcrumbs", props.className];
  return (
    <nav className="text-lg breadcrumbs">
      <ul className={className.join(" ")}>
        {props.data.map((item, index) => {
          return (
            <li className={`text-gray-900 ${index === props.data.length - 1 ? " active" : ""}`} key={`breadcrumb-${index}`}>
              {index === props.data.length - 1 ? (
                item.pagTitle
              ) : (
                <Button type="link" className="text-gray-400" href={item.pagehref}>
                  {item.pagTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};

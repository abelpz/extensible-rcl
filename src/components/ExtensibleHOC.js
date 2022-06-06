import PropTypes  from "prop-types";
import * as React from "react";
import Extensible from "./Extensible";

export default function extensible(WrappedComponent) {
  const Extended = ({ onRenderItems, children, ...props }) => (
    <WrappedComponent {...props}>
      <Extensible onRenderItems={onRenderItems}>{children}</Extensible>
    </WrappedComponent>
  );

  Extended.propTypes = {
    onRenderItems: PropTypes.func,
    children: PropTypes.node,
  };
  return Extended;
}

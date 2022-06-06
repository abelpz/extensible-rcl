import * as React from "react";

export default function Extensible({ onRenderItems = () => null, children }) {

  const renderItems = React.useCallback(
    (items) => {
      const customItems = onRenderItems({ items });
      return customItems || items;
    },
    [onRenderItems]
  );

  return renderItems(children);
}

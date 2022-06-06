# Extensible

A wrapper Component that makes content extensible.

## Examples

### 1. Hello world (Wrapper)

```js

//Greeting.js
import { Extensible } from 'extensible-rcl';
import * as React from "react";

function Emoji({children, label}){
  return <span role="img" aria-label={label}>{children}</span>
}

function Greeting({ onRenderGreeting, customGreeting }) {
  return (
    <h1>
      <Extensible onRenderItems={onRenderGreeting}>
        <Emoji label="hi">👋</Emoji>{customGreeting || "Hi"}...
      </Extensible>
    </h1>
  );
}

//Component.js
function Component() {
  const onRenderGreeting = ({ items }) => {
    const [emoji,greeting,...rest] = items;
    return [
      greeting.toUpperCase(),
      " WORLD!",
      emoji,
      <span role="img" aria-label="world">
        🌎
      </span>,
      ...rest
    ];
  };
  return (
    <>
      <Greeting/>
      <Greeting onRenderGreeting={onRenderGreeting} customGreeting="Hello" />
    </>
  );
}


<Component />
```

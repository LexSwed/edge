# @fxtrot/edge

A component library for [`foxtrot`](https://github.com/LexSwed/foxtrot) project.

### Documentation

The documentation is created with [`docz`](https://www.docz.site/) and hosted here: [https://lexswed.github.io/edge/](https://lexswed.github.io/edge/)

### Acknowledgments

- [TailwindCSS](https://tailwindcss.com) for some design inspirations and color palette
- [Braid Design System](https://seek-oss.github.io/braid-design-system) for components implementations examples
- [@reach/ui](https://reacttraining.com/reach-ui) for accessible inputs logic
- [Alex Sexton](https://www.youtube.com/watch?v=EDyiaDJJu-4) for some of the tips for Design Systems

### Installation

Install the library:

```bash
npm install @fxtrot/edge --save
```

Or via `yarn`:

```bash
yarn add @fxtrot/edge
```

Wrap your app in `ThemeProvider` which currently just injects global CSS-variables, but in case there will be some proper CSS-in-JS solution, it can actually do something:

```tsx
import ReactDOM from 'react-dom';

import { Edge } from '@fxtrot/edge';

ReactDOM.render(
  <Edge>
    <App />
  </Edge>
);
```

Or for concurrent mode

```tsx
import ReactDOM from 'react-dom';

import { Edge } from '@fxtrot/edge';

import '@fxtrot/edge/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Edge>
    <App />
  </Edge>
);
```

### Usage

Components are fully typed with `TypeScript`, but you don't have to use `TypeScript`:

```jsx
import React from 'react';

import { TextField } from '@fxtrot/edge';

const MyComponent = () => {
  const [text, setText] = React.useState('Hello world!');

  return (
    <main>
      <h1>{text}</h1>
      <TextField value={text} onChange={(e) => setText(e.target.value)} label="Welcome message" />
    </main>
  );
};
```

### Development

The project uses `tsdx` to build output files and `docz` to generate documentation.

First, install dependencies:

```bash
yarn install
```

To work on the library, run:

```bash
yarn start
```

To work on the documentation or use it as a playground for the components you work on, start `docz`:

```bash
yarn docz:dev
```

To build the library use:

```bash
yarn build
```

To build the docs:

```bash
yarn docz:build
```

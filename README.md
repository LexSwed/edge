# @foxtrot/edge

A component library for [`foxtrot`](https://github.com/LexSwed/foxtrot) project.

### Why [linaria](https://github.com/callstack/linaria)?

1. I needed CSS-in-JS solution.
   - you don't need to make up class names
   - you the composition and styling is easy
   - you can use string interpolation to inject JS properties into CSS, making it reusable

For example, you can export a color scheme or utils from your library:

```js
// in the library:
export const spacer = n => `${n * 8}px`;

const style = css`
  padding: ${spacer(2)};
`;

// in your project

import { spacer } from 'lib';

const style = css`
  margin: ${spacer(1)};
`;
```

And you have consistent margins and paddings (multipliers of 8 in this example)!

2. I needed `zero-` or `close-to-zero-runtime`. While [`treat`](https://github.com/seek-oss/treat) looks promising, `linaria` is built for React and I'm more than OK with it, hence I can use beloved `styled.div`. It also had reacher docs with configuration and usage examples.

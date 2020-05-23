# @fxtrot/edge

![Build status](https://github.com/LexSwed/edge/workflows/CI/badge.svg)
[![npm](https://img.shields.io/npm/v/@fxtrot/edge.svg)](https://www.npmjs.com/package/@fxtrot/edge)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![bundlephobia](https://badgen.net/bundlephobia/minzip/@fxtrot/edge)](https://bundlephobia.com/result?p=@fxtrot/edge)

A component library for [`foxtrot`](https://github.com/LexSwed/foxtrot) project.

### Documentation

The documentation is hosted here: [https://lexswed.github.io/edge/](https://lexswed.github.io/edge/)

Created with [`docz`](https://www.docz.site/)

### Acknowledgments

- [TailwindCSS](https://tailwindcss.com) for some design inspirations and color palette
- [Braid Design System](https://seek-oss.github.io/braid-design-system) for components implementations examples
- [@reach/ui](https://reacttraining.com/reach-ui) for accessible inputs logic
- [Alex Sexton](https://www.youtube.com/watch?v=EDyiaDJJu-4) for some of the tips for Design Systems

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

To work on the documentation or use it as a playground for the components you work on, start `docz` in a _separate_ terminal:

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

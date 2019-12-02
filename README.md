# Vash Adapter

Use [Vash](https://www.npmjs.com/package/vash) templates with Fractal.

## Installation

`npm install @frctl/vash`

or

`yarn add @frctl/vash`

## Usage

In your `fractal.config.js` file:

```javascript
const vashAdapter = require('@frctl/vash')();
fractal.components.engine(vashAdapter);
fractal.components.set('ext', '.vash');
```

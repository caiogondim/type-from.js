# type-from

Get type from given argument.

## Installation

```console
npm install --save type-from
```

## Usage

```js
typeFrom({}) // => 'object'
typeFrom([]) // => 'array'
typeFrom(1) // => 'number'
typeFrom('lorem') // => 'string'
typeFrom(() => {})) // => 'function'
typeFrom(Symbol('lorem')) // => 'symbol'
typeFrom(true) // => 'boolean'
typeFrom(null) // => 'null'
typeFrom(undefined) // => 'undefined'
typeFrom(/.*/) // => 'regexp'
typeFrom(new Date) // => 'date'
typeFrom(new Error) // => 'error'
typeFrom(new Uint8Array) // => 'uint'
typeFrom(new Int8Array) // => 'int'
typeFrom(new Float32Array) // => 'float'
typeFrom(new Map) // => 'map'
typeFrom(new Set) // => 'set'
typeFrom(new WeakMap) // => 'weakmap'
typeFrom(new WeakSet) // => 'weakset'
typeFrom(new Promise(() => {})) // => 'promise'
typeFrom(function* () {}) // => 'generatorfunction'
function foo() {
  typeFrom(arguments) // => 'arguments'
}
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)

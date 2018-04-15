const typeFrom = require('../lib')

test('object', () => {
  expect(typeFrom({})).toEqual('object')
})

test('array', () => {
  expect(typeFrom([])).toEqual('array')
})

test('number', () => {
  expect(typeFrom(1)).toEqual('number')
})

test('string', () => {
  expect(typeFrom('lorem')).toEqual('string')
})

test('function', () => {
  expect(typeFrom(() => {})).toEqual('function')
})

test('symbol', () => {
  expect(typeFrom(Symbol('lorem'))).toEqual('symbol')
})

test('boolean', () => {
  expect(typeFrom(true)).toEqual('boolean')
})

test('null', () => {
  expect(typeFrom(null)).toEqual('null')
})

test('undefined', () => {
  expect(typeFrom(undefined)).toEqual('undefined')
})

test('regexp', () => {
  expect(typeFrom(/.*/)).toEqual('regexp')
})

test('data', () => {
  expect(typeFrom(new Date)).toEqual('date')
})

test('error', () => {
  expect(typeFrom(new Error)).toEqual('error')
})

test('uint', () => {
  expect(typeFrom(new Uint8Array)).toEqual('uint')
})

test('int', () => {
  expect(typeFrom(new Int8Array)).toEqual('int')
})

test('float', () => {
  expect(typeFrom(new Float32Array)).toEqual('float')
})

test('map', () => {
  expect(typeFrom(new Map)).toEqual('map')
})

test('set', () => {
  expect(typeFrom(new Set)).toEqual('set')
})

test('weakmap', () => {
  expect(typeFrom(new WeakMap)).toEqual('weakmap')
})

test('weakset', () => {
  expect(typeFrom(new WeakSet)).toEqual('weakset')
})

test('promise', () => {
  expect(typeFrom(new Promise(() => {}))).toEqual('promise')
})

test('generator', () => {
  expect(typeFrom(function* () {})).toEqual('generatorfunction')
})

test('arguments', () => {
  function foo() {
    expect(typeFrom(arguments)).toEqual('arguments')
  }
  foo()
})

# ethereum-regex [![Build Status](https://travis-ci.org/k4m4/ethereum-regex.svg?branch=master)](https://travis-ci.org/k4m4/ethereum-regex)

> Regular expression for matching Ethereum (ETH) addresses


## Install

```
~ ❯❯❯ npm install ethereum-regex
```


## Usage

```js
const ethereumRegex = require('ethereum-regex');

ethereumRegex().test('nodejsr0cks 0x281055afc982d96fab65b3a49cac8b878184cb16');
//=> true

ethereumRegex({exact: true}).test('nodejsr0cks 0x281055afc982d96fab65b3a49cac8b878184cb16 foo');
//=> false

ethereumRegex.v6({exact: true}).test('0x281055afc982d96fab65b3a49cac8b878184cb16');
//=> true

'nodejsr0cks 0x6f46cf5569aefa1acc1009290c8e043747172d89 unicorn 0x90e63c3d53e0ea496845b7a03ec7548b70014a91 rainbow'.match(ethereumRegex());
//=> ['0x6f46cf5569aefa1acc1009290c8e043747172d89', '0x90e63c3d53e0ea496845b7a03ec7548b70014a91']
```


## API

### ethereumRegex([options])

Returns a regex for matching Ethereum (ETH) addresses.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any ETH address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an ETH address.


## Credits

- [bitcoin-regex](https://github.com/kevva/bitcoin-regex) - ethereum-regex was inspired by this project by [kevva](https://github.com/kevva).
- [ip-regex](https://github.com/sindresorhus/ip-regex) - most of the documentation format has been adapted from this project by [sindresorhus](https://github.com/sindresorhus).


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)
declare namespace ethereumRegex {
	interface Options {
		/**
		Only match an exact string. By default, it matches any ETH addresses in a string. Useful with `RegExp#test()` to check if a string is an ETH address.
		@default false
		*/
		readonly exact?: boolean;
	}
}

/**
Returns a regex for matching Ethereum (ETH) addresses.
@example
```
import ethereumRegex = require('ethereum-regex')
ethereumRegex().test('nodejsrocks 0x281055afc982d96fab65b3a49cac8b878184cb16')
//=> true
```
*/
declare function ethereumRegex(options?: ethereumRegex.Options): RegExp

export = ethereumRegex

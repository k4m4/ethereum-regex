'use strict'
const re = '0x[a-fA-F0-9]{40}'

module.exports = options => {
	options = options || {}
	return options.exact ? new RegExp(`(?:^${re}$)`) : new RegExp(re, 'g')
}

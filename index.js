'use strict';
const re = '0x[a-fA-F0-9]{40}';

module.exports = opts => {
	opts = opts || {};
	return opts.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
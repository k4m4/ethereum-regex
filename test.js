import test from 'ava';
import m from './';

const fixtures = [
		'0x281055afc982d96fab65b3a49cac8b878184cb16',
		'0x6f46cf5569aefa1acc1009290c8e043747172d89',
		'0x90e63c3d53e0ea496845b7a03ec7548b70014a91',
		'0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e',
		'0x53d284357ec70ce289d6d64134dfac8e511c8a3d'
];

const fixturesNot = [
		'16rCmCmbuWDhPjWTrpQGaU3EPdZF7MTdUk',
		'DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG',
		'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
		'0xsfdlffsjksldfj[IPv6:2001:db8::2]',
		'XekiLaxnqpFb2m4NQAEcsKutZcZgcyfo6W',
		'nikolaskam{at}gmail{dot}com'
];

test('Exact ETH addresses', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact ETH addresses', t => {
	for (const x of fixtures) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}

	t.is(m().exec('ethereum:0x90e63c3d53e0ea496845b7a03ec7548b70014a91')[0], '0x90e63c3d53e0ea496845b7a03ec7548b70014a91');
});

test('Non-ETH addresses', t => {
	for (const x of fixturesNot) {
		t.false(m({exact: true}).test(x));
	}
});
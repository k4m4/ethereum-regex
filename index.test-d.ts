import {expectType} from 'tsd'
import ethereumRegex = require('.')

expectType<RegExp>(ethereumRegex())
expectType<RegExp>(ethereumRegex({exact: true}))

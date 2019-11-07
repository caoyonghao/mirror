import test from 'ava';
import { diff } from './index';

const path = require('path');

test('compare image', t => {
    return new Promise(resolve => diff({
        src: path.resolve(process.cwd(), './tmp/snapshot/1.png'),
        target: path.resolve(process.cwd(), './tmp/snapshot/2.png'),
    }).then((data: any) => {
        t.is(data.res.equal, true)
        resolve();
    }));
});

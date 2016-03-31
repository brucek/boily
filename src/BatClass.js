/* eslint-disable no-trailing-spaces */

import BazClass from './BazClass';

export class BatClass {

	constructor() {
		this.myBaz = new BazClass();
	}

	static hello() {
		return `hello ${this.world()}`;
	}

	static world() {
		return 'world!';
	}

	baz(word) {
		return `Hi ${this.myBaz.desc} ${qux(word)}`;
	}

}

function qux(word) {
	return word || 'nope!';
}

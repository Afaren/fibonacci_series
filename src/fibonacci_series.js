'use strict';

function fibonacci_series(n) {
	if (n == 0)
		return 0;
	if (n == 1)
		return [0,1];
	var pre, current, next;
	pre = 0;
	current = 1;
	next = current + pre;
	var array = [0,1];
	for (var i = 0; i <= n-2; i++) {
		array.push(next);
		pre = current;
		current = next;
		next = current + pre;
	}
	return array;
}

module.exports = fibonacci_series;

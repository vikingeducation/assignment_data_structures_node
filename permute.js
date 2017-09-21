function permutations(str) {
	var arr = str.split(''),
		len = arr.length,
		perms = [],
		rest,
		picked,
		restPerms,
		next;

	if (len == 0) return [str];

	for (var i = 0; i < len; i++) {
		rest = Object.create(arr);
		picked = rest.splice(i, 1);

		restPerms = permutations(rest.join(''));

		for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
			next = picked.concat(restPerms[j]);
			perms.push(next.join(''));
		}
	}
	return perms;
}

function hasPermuations(pattern, strInput) {
	const perms = permutations(pattern);
	for (let perm of perms) {
		if (strInput.indexOf(perm) !== -1) return true;
	}
	return false;
}

console.log(hasPermuations('ABC', 'fooCBAbar'));

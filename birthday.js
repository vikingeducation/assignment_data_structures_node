let inc = 0,
	combos = 0;
while (inc < 365) {
	inc++;
	combos += inc;
	if (combos / 365 >= 0.5) {
		console.log(inc);
		break;
	}
}

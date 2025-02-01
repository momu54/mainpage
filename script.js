if (
	/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
		window.navigator.userAgent
	)
) {
	window.location.href = './m';
}

let ishoveronbtn = false;
const cursor_element = /** @type {HTMLCollectionOf<HTMLDivElement>} */ (
	document.getElementsByClassName('cursorbg')
);

document.addEventListener('mousemove', (event) => {
	console.log(cursor_element[0].style.display);
	if (!cursor_element[0].style.display) cursor_element[0].style.display = 'block';
	cursor_element[0].style.left = event.clientX - (ishoveronbtn ? 10 : 20) + 'px';
	cursor_element[0].style.top = event.clientY - (ishoveronbtn ? 10 : 20) + 'px';
});

const socialbtn = document.getElementsByClassName('socialbtn');
[...socialbtn].forEach((element) => {
	/** @type {HTMLLinkElement} */ (element).addEventListener('mouseenter', () => {
		cursor_element[0].style.height = '20px';
		cursor_element[0].style.width = '20px';
		ishoveronbtn = true;
	});
	/** @type {HTMLLinkElement} */ (element).addEventListener('mouseout', () => {
		cursor_element[0].style.height = '40px';
		cursor_element[0].style.width = '40px';
		ishoveronbtn = false;
	});
});

socialbtn[3].addEventListener('click', async () => {
	await navigator.clipboard.writeText('mo._mu.54');
	const tooltip = /** @type {HTMLSpanElement} */ (
		document.querySelector('.Discord-link > .tooltiptext')
	);
	tooltip.textContent = 'Copied!';
	setTimeout(() => {
		tooltip.textContent = 'mo._mu.54';
	}, 1000);
});

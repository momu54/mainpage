if (
	/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
		window.navigator.userAgent
	)
) {
	window.location.href = './m';
}

let ishoveronbtn = false;

document.addEventListener('mousemove', (event) => {
	const cursor_element = document.getElementsByClassName('cursorbg');
	console.log(cursor_element[0].style.display);
	if (!cursor_element[0].style.display) cursor_element[0].style.display = 'block';
	cursor_element[0].style.left = event.clientX - (ishoveronbtn ? 10 : 20) + 'px';
	cursor_element[0].style.top = event.clientY - (ishoveronbtn ? 10 : 20) + 'px';
});

const socialbtn = document.getElementsByClassName('socialbtn');
[...socialbtn].forEach((element) => {
	/** @type {HTMLLinkElement} */ (element).addEventListener('mouseenter', () => {
		const cursor_element = document.getElementsByClassName('cursorbg');
		cursor_element[0].style.height = '20px';
		cursor_element[0].style.width = '20px';
		ishoveronbtn = true;
	});
	/** @type {HTMLLinkElement} */ (element).addEventListener('mouseout', () => {
		const cursor_element = document.getElementsByClassName('cursorbg');
		cursor_element[0].style.height = '40px';
		cursor_element[0].style.width = '40px';
		ishoveronbtn = false;
	});
});

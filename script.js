if (
	/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
		window.navigator.userAgent
	)
) {
	window.location.href = './m';
}

document.addEventListener('mousemove', (event) => {
	const cursor_element = document.getElementsByClassName('cursorbg');
	cursor_element[0].style.left = event.clientX - 20 + 'px';
	cursor_element[0].style.top = event.clientY - 20 + 'px';
});

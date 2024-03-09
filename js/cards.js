// my attribute
var k = document.getElementById('k-input'),
	ar = document.getElementById('ar-input'),
	sr = document.getElementById('sr-input'),
	sendButton = document.querySelector('.send'),
	ti = document.querySelector('.ti'),
	tiSpan = document.querySelector('.ti span');

// when click on send button
sendButton.onclick = function () {
	if (ar.value > sr.value) {
		for (var i = 2; i >= 2; i++) {
			var x = Math.floor(sr.value * i),
				y = Math.floor((sr.value * i) - (sr.value / ar.value)),
				newK = x - y ;
			if (k.value === newK) {
				tiSpan.innerHTML = i;
				break;
			}
		}
	}
}

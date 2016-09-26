function yell() {
	var originalText = document.getElementById('text').value;
	var newText = originalText.toUpperCase();
	document.getElementById('newYellText').innerText = newText;
  }
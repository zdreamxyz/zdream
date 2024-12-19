if (window.location.protocol === 'https:') {
	location.replace('http://' + location.href.split('//')[1]);
} else {
  console.log('This page is not using HTTPS.');
}
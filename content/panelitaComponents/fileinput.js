function uploadFile(input) {
	input.closest('.file-input-container').querySelector('.filename').innerHTML = input.files[0].name;
}
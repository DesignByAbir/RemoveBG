// script.js

function removeBackground() {
    const upload = document.getElementById('upload').files[0];
    if (!upload) {
        alert('Please upload an image first.');
        return;
    }

    const formData = new FormData();
    formData.append('image_file', upload);
    formData.append('size', 'auto');

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': 'eK2JSWmAFiRLD1JZx3vC3NsJ'
        },
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const img = document.createElement('img');
        img.src = url;
        const result = document.getElementById('result');
        result.innerHTML = '';
        result.appendChild(img);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

var links = [
    'https://www.architectureartdesigns.com/wp-content/uploads/2020/02/DA-House-by-Bernardo-Bustamante-Arquitectos-in-Quito-Ecuador-1-630x420.jpg',
    'https://www.architectureartdesigns.com/wp-content/uploads/2020/02/DA-House-by-Bernardo-Bustamante-Arquitectos-in-Quito-Ecuador-6-630x420.jpg'
];

$("#submit_btn").on('click', function (event) {
    downloadImages();
});

function downloadImages() {
    var zip = new JSZip();
    var count = 0;
    var zipFilename = 'post_images.zip';
    var imageName = 'image-'

    links.forEach(function (url, index) {
        fetch(url)
            .then(res => res.blob()) 
            .then(blob => {
                let extension = '.' + url.split('.').pop();
                zip.file(imageName + (count + 1) + extension, blob, { binary: true })
                count++;
                if (count === links.length) {
                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                        saveAs(content, zipFilename);
                    });
                }
            });
    });


}



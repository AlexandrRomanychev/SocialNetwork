function FileReader(filename) {
    this.filename = filename;
}

function readFile() {
    var textHtml = '';
    fs.readFile(this.filename, 'utf8', function(err, html) {
        textHtml = html;
    });
    return textHtml;
}
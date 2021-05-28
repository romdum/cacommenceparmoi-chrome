window.onload = function() {
    getXMLSitemapObject('action-sitemap.xml', function(sitemapObject) {
        var urls = sitemapObject.getElementsByTagName('url');
        
        var urlElement = urls[Math.round(Math.random() * (urls.length-1))];

        document.querySelector('#title').textContent = urlElement.getElementsByTagName('image:title')[0].textContent;
        document.querySelector('#link').setAttribute('href', urlElement.getElementsByTagName('loc')[0].textContent);
    });
}

function getXMLSitemapObject(sitemapFile, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if ((this.readyState === 4) && (this.status === 200)) {
            var sitemapContent = this.responseText;
            var sitemapObject = parseXMLSitemap(sitemapContent);
            callback(sitemapObject);
        }
    };
    xhttp.open('GET', sitemapFile, true);
    xhttp.send();
}

function parseXMLSitemap(sitemapContent) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(sitemapContent, 'text/xml');
    return xmlDoc;
}
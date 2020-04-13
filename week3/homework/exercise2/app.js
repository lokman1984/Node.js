const fetch = require('node-fetch');

let url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
fetch(url,{ headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' } //Encode to Base64 format
})
.then(response => response.json())
.then(json => console.log(json))






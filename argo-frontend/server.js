var converter = require('format-converter');
converter.convert("gs://helm-argo/dilse.mp4", "gs://helm-argo/dilse.mp3", function(err) {
    if (err) throw err;
    console.log("done");
});
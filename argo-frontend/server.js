var converter = require('format-converter');
converter.convert("gs://helm-argo/dilse.mp4", "gs://helm-argo/dilse.mp3", function(err) {
    if (err) throw err;
    console.log("done");
});
---
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    iam.gke.io/gcp-service-account: argocd-fleet-admin@helm-argo.iam.gserviceaccount.com
  name: argocd-application-controller
---
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    iam.gke.io/gcp-service-account: argocd-fleet-admin@$PROJECT_ID.iam.gserviceaccount.com
  name: argocd-server
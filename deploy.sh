#! /bin/bash

gcloud container clusters create cluster-asia --zone asia-south2-a  \
--num-nodes 1 --workload-pool helm-argo.svc.id.goog \
--machine-type=e2-standard-4 
gcloud container clusters create cluster-us --zone us-central1-a \
--num-nodes 1 --workload-pool helm-argo.svc.id.goog \
--machine-type e2-standard-4 
gcloud container clusters create cluster-aus --zone australia-southeast1-a \
--num-nodes 1 --workload-pool helm-argo.svc.id.goog \
--machine-type e2-standard-4 

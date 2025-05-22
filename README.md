# sit737-2025-prac10p-
Here’s a **fully explained and professional `README.md` file** tailored to your GitHub repo for SIT737 Task 10.1P:

---

````markdown
# SIT737 Task 10.1P – Monitoring and Visibility

This repository contains the source code and deployment files for a cloud-native Node.js application monitored on **Google Cloud Platform (GCP)** using **Google Kubernetes Engine (GKE)**, **Cloud Monitoring**, and **Cloud Logging**.

---

## 📌 Project Overview

This project demonstrates:
- Containerizing a Node.js app using Docker
- Deploying the app and MongoDB to a GCP Kubernetes cluster
- Exposing the app using a LoadBalancer service
- Configuring monitoring dashboards and alert policies using GCP tools

---

## ⚙️ Technologies Used

- **Node.js** – Server-side JavaScript framework
- **MongoDB** – NoSQL database
- **Docker** – Container platform
- **Kubernetes (GKE)** – Container orchestration
- **Cloud Logging (Stackdriver)** – Centralized application logs
- **Cloud Monitoring (Stackdriver)** – System metrics, dashboards, alerts

---

## 📁 Repository Structure

```bash
.
├── app.js                    # Node.js application
├── package.json              # Node.js dependencies
├── Dockerfile                # Container build instructions
├── deployment.yaml           # Kubernetes deployment for app
├── service.yaml              # LoadBalancer service for app
├── mongo-deployment.yaml     # Kubernetes deployment & service for MongoDB
└── README.md                 # Project documentation
````

---

## 🚀 How to Deploy

### 1. Clone this repo

```bash
git clone https://github.com/krishna-2001/sit737-2025-prac10p-.git
cd sit737-2025-prac10p-
```

### 2. Build & Push Docker Image

```bash
docker build -t gcr.io/automation-pass/monitoring-app .
docker push gcr.io/automation-pass/monitoring-app
```

### 3. Deploy to GKE

Ensure you’ve created your GKE cluster and connected it via:

```bash
gcloud container clusters get-credentials my-gke-cluster --region=australia-southeast1 --project=automation-pass
```

Then apply manifests:

```bash
kubectl apply -f mongo-deployment.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### 4. Access the App

Find the external IP:

```bash
kubectl get service node-app-service
```

Visit in browser:
➡️ `http://<EXTERNAL-IP>`

---

## 📊 Monitoring & Alerts

* Metrics and logs visible in:

  * [Cloud Monitoring](https://console.cloud.google.com/monitoring)
  * [Cloud Logging](https://console.cloud.google.com/logs)

* **Alert Policy:**
  Triggered when CPU usage exceeds `0.8` for over 1 minute on `node-app` container.

---

## ✅ Tasks Completed

* [x] Dockerized Node.js app
* [x] Created and deployed to GKE cluster
* [x] Configured LoadBalancer service
* [x] Set up Cloud Monitoring & Logging
* [x] Created alert for high CPU usage

---

## 🧠 Lessons Learned

* Hands-on experience with GCP's Cloud Operations suite
* Troubleshooting Kubernetes image and deployment issues
* Real-time monitoring with Prometheus-integrated metrics

---

## 👤 Author

kolli krishna kumar
SIT737 – Cloud Native Application Development
Deakin University



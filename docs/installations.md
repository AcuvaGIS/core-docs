# Installation Guide

This guide covers the installation steps for a suite of projects and tools, including CKAN, a web app for Matatu system (Swift Transit), a biodiversity system, and various GIS tools.

## Prerequisites

Before proceeding, ensure you have the following prerequisites installed:

- **Docker:** Install Docker on your system. You can find installation instructions [here](https://docs.docker.com/get-docker/).

- **Kubernetes (K8s):** Set up a Kubernetes cluster. Refer to the official documentation for instructions specific to your environment.

- **GDAL:** Install GDAL, a translator library for raster and vector geospatial data formats. You can install it using your system's package manager or from the [GDAL website](https://gdal.org/).

## CKAN Installation

1. Clone the CKAN repository:

```bash
git clone <CKAN_REPOSITORY_URL>
cd <CKAN_PROJECT_FOLDER>
```


2. Set up the CKAN environment:

```bash
docker-compose up -d
```


3. Access CKAN at `http://localhost:5000` and follow the on-screen instructions to complete the setup.

## Swift Transit (Matatu System) Installation

1. Clone the Swift Transit repository:

```bash
git clone <SWIFT_TRANSIT_REPOSITORY_URL>
cd <SWIFT_TRANSIT_PROJECT_FOLDER>
```
2. Build and run the web app:
```bash
docker-compose up -d
```


3. Access the Matatu system at `http://localhost:8080` and configure it as needed.

## Biodiversity System Installation

1. Clone the Biodiversity System repository:

```bash
git clone <BIODIVERSITY_REPOSITORY_URL>
cd <BIODIVERSITY_PROJECT_FOLDER>
```


2. Install dependencies and set up the environment:

```bash
make setup
```


3. Run the biodiversity system:

```bash
make run
```


4. Access the system at `http://localhost:8000` and follow the provided documentation for further configuration.

## Prometheus Setup

1. Configure Prometheus to scrape metrics from your services by adding job configurations to your `prometheus.yml` file. For example:

```yaml
- job_name: Matatu-System
  static_configs:
    - targets: ['localhost:8080']
- job_name: Biodiversity-System
  static_configs:
    - targets: ['localhost:8000']
```

2. Start Prometheus with your updated configuration file:
```bash
prometheus --config.file=prometheus.yml
```

3. Access Prometheus at http://localhost:9090 to monitor your services.

**CKAN Integration & Customization**
In your CKAN instance, configure data sources to include data from the Matatu system and the Biodiversity system. Refer to the CKAN documentation for integration instructions.

Set up data sources to point to the respective Prometheus instances for monitoring and data collection.



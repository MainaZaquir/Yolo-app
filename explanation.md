YOLO E-commerce Platform Deployment Documentation
This documentation provides step-by-step instructions to deploy the YOLO e-commerce platform, which utilizes the YOLO object detection algorithm, Docker containers, Ansible, and Google Kubernetes Engine (GKE). It covers setting up the application locally, Dockerizing the client and backend, orchestrating with Docker Compose, deploying to a Vagrant virtual machine using Ansible, and deploying to GKE.

Table of Contents
Local Deployment
Testing the Application Locally
Docker Deployment
Dockerizing the Client
Dockerizing the Backend
Orchestrating with Docker Compose
Building and Running Containers
Testing Data Persistence
Pushing Docker Images to Docker Hub
Deployment to Vagrant VM with Ansible
Prerequisites
Vagrant Configuration
Ansible Playbook
Running the Playbook
Deployment to GKE
Prerequisites
Git Clone
Execution
Setting up StatefulSet for MongoDB
Setting up Backend Application
Setting up Client Application
Accessing the Application
Local Deployment
Testing the Application Locally
Follow the instructions provided in the README.md file to test the YOLO e-commerce website locally.
Access the e-commerce website on port 3000 (http://localhost:3000) and verify its functionality.
Test the MongoDB database on port 5000 and ensure the connection is successful.
Docker Deployment
Dockerizing the Client
Create a Dockerfile for the client image to containerize the client application.
Define the necessary dependencies, configurations, and commands in the Dockerfile.
Build the Docker image for the client application.
Dockerizing the Backend
Create a Dockerfile for the backend image to containerize the backend application.
Specify the required dependencies, configurations, and commands in the Dockerfile.
Build the Docker image for the backend application.
Orchestrating with Docker Compose
Create a docker-compose.yml file to define the services and their configurations.
Include the client and backend services, and specify any necessary environment variables, volumes, and ports.
Pull the MongoDB image for the backend's database.
Building and Running Containers
Use the docker-compose up command to build and run the containers.
Monitor the output for any errors or issues during the container creation process.
Address any problems encountered, ensuring that the containers run without exiting prematurely.
Testing Data Persistence
Access the e-commerce website at http://localhost:3000.
Perform various actions, such as adding a product, to test the functionality.
Stop the containers using sudo docker-compose down.
Restart the containers using sudo docker-compose up and verify that the previously added data persists.
Pushing Docker Images to Docker Hub
Push the Docker images for the client and backend applications to Docker Hub.
Follow the necessary steps and commands to tag and push the images.
Deployment to Vagrant VM with Ansible
Prerequisites
Ensure that Vagrant is installed on your local machine or control node.
Install Ansible on your local machine or control node.
Install VirtualBox and disable secure booting in the boot menu.
Vagrant Configuration
Configure the Vagrant file in the root directory of the YOLO application.
Specify the virtual machine image, hostname, private network IP, SSH insert key settings, and memory allocation.
Configure the Ansible provisioner to run the playbook.
Ansible Playbook
Create a playbook.yaml file to define the deployment tasks.
Set the hosts to "all" to target the virtual machine created by Vagrant.
Set become to true to execute commands as sudo.
Define pre-tasks to update the apt cache at regular intervals.
Specify var_tasks to reference the vars.yml file for declaring variables.
Define tasks to configure the VM environment, install dependencies, Docker, Docker Compose, and MongoDB.
Running the Playbook
Run the vagrant up command to create the virtual machine.
Use vagrant provision to initiate the playbook execution.
Verify that the playbook tasks are executed successfully and the application is deployed to the virtual machine.
Deployment to GKE
Prerequisites
Ensure Docker is installed.
Have a Google Cloud Platform (GCP) account with an active credit card.
Git Clone
Clone the YOLO repository to your local machine using the git clone command.
Execution
Navigate to the YOLO project folder in the terminal.
Run gcloud init to log in to the GCP CLI.
Use kubectl config get-contexts to view the available clusters.
Select the desired cluster context using kubectl config use-context <name of your cluster>.
Setting up StatefulSet for MongoDB
Create a workspace namespace for the pods and services: kubectl create namespace development.
Create a persistent volume claim: kubectl create -f manifest/mongodb/pvc.yaml -n development.
Create a storage class: kubectl create -f manifest/mongodb/scn.yaml -n development.
Set up a priorityClass: kubectl apply -f manifest/mongodb/priorityclass.yaml -n development.
Create the MongoDB StatefulSet: kubectl create -f manifest/mongodb/StatefulSet.yaml -n development.
Expose the MongoDB pod externally on port 27017: kubectl apply -f manifest/mongodb/service.yaml -n development.
Setting up Backend Application
Deploy the backend pod: kubectl create -f manifest/backend/yolobackdep.yaml -n development.
Expose the backend pod externally on port 5000: kubectl apply -f manifest/backend/service.yaml -n development.
Setting up Client Application
Deploy the client pod: kubectl create -f manifest/client/yoloclientdep.yaml -n development.
Expose the client pod externally on port 3000: kubectl apply -f manifest/client/service.yaml -n development.
Accessing the Application
Run kubectl get svc -n development to obtain the IP addresses assigned to the client and backend services.
Access the YOLO e-commerce platform by entering the IP address of the client service in a web browser.

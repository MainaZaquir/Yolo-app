# First step
I Went through the instructions in the README.md file and tested it to see if the application workeed, which it did very well actually on port 3000 for the ecomerce yolo website and port 5000 for the mongo database. 

# Second stepp
I created a Dockerfile for the client image that created a docker container for it to run in then I created a Dockerfile for the backend image that created a docker comtainer for  it to run in. 

# Third step
I created a docker-compose.yml file to orchestrate the e-commerce platform. In this file, I was able to pull a mongodb image as the backend required a mongodb database. 

# Fourth step
I ran the docker compose up command to build images running in them. I noticed that my client container exited without any errors before the deployment server started.

# Fifth step
I added tty: true  >> this comand ensured that my container didn't exit but instead kept running.My development server could start with no errors now. 

# Sixth step
I was able to access the website on *http://localhost:3000* where I tested my connections by adding a product, the product was added succesfully. I then stopped my containers and run *sudo docker compose down*  to stop and remove my containers. I then ran *sudo docker compose up* to create new containers from my images and when I accessed the site again, I was able to sseethe image That I had added earlier which meant that my volumes were set well and my data endured. 

# Seventh step
I pushed the docker images <client image & backend image> to docker hub and commited my changes to github


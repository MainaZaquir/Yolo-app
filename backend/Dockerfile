FROM python:3.9-slim-buster

# Setting the working directory to /usr/src/yolo
WORKDIR /usr/src/yolo

# Copying the requirements file into the container and install the dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copying the rest of the application code into the container
COPY . .

# Setting the environment variables
ENV PORT=5000
ENV MONGODB_URI=mongodb://mongo_db:27017
ENV DB_NAME=yolomy

# Exposing port 5000 to the outside world
EXPOSE 5000

# Starting the application
CMD [ "python", "app.py" ]

# Use a base image with Java installed
FROM openjdk:11

# Set the working directory in the container
WORKDIR /app

# Copy the project files to the container
COPY . /app

# Build the application (replace <build_command> with the actual build command for your Java project)
RUN ./gradlew build

# Specify the command to run your application (replace <java_command> with the actual command to start your Java application)
CMD ["npm" "start"]

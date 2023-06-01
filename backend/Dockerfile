FROM python:3.9-slim-buster


WORKDIR /usr/src/yolo


COPY requirements.txt ./


RUN pip install --no-cache-dir -r requirements.txt


COPY . .


ENV PORT=5000
ENV MONGODB_URI=mongodb://mongo_db:27017
ENV DB_NAME=yolomy


EXPOSE 5000


CMD [ "python", "app.py" ]

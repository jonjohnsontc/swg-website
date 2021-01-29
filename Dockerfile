FROM python:3.8-buster

WORKDIR /app

COPY . /app

RUN pip3 install -r requirements.txt

ENTRYPOINT [ "python3", "server.py" ]
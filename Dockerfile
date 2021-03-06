FROM python:3.9.4-buster

WORKDIR /app

COPY . .

RUN pip3 install -r requirements.txt

ENTRYPOINT [ "python3", "server.py"]

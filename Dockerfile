FROM python:3.9.4-buster

WORKDIR /app

COPY . .

RUN pip3 install -r requirements.txt

ENTRYPOINT [ "gunicorn", "--bind", "0.0.0.0:8000", "server:app" ]

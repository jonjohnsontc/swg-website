FROM theasp/clojurescript-nodejs:latest as build

# Set our working directory
WORKDIR /usr/src/app

# Copy project
COPY . /usr/src/app/

# Install Clojure deps, install node deps, compile app
RUN lein with-profile prod do deps
RUN npm install

#Seeing if this allows shadow to work here.
RUN npm install -g react

# Clean and run app
RUN lein release

# Copy files from built dir to new nginx container and serve
FROM nginx:latest as serve
COPY --from=build /usr/src/app/resources/public /usr/share/nginx/html

RUN ["nginx"]
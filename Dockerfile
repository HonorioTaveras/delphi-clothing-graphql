# What image do you want to start building on?
FROM node:14.2.0

# Make a folder in your image where your app's source code can live
RUN mkdir -p /delphi-clothing-app

# Tell your container where your app's source code will live
WORKDIR /delphi-clothing-app

# What source code do you want to copy, and where to put it?
COPY . /delphi-clothing-app

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3333

# How do you start your app?
CMD [ "npm", "run", "start" ]

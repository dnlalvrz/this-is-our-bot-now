#
# TIOBN Discord Bot
#
# https://github.com/dnlalvz/this-is-out-bot-now
#

# Pull base image (node 17)
FROM node:latest

# install git and npm
RUN apt-get update && apt-get install -y software-properties-common g++ make git

# Upgrade
RUN apt-get upgrade -y

# create node user
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN chown -R node:node /opt/app
USER node

# install the application
RUN git clone hhttps://github.com/dnlalvz/this-is-out-bot-now.git . && \
    # replace with first tag
    git checkout tags/0.0.1 && \
    # rm package-lock.json && \
    npm install && \
    # Uncomment below as necessary
    # npm run postinstall && \
    # npm run env && \
    npm audit fix

# To change 
EXPOSE 8080

# Todo 
# CMD ["node", "location-of-server.js"]
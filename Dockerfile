FROM cypress/included

COPY ./.github ./.github
COPY ./cypress ./cypress
COPY ./public ./public
COPY ./src ./src
COPY ./cypress.config.js ./cypress.config.js
COPY ./db.json ./db.json
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json
COPY ./routes.json ./routes.json

RUN npm install
RUN npx cypress run

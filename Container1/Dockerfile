FROM node:18-alpine as builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]

# docker buildx build -t devsorakrit/ct-519_workshop2:1 --platform=linux/amd64,linux/arm64 . --push 
# docker buildx build -t devsorakrit/ct-519_workshop2:2 --platform=linux/amd64,linux/arm64 . --push 
# docker run -d -p 80:80 --name ct-519_workshop2 devsorakrit/ct-519_workshop2:1
# docker run -d -p 8000:8000 --name ct-519_workshop2 devsorakrit/ct-519_workshop2:2
ARG ALPINE_TAG
ARG CI_REGISTRY

FROM ${CI_REGISTRY}/hub.docker.com/library/node:18-alpine as builder

ARG project

ENV PROJECT=${project}

WORKDIR /opt/${PROJECT}
COPY . /opt/${PROJECT}/

RUN node --version
RUN ls -la /opt/${PROJECT}
RUN yarn && yarn build
RUN ls -la /opt/${PROJECT}

FROM ${CI_REGISTRY}/utils/alpine-utils:${ALPINE_TAG}-nginx

ARG project

ENV PROJECT=${project}

COPY --from=builder /opt/${PROJECT}/build /opt/${PROJECT}
#COPY nginx-config/nginx.conf /etc/nginx/nginx.conf
#COPY nginx-config/default.conf /etc/nginx/conf.d/default.conf

#RUN rm -rf /opt/${PROJECT}/.git && rm -rf /opt/${PROJECT}/Dockerfile.ugb && rm -rf /opt/${PROJECT}/nginx-config

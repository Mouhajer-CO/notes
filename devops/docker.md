# Docker CLI

Parameter `<container>` can be container id (if distinct use 2/3 digits) or name

| Example                             | Description                                      |
| ----------------------------------- | ------------------------------------------------ |
| `docker ps`                         | List running containers                          |
| `docker ps -a`                      | List all containers                              |
| `docker ps -s`                      | List running containers (with CPU / memory)      |
| `docker images`                     | List all images                                  |
| `docker volume ls`                  | Lists all volumes.                               |
| `docker exec -it <container>  /bin/bash` | Connecting to container                     |
| `docker logs <container>`           | Shows container's console log                    |
| `docker stop <container>`           | Stop a container                                 |
| `docker restart <container>`        | Restart a container                              |
| `docker rm <container>`             | Remove a container                               |
| `docker port <container>`           | Shows container's port mapping                   |
| `docker top <container>`            | List processes                                   |
| `docker kill <container>`           | Kill a container                                 |
| `docker inspect <container>`        | Inspecting Containers                            |
| `docker events <container>`         | Get real time events from the server                                |
| `docker stats <container>`          | Live data stream for running containers          |
| `docker diff <container>`           | Lists the changes made to a container.           |

```shell
# Create and run a container in background
docker run -d -p 80:80 docker/getting-started

- `-d` - Run the container in detached mode
- `-p 80:80` - Map port 80 to port 80 in the container
- `docker/getting-started` - The image to use

# Create and run a container in foreground
docker run -it -p 8001:8080 --name my-nginx nginx

- `-it` - Interactive bash mode
- `-p 8001:8080` - Map port 8001 to port 8080 in the container
- `--name my-nginx` - Specify a name
- `nginx` - The image to use
```

## Docker Containers

| Examples               | Description                             |
| ------------------------- | ----------------------------------- |
| `docker start my-nginx`   | Starting                            |
| `docker stop my-nginx`    | Stopping                            |
| `docker restart my-nginx` | Restarting                          |
| `docker pause my-nginx`   | Pausing                             |
| `docker unpause my-nginx` | Unpausing                           |
| `docker wait my-nginx`    | Blocking a Container                |
| `docker kill my-nginx`    | Sending a SIGKILL                   |
| `docker attach my-nginx`  | Connecting to an Existing Container |

```shell
# Docker stats on container (nginx) and getting output in json
$ docker stats nginx --no-stream --format "{{ json . }}"
{ "BlockIO":"0B / 13.3kB", "CPUPerc":"0.03%", "Container":"nginx", "ID":"ed37317fbf42", "MemPerc":"0.24%", "MemUsage":"2.352MiB / 982.5MiB", "Name":"nginx", "NetIO":"539kB / 606kB", "PIDs":"2" }

$ docker stats --format "{{.Container}}: {{.CPUPerc}}"
09d3bb5b1604: 6.61%
9db7aa4d986d: 9.19%
3f214c61ad1d: 0.00%

# Renaming a Container
docker rename my_container my_new_container

# Updating a Container
docker update --cpu-shares 512 -m 300M my-nginx
```

### Creating

```yaml
docker create [options] IMAGE
  -a, --attach               # attach stdout/err
  -i, --interactive          # attach stdin (interactive)
  -t, --tty                  # pseudo-tty
      --name NAME            # name your image
  -p, --publish 5000:5000    # port map (host:container)
      --expose 5432          # expose a port to containers
  -P, --publish-all          # publish all ports
      --link container:alias # linking
  -v, --volume `pwd`:/app    # mount (absolute paths needed)
  -e, --env NAME=hello       # env vars
```

```shell
docker create --name my_redis --expose 6379 redis:3.0.2
```

## Docker Images

| Manipulating - Examples                          | Description                     |
| ---------------------------------- | ------------------------------- |
| `docker images`                    | Listing images                  |
| `docker rmi nginx`                 | Removing an image               |
| `docker load < ubuntu.tar.gz`      | Loading a tarred repository     |
| `docker load --input ubuntu.tar`   | Loading a tarred repository     |
| `docker save busybox > ubuntu.tar` | Save an image to a tar archive  |
| `docker history`                   | Showing the history of an image |
| `docker commit nginx`              | Save a container as an image.   |
| `docker tag nginx eon01/nginx`     | Tagging an image                |
| `docker push eon01/nginx`          | Pushing an image                |

```shell
# Building Images
docker build .
docker build github.com/creack/docker-firefox
docker build - < Dockerfile
docker build - < context.tar.gz
docker build -t eon/my-nginx .
docker build -f myOtherDockerfile .
curl example.com/remote/Dockerfile | docker build -f - .
```

## Docker Networking

```shell
# Creating Networks
docker network create -d overlay MyOverlayNetwork

docker network create -d bridge MyBridgeNetwork

docker network create -d overlay \
  --subnet=192.168.0.0/16 \
  --subnet=192.170.0.0/16 \
  --gateway=192.168.0.100 \
  --gateway=192.170.0.100 \
  --ip-range=192.168.1.0/24 \
  --aux-address="my-router=192.168.1.5" \
  --aux-address="my-switch=192.168.1.6" \
  --aux-address="my-printer=192.170.1.5" \
  --aux-address="my-nas=192.170.1.6" \
  MyOverlayNetwork
```

```shell
# Removing a network
docker network rm MyOverlayNetwork

# Listing networks
docker network ls

# Getting information about a network
docker network inspect MyOverlayNetwork

# Connecting a running container to a network
docker network connect MyOverlayNetwork nginx

# Connecting a container to a network when it starts
docker run -it -d --network=MyOverlayNetwork nginx

# Disconnecting a container from a network
docker network disconnect MyOverlayNetwork nginx
```

## Docker Hub and Clean Up

| Docker Syntax               | Description                         |
| --------------------------- | ----------------------------------- |
| `docker search busybox` | Search Docker Hub for images.       |
| `docker pull [OPTIONS] NAME[:TAG\|@DIGEST]` | Downloads an image from docker hub. |
| `docker login [OPTIONS] [SERVER]` | Login to a Registry          |
| `docker logout [SERVER]` | Log out from a registry          |
| `docker push [OPTIONS] NAME[:TAG]` | Upload an image to a registry.     |

```shell
# displays images with a name containing ‘busybox’, at least 3 stars
docker search --filter=stars=3 --no-trunc busybox

# docker image pull (or the docker pull shorthand)
docker image pull debian:bullseye

# All tags of the registry-host:5000/myname/myimage image are pushed
docker image push --all-tags registry-host:5000/myname/myimage
```

| Example                             | Description             |
| ----------------------------------- | ----------------------- |
| `docker stop -f $(docker ps -a -q)` | Stopping all containers |
| `docker rm -f $(docker ps -a -q)`   | Removing all containers |
| `docker rmi -f $(docker images -q)` | Removing all images     |

```shell
# Remove all dangling (not tagged and is not associated with a container)
docker image prune

# Remove all images which are not used by existing containers
docker image prune -a
```

```shell
# Stop all running containers
docker stop $(docker ps -a -q)

# Delete stopped containers
docker container prune
```

```shell
# Remove all unused containers, networks, images (both dangling and unreferenced)
docker system prune

# Additionally, remove all unused images not just dangling ones
docker system prune -a

# Additionally, prune volumes
docker system prune -a --volumes
```

```shell
# Remove all volumes not used by at least one container
docker volume prune
```

## Terminology

For more details [glossary](https://docs.docker.com/glossary/)

| Term                             | Definition             |
| ----------------------------------- | ----------------------- |
| base image | A base image has no parent image specified in its Dockerfile. It is created using a Dockerfile directive. |
| build | build is the process of building Docker images using a Dockerfile. The build uses a Dockerfile and a “context”. The context is the set of files in the directory in which the image is built. |
| cgroups | cgroups is a Linux kernel feature that limits, accounts for, and isolates the resource usage (CPU, memory, disk I/O, network, etc.) of a collection of processes. Docker relies on cgroups to control and isolate resource limits. |
| Compose | Compose is a tool for defining and running complex applications with Docker. With Compose, you define a multi-container application in a single file, then spin your application up in a single command which does everything that needs to be done to get it running. |
| container | A container is a runtime instance of a docker image. Itconsists of: a docker image, an execution environment and a standard set of instructions. |
| Docker | The term Docker can be refered as: the **Docker project** as a whole, which is a platform for developers and sysadmins to develop, ship, and run applications or the **docker daemon** process running on the host which manages images and containers (also called Docker Engine). |
| Docker Hub | The Docker Hub is a centralized resource for working with Docker and its components. Used as, registry to host Docker images, user authentication, security vulnerability scanning ... |
| Dockerfile | A Dockerfile is a text document that contains all the commands you would normally execute manually in order to build a Docker image. Docker can build images automatically by reading the instructions from a Dockerfile. |
| images | Docker images are the basis of containers. An image typically contains a union of layered filesystems stacked on top of each other. An image does not have state and it never changes. - An Image is an ordered collection of root filesystem changes and the corresponding execution parameters for use within a container runtime. |
| layer | In an image, a layer is modification to the image, represented by an instruction in the Dockerfile. Layers are applied in sequence to the base image to create the final image. When an image is updated or rebuilt, only layers that change need to be updated, and unchanged layers are cached locally. This is part of why Docker images are so fast and lightweight. The sizes of each layer add up to equal the size of the final image. |
| Volume | Volumes are designed to persist data, independent of the container’s life cycle. Docker therefore never automatically deletes volumes when you remove a container, nor will it "garbage collect" volumes that are no longer referenced by a container. -  A volume is a specially-designated directory within one or more containers that bypasses the Union File System.  |

## Docker compose CLI

- `docker compose --help`

```yml
version: "3"

services:

    redis:
        image: redis:alpine
        networks:
            - frontend

    db:
        image: postgres:15-alpine
        environment:
            POSTGRES_USER: "postgres"
            POSTGRES_PASSWORD: "postgres"
        volumes:
            - db-data:/var/lib/postgresql/data
        networks:
            - backend

    web1:
        image: image/web1
        ports:
            - 8080:80
        networks:
            - frontend

    web2:
        image: image/web2
        ports:
            - 8081:80
        networks:
            - backend

    worker:
        image: image/backend
        networks:
            - frontend
            - backend

networks:
    frontend:
    backend:

volumes:
    db-data:
```

## Links

- [docker](https://docs.docker.com/get-started/)
- [docker compose](https://docs.docker.com/compose/reference/)
- Dockers random names [namesgenerator](https://pkg.go.dev/github.com/docker/docker/pkg/namesgenerator) and [names-generator.go](https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go)

#!/bin/bash

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
 echo "$BRANCH"
if [[ "$BRANCH" == "production" ]]; then
 echo -e "Stage 1: Pull code from branch production\n"
  git pull origin production

  echo -e "\nStage 2: Remove unused instance from docker\n"
   docker system prune -a -f
 echo -e "\nStage 3: Build app from docker compose\n"
 docker compose up -d --build



  echo "build production done"
fi

if [[ "$BRANCH" == "dev" ]]; then
 echo -e "Stage 1: Pull code from branch dev\n"
  git pull origin dev
 echo -e "\nStage 2: Remove unused instance from docker\n"
   docker system prune -a -f
 echo -e "\nStage 3: Build app from docker compose\n"
 docker compose up -d --build


  echo "build dev done"
fi

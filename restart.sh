#!/bin/bash
set -e
PATH="/usr/local/bin:$PATH"

pm2 kill;
for (( c=3001; c <= 3004; c++ ))
do
  echo $c;
  PORT=$c pm2 start /var/www/express/index.js -f;
done

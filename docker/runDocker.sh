#!/bin/bash

docker run --name aaa --rm -p 8080:8080 -it temp/nikita_monitoring:1.0 bash -c "cd /appl && ls -la && ./start.sh"

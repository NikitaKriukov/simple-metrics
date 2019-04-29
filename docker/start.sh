#!/bin/bash

# the file is indended to be copied inside of the "appl" directory
# It should be run there. Otherwise the server can't see static resources

java -cp "./restMonitoring.jar:./libs/*" nikita.simple.appl.RestServer


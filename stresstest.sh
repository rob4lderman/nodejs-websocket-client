#!/bin/sh

mkdir -p logs

for x in `seq 1 50`; do
    echo "node wsclient.js &"
    node wsclient.js > logs/wsclient.$x.log &
done



#!/bin/sh
echo -e "test30"
aws s3 sync "./asset" "s3://brick-web/ds/$1"

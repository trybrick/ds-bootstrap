#!/bin/sh
echo -e "test"
aws s3 sync "./asset" "s3://brick-web/ds/$1"

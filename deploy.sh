#!/bin/sh
echo -e "test7"
aws s3 sync "./asset" "s3://brick-web/ds/$1"

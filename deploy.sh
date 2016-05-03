#!/bin/sh
echo -e "test32"
aws s3 sync "./asset" "s3://brick-web/ds/$1"

#!/bin/sh
echo -e "test35"
s3cmd sync "./asset" "s3://brick-web/ds/$1"

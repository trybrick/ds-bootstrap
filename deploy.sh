#!/bin/sh
echo -e "test42"
/usr/local/bin/aws s3 sync "./asset" "s3://brick-web/ds/$1"

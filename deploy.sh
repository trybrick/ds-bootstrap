#!/bin/sh
echo -e "test43"
/usr/local/bin/aws s3 sync "./asset" "s3://brick-web/ds/$1"

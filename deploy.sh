#!/bin/sh
echo -e "test43"
yum install s3cmd
s3cmd sync "./asset" "s3://brick-web/ds/$1"

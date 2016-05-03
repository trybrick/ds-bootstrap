#!/bin/sh
echo -e "test34"
s3cmd sync "./asset" "s3://brick-web/ds/$1"

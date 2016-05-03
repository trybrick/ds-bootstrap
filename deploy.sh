#!/bin/sh

aws s3 cp "./asset" "s3://brick-web.s3-website-us-west-2.amazonaws.com/ds/$1"

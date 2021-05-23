#!/bin/bash

# This will take a markdown post file and submit it to the application's 
# SQLite database. 
# Args:
# $1 - File location (string)
# $2 - Post type (Either "about" or "blog")

export app_dir=$(pwd)
export PYTHONPATH=$PYTHONPATH:/$app_dir/
python3 ./scripts/make_post.py $1 $2 
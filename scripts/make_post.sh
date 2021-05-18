#!/bin/bash

export app_dir=$(pwd)
export PYTHONPATH=$PYTHONPATH:/$app_dir/
python3 ./scripts/make_post.py $1 $2 
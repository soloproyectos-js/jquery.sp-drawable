#!/bin/bash
# This script creates the distribution files. Usage:
# ./make-dist.sh

# remove dist files 
rm -rf dist/*

# compresses JavaScript files
cat \
    src/jquery.sp-drawable.js \
| uglifyjs \
    --compress \
    --mangle \
    --preamble "/*! jQuery.spDrawable v0.1.0 | Copyright (c) 2015 Gonzalo Chumillas | https://github.com/soloproyectos-js/jquery.sp-drawable/blob/master/LICENSE */" \
    -o dist/jquery.sp-drawable.min.js
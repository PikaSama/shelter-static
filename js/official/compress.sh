#!/bin/bash
for i in *.js
do
  terser $i -c -m -o ${i%.js}.min.js
done

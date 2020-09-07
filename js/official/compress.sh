#!/bin/bash
for i in customization-*.js
do
terser $i -c -m -o ${i%.js}.min.js
done

#!/bin/bash
rm *.min.js
for i in *.js
do
  terser $i -c -m -o ${i%.js}.min.js
done

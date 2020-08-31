#!/bin/bash
cd ..
cp -r /storage/emulated/0/Documents/termux/shelter-images/static shelter-images/
if [ $? -eq 1 ];then
  echo Error.
  else
  echo Done.
fi

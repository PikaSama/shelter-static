#!/bin/bash
cd ..
cp -r shelter-images/static /storage/emulated/0/Documents/termux/shelter-images/
if [ $? -eq 1 ];then
  echo Error.
  else
  echo Done.
fi

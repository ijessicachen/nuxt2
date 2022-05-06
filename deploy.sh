# /bin/bash

# bash script

read comment

dev="/Users/jessicachen/nuxt2"
target="/Users/jessicachen/ijessicachen.github.com"

cd $dev
npm run generate

rm -rvf $target/_nuxt
cp -vrf $dev/dist/* $target/

cd $target
git add .
git commit -m "$comment" .
git push

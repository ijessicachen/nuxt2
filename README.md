# nuxt2
Sadly the calculator still sucks <br>
Full format revamp coming soon!
<br><br>

## General TO-DO
- **HIGH PRIORITY**
    - Figure out how to push on replit (a lot of games need fixing)
    - Update this website to be with NuxtHub
- create a table of contents
- get my tetris working
- get my calculator working
- make the home page pretty

## run on local
```bash
npm run dev
```

# NOTES

## copy to local

*using SQL link thing* <br>
clone [ijessicachen/nuxt2](https://github.com/ijessicachen/nuxt2) to local
clone [ijessicachen/ijessicachen.github.com](https://github.com/ijessicachen/ijessicachen.github.com) to local

```bash
git clone git@github.com:ijessicachen/nuxt2.git
git clone git@github.com:ijessicachen/ijessicachen.github.com.git
```


## deploy memo

figure out where you are and change to the correct place

```vim
"% for current file, :p for full path, :h for head, to exclude the current file
echo expand("%:p:h") 
```
```bash
cd ~
```

test deploy
```bash
cd ~/touchgrass/nuxt2; ./deploy.sh

cd ~/touchgrass/nuxt2; git remote -v 
cd ~/touchgrass/nuxt2; git remote set-url origin git@github.com:ijessicachen/nuxt2.git
cd ~/touchgrass/ijessicachen.github.com; git remote -v
cd ~/touchgrass/ijessicachen.github.com; git remote set-url origin git@github.com:ijessicachen/ijessicachen.github.com.git

npm -version
nvm -version
```

Error: error:0308010C:digital envelope routines::unsupported
```bash
node --version
nvm install 16.16.0
```
it seems v 10.4.0 works too?


# General things to help 

find my IP
```bash
ifconfig | grep 192
```
start the journal
```bash
ls -la ~/nuxt2
mkdir ~/nuxt2/journal
```

byobu
```bash
#check if already have package
brew search byobu
brew install byobu
```

moving files
```bash
#check if destination right and find location of file
ls -la ~/nuxt2
ls -la ~/Downloads/*.png
-rw-r--r--@ 1 jessicachen  staff      7129 24 Jul 11:02 /Users/jessicachen/Downloads/

# source then destination
cp -v ~/Downloads/headshot\ copy.png ~/nuxt2/assets/testhead.png
cp -v ~/Downloads/NicePng_white-arrow-png_81725.png ~/nuxt2/assets/testhead.png

```

Check what's changed with
```vim
G diff .
G diff package.json
```

## Testing

To test things with nuxt.js.
Currently this is especially pertaining to the WorkoutAI Project.



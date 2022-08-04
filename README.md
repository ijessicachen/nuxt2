# nuxt2
Sadly the calculator still sucks <br>
Full format revamp coming soon!

# NOTES
## run on local
```bash
npm run dev
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

*using SQL link thing*
clone [ijessicachen/nuxt2](https://github.com/ijessicachen/nuxt2) to local
clone [ijessicachen/ijessicachen.github.com](https://github.com/ijessicachen/ijessicachen.github.com) to local

```bash
git clone git@github.com:ijessicachen/nuxt2.git
git clone git@github.com:ijessicachen/ijessicachen.github.com.git
```

test deploy
```bash
cd ~/nuxt2; ./deploy.sh

cd ~/nuxt2; git remote -v 
cd ~/nuxt2; git remote set-url origin git@github.com:ijessicachen/nuxt2.git
cd ~/ijessicachen.github.com; git remote -v
cd ~/ijessicachen.github.com; git remote set-url origin git@github.com:ijessicachen/ijessicachen.github.com.git

npm -version
nvm -version
```

Error: error:0308010C:digital envelope routines::unsupported
```bash
node --version
nvm install 16.16.0
```

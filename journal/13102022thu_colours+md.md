# Colour stuff
- decided theme was too much unecessary work
- somehow added a top bar
- will instead use just a lightmod darkmode button

#Using markdown-it in Nuxt2

Steps:

* npm install markdown-it

```bash
ls -la ~/rd/nuxt2
cd ~/rd/nuxt2; npm install markdown-it raw-loader
```

* add raw-loader to **nuxt.config.it**

```vim
"edit the new file in a new vertical window 
vert new ~/nuxt2/nuxt.config.js
```

* create a testing vue page _pages/testmd/index.vue_

```bash
#create a new folder under pages folder
ls -la ~/nuxt2/pages
mkdir ~/nuxt2/pages/testmd
```
```vim
" create new index.vue
e ~/nuxt2/pages/testmd/index.vue
```

* create a testing markdown file _test.md_
```vim
" create new index.md
e ~/nuxt2/pages/testmd/index.md
```

* add js inside new vue page

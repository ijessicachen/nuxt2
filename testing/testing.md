Hopfully this existing won't completely destroy the main stuff in this repo.
Have fun testing!

Refer to *20250101-Mongo_Nuxt_Get_Started.md* (in dad's repo) for more information.

Move everything relevant in the tmp folder to this one.
```bash
# Create a mongo-nuxt folder

# Change to known directory
cd ~/touchgrass
pwd
# move items
mv -v /tmp/mongo-nuxt/* ./nuxt2/testing/mongo-nuxt/
```

There are some changes you need to make to commands in the other file that you should change here.

### Docker compose commands
```bash
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose ls
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose build 
# create command is deprecated, will be removed soon.
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose up --no-start
# up will run the serivces in
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose up
# start will run the services in background
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose start
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose restart
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose restart node
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose stop

cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose ps
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose down 
```

how to check logs
```bash
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose logs -f
```

remove all containers
```bash
cd ~/touchgrass/nuxt2/testing/mongo-nuxt; docker compose down --rmi all
```

### Create Nuxt.js project 
The following line **is not working rn** so try to fix it later.
```bash
# create a start up Nuxt.js project
docker exec -it mongo-nuxt-node-1 npx nuxi@latest init mongo-nuxt

# review the folder structure
ls -la ~/touchgrass/nuxt2/testing/mongo-nuxt/
```


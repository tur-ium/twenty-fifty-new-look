# DECC 2050 Calculator

Front end for [DECC 2050 calculator](https://github.com/decc/twenty-fifty)

## Development

### Dependencies

* Requires ruby 2.2.2
* ~~Fontcustom has its own dependencies. See [github](https://github.com/FontCustom/fontcustom)~~ 
<-- TODO: Remove, as no longer maintained

### Setup
#### Using Docker on Windows
1. Set up Docker for Windows and configure WSL following this guide: https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly
In WSL:

2. ```git clone https://github.com/tur-ium/twenty-fifty-new-look ```

3. ```cd twenty-fifty-new-look```

4. Install Ruby version manager following these instructions https://rvm.io/rvm/install

5. ```docker image build -t twenty-fifty:1.0 .``` #This builds the docker image

6. ```docker container run --publish 8080:80 --detach twenty-fifty twenty-fifty:1.0```

7. Open a web browser and navigate to ```http://localhost:8080```

You should see something like this in the browser:

## Troubleshooting

* When starting the docker instance, if you get an error like ```Bind for 0.0.0.0:8000 failed: port is already allocated```, try using a different port (change 8080 to another number like 9292 in the command)

* There may be other ways of setting it up, please let me know if you manage to get them working

### Building

In source/javascripts/config.js set `apiUrl`, and `siteUrl`.
Then `middleman build`.

resulting code will be in `./build`. This is the code to deploy.

### Icon font

Built with font custom gem. Svg files go in `source/icons`, run `rake fonts` to
compile.


# DECC 2050 Calculator

Front end for [DECC 2050 calculator](https://github.com/decc/twenty-fifty)

## Development

## Dependencies

* Requires ruby 2.2.2
* ~~Fontcustom has its own dependencies. See [github](https://github.com/FontCustom/fontcustom)~~ 
<-- TODO: Remove, as no longer maintained

## Setup
### Using Docker on Windows
1. Set up Docker for Windows and configure WSL following this guide: https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly
In WSL:

2. ```git clone https://github.com/tur-ium/twenty-fifty-new-look ```

3. ```cd twenty-fifty-new-look```

4. Install Ruby version manager following these instructions https://rvm.io/rvm/install

5. ```docker image build -t twenty-fifty:1.0 .``` #This builds the docker image

6. ```docker container run --publish 8080:80 --detach twenty-fifty:1.0```

7. Open a web browser and navigate to ```http://localhost:8080```

### Without using Docker

You need hyper virtualization to run Docker on Windows as far as I am aware. Also, Docker is not great for development of the 2050 model, so it is better to install without Docker.

Here is how to install it

1. Install Ruby Version Manager following these instructions: https://rvm.io/rvm/install 

2. `git clone https://github.com/tur-ium/twenty-fifty-new-look/` to download the modified and updated branch of the calculator

3. Run `bundle install`

4. Run `middleman build`

5. Run `bundle exec rackup`

## Troubleshooting

* When starting the docker instance, if you get an error like ```Bind for 0.0.0.0:8000 failed: port is already allocated```, try using a different port (change 8080 to another number like 9292 in the command)

* There may be other ways of setting it up, please let me know if you manage to get them working

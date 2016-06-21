# Go experiments

## Debian prerequisites

```
$ sudo apt install -t testing golang nodejs npm sass
$ npm config set prefix '~/.npm-global'
$ echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
$ source ~/.profile
$ ln -s /usr/bin/nodejs ~/.npm-global/bin/node
```

## Mac OS X prerequisites 

```
$ brew install golang nodejs libsass
$ npm config set prefix '~/.npm-global'
$ echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
$ source ~/.profile
```

## Build instructions

```
$ npm install -g gulp bower
$ npm install
$ bower install
$ gulp
$ export GOPATH=$PWD
$ go get
```

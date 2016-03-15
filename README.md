vis-bonjour-network
==========================
[![](https://img.shields.io/travis/wyvernnot/vis-bonjour-network.svg)](https://travis-ci.org/wyvernnot/vis-bonjour-network)
[![](https://img.shields.io/npm/v/vis-bonjour-network.svg)](https://www.npmjs.com/package/vis-bonjour-network)
[![](https://img.shields.io/coveralls/wyvernnot/vis-bonjour-network.svg)](https://coveralls.io/github/wyvernnot/vis-bonjour-network)
[![](https://img.shields.io/npm/dm/vis-bonjour-network.svg)](http://npm-stat.com/charts.html?package=vis-bonjour-network)
[![](https://img.shields.io/npm/l/vis-bonjour-network.svg)](https://github.com/wyvernnot/vis-bonjour-network/blob/master/LICENSE)
[![](https://img.shields.io/docker/pulls/wyvernnot/vis-bonjour-network.svg)](https://hub.docker.com/r/wyvernnot/vis-bonjour-network/)

Visualize your local network using bonjour protocol


![screenshot](https://github.com/wyvernnot/vis-bonjour-network/raw/master/screenshot.png)

### About

This command line tool will start a http server at `http://127.0.0.1:3000` and render bonjour network topology in browser.

### Installation and Usage

**Installation**

```sh
npm install vis-bonjour-network -g
```

**Usage**

```txt
Usage: vis-bonjour-network [options]

Options:
  -p, --port  server port                                        [default: 3000]
  -h, --help  Show help                                                [boolean]

copyright 2016
```

### Docker Usage

```sh
docker run -d --net=host  wyvernnot/vis-bonjour-network
```

### License

MIT
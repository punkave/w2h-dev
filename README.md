#w2h-dev

Make sure your environment is fresh and ready to go!

## Usage
In a w2h study folder

```
w2h-dev
```
SVN update the study site, the w2h plugin and w2h overrides plugin. Sync data from prod.

### Options

* `--full`: Do a full `svn up`
* `--staging`: Sync data from staging instead of prod

## To Install

1. `cd` to where ever you keep your node modules. `~/src` is a nice place. Do that. `cd ~/src`
2. `git clone git@github.com:punkave/w2h-dev.git`
3. `cd w2h-dev`
4. `npm link`
5. Profit!
#!/usr/bin/env node

// w2h-dev --full --staging

var argv = require('optimist')
    .usage('Usage: $0 --full --staging --subl')
    .argv;

var exec = require('executive'),
    commands = [];

if (argv.full) {
  commands.push("svn up -q");
} else {
  commands.push("svn up -q --ignore-externals");
  commands.push("svn up -q plugins/wayToHealthPlugin/");
  commands.push("svn up -q plugins/wayToHealthSchemaOverridesPlugin/");
}

if (argv.staging) {
  commands.push('./symfony project:sync-content frontend dev from staging@staging');
} else {
  commands.push("./symfony w2h:sync-prod -q");
}

commands.push("./symfony doctrine:migrate -q");
commands.push("./symfony doctrine:build --all-classes -q");
commands.push("./symfony project:permissions -q");
commands.push("./symfony cc -q");
commands.push("./symfony w2h:reset-test-data");

if (argv.subl) {
  commands.push("subl .");
}

exec(commands, function(err, out, code) {
    if (err) {
      console.log('ERROR:', err);
    }

    console.log("FINISHED with exit status "+code);
});
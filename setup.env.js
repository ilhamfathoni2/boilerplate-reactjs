#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
const fs = require("fs");
const yargs = require("yargs");

yargs
  .usage("$0 [args] dev|staging|prod")
  .command(
    "*",
    "start the server (default env sit)",
    (yargs) => {
      yargs.option("env", {
        describe: "Environment type dev, staging or prod",
      });
    },
    function (argv) {
      let env = ".env.example";
      switch (argv.env) {
        case "dev":
          env = ".env.dev";
          break;
        case "staging":
          env = ".env.staging";
          break;
        case "prod":
          env = ".env.prod";
          break;
        default:
          console.log("Usage: <command> --help");
          break;
      }

      const documentRoot = process.cwd();
      fs.copyFile(`${documentRoot}/${env}`, `${documentRoot}/.env`, (error) => {
        if (error) {
          console.error(error);
        }
      });
      console.log(`Setup ${argv.env} environment complete`);
    }
  )
  .example([
    ["$0 --env sit", "Use dev environment"],
    ["$0 --env staging", "Use staging environment"],
    ["$0 --env prod", "Use production environment"],
  ])
  .demandOption(["env"], "Please provide env arguments to work with this tool")
  .help().argv;

#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

const command = () => {
  console.log('Hello, World!');
};

program
  .name('Page loader utility ')
  .description('Page loader utility')
  .version('0.0.1')
  .option('-o, --output [dir]', 'output dir', '/home/user/current-dir')
  .action(command)
  .parse(process.argv);
/*
program
  .name('Page loader utility ')
  .description(' Compares two configuration files and shows a difference.')
  .version('0.8.0') 
  /*
  .argument('<filepath1>', 'path to file 1')
  .argument('<filepath2>', 'path to file 1')
  */
 /*
  .option('-f, --format <type>', 'output format', 'stylish');
/*
  .action((filepath1, filepath2) => {
    const options = program.opts();
    console.log();
  });
  */
/*
program.parse();
*/
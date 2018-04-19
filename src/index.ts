#!/usr/bin/env node
import program from 'commander';

const init = () => {
    console.log('Hahaha I don\'t do anything silly!');
};

program
  .version('0.1.0')
  .command('init')
  .description('initialize your new service')
  .action(init);

program.parse(process.argv);

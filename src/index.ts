#!/usr/bin/env node
import program from 'commander';
import { init } from './init';

program
  .version('0.1.0')
  .command('init')
  .description('initialize your new service')
  .action(init);

program.parse(process.argv);

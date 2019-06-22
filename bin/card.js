#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

const eol = require('os').EOL;

// Text + chalk definitions
const data = {
  'name': chalk.white('Daniel Lindemann /'),
  'handle': chalk.cyan('daniellindemann'),
  'about': chalk.yellowBright(`I'm an enthusiastic node and .net developer interested in frontend and backend${eol}who uses the Microsoft Azure cloud plattform to run his hot stuff. Also with${eol}a strange love to optimize, automate and containerize things :).`),
  'work': chalk.white('Cloud Solution Architect @ itacs GmbH'),
  'interests': chalk.white(`Cloud-native & Serverless architectures${eol}             Container technologies${eol}             Infrastructure-as-code${eol}`),
  'twitter': chalk.cyan('https://twitter.com/daniellindemann'),
  'github': chalk.cyan('https://github.com/daniellindemann'),
  'linkedin': chalk.cyan('https://linkedin.com/in/daniel-lindemann'),
  'web': chalk.cyan('https://dlindemann.io'),
  'npx': chalk.white('npx daniellindemann'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelInterests': chalk.white.bold('Focused on:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = eol;
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const interests = `${data.labelInterests}  ${data.interests}`;
const about = `${data.about}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + about + newline + newline + working + newline + newline + interests + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding;

console.log(chalk.yellow(boxen(output, options)));

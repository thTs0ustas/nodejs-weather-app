const { geocode } = require('./utils');
const yarg = require('yargs');
const forecast = require('./weather');

yarg?.version('17.0.1');

yarg
  ?.command(
    'weather',
    'Finding Weather',
    {
      address: {
        describe: 'address',
        demandOption: true,
        type: 'string',
      },

      country: {
        describe: 'country',
        demandOption: true,
        type: 'string',
      },
    },
    function ({ address, country } = {}) {
      if (!address || !country) return console.log('Input correct location');

      geocode({ address, country }, (error, { lon, lat } = {}) => {
        if (error) throw new Error(error);
        return forecast(lon, lat);
      });
    },
  )
  .parse();

// // import { writeFileSync, appendFileSync } from 'fs';
//
// const chalk = require('chalk');
// const yargs = require('yargs');
// const fs = require('fs');
// const saveNotes = (notes) => {
//   const data = JSON.stringify(notes);
//   fs.writeFileSync('notes.json', data);
// };
//
// const readNotes = () => {
//   try {
//     const dataBuffer = fs.readFileSync('notes.json');
//     const jsonData = dataBuffer.toString();
//     return JSON.parse(jsonData);
//   } catch (e) {
//     return [];
//   }
// };
//
// const addNote = (title, body) => {
//   const notes = readNotes().find((e) => e.title !== title);
//   if (notes) {
//     notes.push({ title, body });
//     saveNotes(notes);
//   } else {
//     console.log('Title is taken');
//   }
// };
//
// const removeNote = (title) => {
//   const notes = readNotes();
//   if (notes.find((e) => e.title == title)) {
//     let newNotes = notes.filter((notes) => notes.title !== title);
//     saveNotes(newNotes);
//     console.log(chalk.bgGreen('Note removed'));
//   } else console.log(chalk.bgRed("Title doen't exist"));
// };
//
// const listNote = () => {
//   const notes = readNotes();
//   notes.forEach((element) => {
//     console.log(chalk.inverse(element.title));
//   });
// };
//
// const readNote = (title) => {
//   const notes = readNotes().find((e) => e.title === title);
//   notes
//     ? console.log(chalk.bgCyan(notes.body))
//     : console.log(chalk.bgRed("Title doen't exist"));
// };
//
// yargs.version('17.0.1').argv;
//
// yargs.command(
//   'add',
//   'Adding note',
//   {
//     title: {
//       describe: 'Add',
//       demandOption: true,
//       type: 'string',
//     },
//     body: {
//       describe: 'Body',
//       demandOption: true,
//       type: 'string',
//     },
//   },
//   function ({ title, body }) {
//     addNote(title, body);
//   },
// );
//
// yargs.command(
//   'remove',
//   'Remove note',
//   {
//     title: {
//       describe: 'Remove',
//       demandOption: true,
//       type: 'string',
//     },
//   },
//   ({ title }) => removeNote(title),
// );
//
// yargs.command(
//   'list',
//   'List of note',
//
//   () => listNote(),
// );
//
// yargs.command(
//   'read',
//   'Read note',
//   {
//     title: { describe: 'read', demandOption: true, type: 'string' },
//   },
//   ({ title }) => readNote(title),
// );
//
// yargs.parse();
//
// module.export = { addNote, readNote, removeNote, listNote };

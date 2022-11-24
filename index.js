const yargs = require('yargs')
const pkg = require('./package.json')

const { addNote, editNote, emoveNote, printNotes } = require('./notes.controller')

yargs.version(pkg.version)

yargs.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title)
  },
})
yargs.command({
  command: 'edit',
  describe: 'Edit note by id',
  builder: {
    id: {
      type: 'string',
      describe: 'Note id for edit',
      demandOption: true,
    },
    title: {
      type: 'string',
      describe: 'Note title for edit',
      demandOption: true,
    },
  },
  handler({id, title }) {
    editNote(id, title)
  },
})
yargs.command({
  command: 'remove',
  describe: 'Remove note by id',
  builder: {
    id: {
      type: 'string',
      describe: 'Note if for remove',
      demandOption: true,
    },
  },
  handler({ id }) {
    removeNote(id)
  },
})
yargs.command({
  command: 'list',
  describe: 'Print all notes',
  async handler() {
    printNotes()
  },
})

yargs.parse()

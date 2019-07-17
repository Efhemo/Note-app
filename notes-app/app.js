const yags = require('yargs')
const notes = require('./notes')

yags.command({

    command: "add",
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOptions: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOptions: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})


yags.command({

    command: "remove",
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOptions: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

yags.command({

    command: "listNotes",
    describe: 'All note',
    
    handler: function(){
        notes.listNotes()
    }
})

yags.command({

    command: "readNote",
    describe: 'read a note',
    builder: {
        title: {
            describe: "Note title",
            demandOptions: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})

yags.parse()
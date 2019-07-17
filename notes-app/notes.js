const fs = require('fs')
const chalk = require('chalk')

const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson) 
    }catch(e){
        return []
    }
    
}

const saveNote = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}


const getNotes = function(){
    return 'your notes'
}

const addNote = function(title, body){

    const notes = loadNotes() //return an array of object

    //filter if we have duplicate
    const duplicateNotes = notes.filter((note) =>{
        return note.title === title
    })

    const duplicateNote = notes.find(note => {
        note.title === title
    })

    if(!duplicateNote){

        notes.push({
            title: title,
            body: body
        })
    
        saveNote(notes)
        console.log("new note added")
    }else{
        console.log("note title taken")
    }
    
}

const removeNotes = function(title){

    const notes = loadNotes() //return an array of object
    
    const noteToKeep = notes.filter(function(note){
       return note.title !== title
    })

    if(notes.length > noteToKeep.length ){
        console.log(chalk.green("Note removed"))
        saveNote(noteToKeep)
    }else{
        console.log(chalk.red("No Note removed"))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {

    const notes = loadNotes()

     const note = notes.find((note) => {
         note.title === title
     })
     
     if(note){
         console.log(chalk.inverse(note.title))
         console.log(note.body)
     }else{
         console.log(chalk.red.inverse("No notes was found"))
     }
}

//this is set as a return when the file is called
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}
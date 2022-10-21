const write = require ('./write')
const read = require ('./read')
const add = require ('./add')
//get user input
const data = process.argv
var note = {}
if (data[2] =='add'){
    //build object
    note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
    //get old note value 
    var oldNote = read ()
    //add note to note.txt 
    add(note,oldNote)
}
if (data[2] == 'read'){
    // import present 
    const present = require('./present')
    present (read())
}
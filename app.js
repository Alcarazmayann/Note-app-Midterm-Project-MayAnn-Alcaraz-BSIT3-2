const add = require ('./add')
const read = require ('./read')
const write = require ('./write')
const present = require ('./present')
const del = require ('./del')
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
    //import present 
    const present = require('./present')
   present(read())
} 
if(data[2] == 'delete'){
    //get oldNote values
    const oldNote = read()
    //get id to delete from note
    const id = data[3]
    del(id,oldNote)
    present (read())
}
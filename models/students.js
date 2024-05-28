const mongoose = require('mongoose')
const schema = mongoose.Schema;
// schema obj

const blogSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        snippet:{
            type: String,
            required: true
        }, 
        body:{
            type: String,
            required: true
        }, 
    }, {timestamps: true}
)

const students = mongoose.model('Blog', blogSchema);

module.exports = students;





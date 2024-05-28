const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/students')
const New = require('./models/natsha')


const app = express();
// connect o mongo db
const dbURI = 'mongodb+srv://natnael:test1234@cluster0.qzvx796.mongodb.net/natnael-chala?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})

.then((result)=> console.log('data base connected'))
.catch((err)=> console.log(err))

app.set('view engine' , 'ejs');

app.listen(3000)

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('./add-blog', (req,res)=>{
const students = new Blog(
    {
        title: 'new blog',
        snippet:'about my new blog',
        body: "more about my new blog"

    }
)
students.save()
.then((result)=>{
    res.send(result)
})
.catch((err)=>{
    console.log(err)
})
})

app.get('/', (req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs' , snippet: 'lorem100'},
        {title: 'mario finds stars' , snippet: 'lorem100'},
        {title: 'how to defeat browser' , snippet: 'lorem100'},
       

    ];
    res.render('index', {title:'Home', blogs})

})
app.get('/about', (req,res)=>{
    res.render('about' ,{title:'About'})

})
app.get('/blogs/create', (req,res)=>{
    res.render('create',{title:'Blogs'})

})

app.use((req,res)=>{
    res.status(404).render('404', {title:'404'})

})
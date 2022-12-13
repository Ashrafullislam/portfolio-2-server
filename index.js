const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000 ;

// midle ware 
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
  res.send('My portfolio server running ')
})

const projects = require('./projects.json');
app.get('/projects', (req,res)=>  {
    res.send(projects);
})

// get projects details by  id
app.get('/projects/:id', (req,res)=> {
    const id = req.params.id ;
    const project = projects.find(pro => pro.id === id)
    res.send(project);

})

app.listen(port, () => {
  console.log(`my portfolio server running port ${port}`)
})
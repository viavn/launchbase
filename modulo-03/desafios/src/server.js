const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./courses')

const server = express()

const port = 5002

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server
})

server.get('/', (req, res) => {
  return res.render('courses', { courses })
})

server.get('/about', (req, res) => {
  const about = {
    img:
      'https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.0-9/26731144_211705696042579_7038053465160362224_n.png?_nc_cat=101&_nc_oc=AQmym5M0kpEA6D06El90p23E8DC_QgtGxq8k0_GjGC57tckh4o1dPDOm1jojA_hAInA&_nc_ht=scontent.fcpq2-1.fna&oh=9a36da2a51f59590f679e9deae531035&oe=5E8E275F',
    company_name: 'Rocketseat',
    description:
      'Uma startup criada para educar, inspirar e conectar programadores e empreendedores',
    tecs: [
      { name: 'JavaScript' },
      { name: 'NodeJS' },
      { name: 'ReactJS' },
      { name: 'React Native' }
    ]
  }

  return res.render('about', { about })
})

server.get('/courses/:id', (req, res) => {
  const id = req.params.id
  const course = courses.find(c => c.id === id)

  if (course) return res.render('course', { course })
  else return res.render('not-found')
})

server.use((req, res) => {
  res.status(404).render('not-found')
})

server.listen(port, () => {
  console.log(`server is running on localhost:${port}`)
})

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

const port = 5000

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', (req, res) => {
  const about = {
    avatar_url:
      'https://media-exp1.licdn.com/dms/image/C4D03AQFsdwwmKay9kA/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=qyPwJ1ONwxo1tEE5g4WfuhL_r1pOmZ69K0fBKK5my3I',
    name: 'Vinícius Avansini',
    role: 'Programador Júnior - Writesys',
    description:
      'Programador full-stack. Colaborador da <a href="https://writesys.com.br/" target="_blank">Writesys</a>',
    links: [
      { name: 'GitHub', url: 'https://github.com/viavn' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/viniciusavansini' }
    ]
  }

  return res.render('about', { about })
})

server.get('/portfolio', (req, res) => {
  return res.render('portfolio', { items: videos })
})

server.get('/video', (req, res) => {
  const id = req.query.id

  const video = videos.find(video => {
    return video.id == id
  })

  if (!video) {
    return res.send('Video not found!')
  }

  res.render('video', { item: video })
})

server.listen(port, () => {
  console.log(`server is running on localhost:${port}`)
})

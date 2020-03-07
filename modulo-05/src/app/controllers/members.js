const { age, date } = require('../../lib/utils')
const Member = require('../models/Member')

module.exports = {
  index(req, res) {
    Member.all(function (members) {
      return res.render('members/index', { members });
    })
  },
  show(req, res) {
    Member.find(req.params.id, function (member) {
      if (!member) return res.send('Member not found!')

      member.birth = date(member.birth).birthDay

      return res.render('members/show', { member })
    })

  },
  create(req, res) {
    Member.instructorsSelectOptions(function (options) {
      return res.render('members/create', { instructors: options })
    })

  },
  post(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == '')
        return res.send('Please, fill all fields!')
    }

    Member.create(req.body, function (member) {
      return res.redirect(`/members/${member.id}`)
    })
  },
  edit(req, res) {
    const id = Number(req.params.id)

    Member.find(id, function (member) {
      if (!member) return res.send('Member not found!')

      member.birth = date(member.birth).iso

      Member.instructorsSelectOptions(function (options) {
        return res.render('members/edit', { member, instructors: options })
      })
    })
  },
  put(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == '')
        return res.send('Please, fill all fields!')
    }

    Member.update(req.body, function (id) {
      return res.redirect(`/members/${id}`)
    })

  },
  delete(req, res) {
    Member.delete(req.body.id, function (id) {
      return res.redirect('/members')
    })
  }
}
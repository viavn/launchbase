const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
  all(callback) {
    db.query('SELECT * FROM Member', function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback(results.rows)
    })
  },
  find(id, callback) {
    const query = `
      SELECT a.*, b.Name AS Instructor_Name
        FROM Member          a
             JOIN Instructor b ON (a.Instructor_Id = b.Id)
       WHERE a.Id = $1 ORDER BY Name
    `

    db.query(query, [id], function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback(results.rows[0])
    })
  },
  create(data, callback) {
    const query = `
    INSERT INTO Member(Name, Avatar_Url, Gender, Email, Birth, Blood, Weight, Height, Instructor_Id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING Id
  `

    const values = [
      data.name,
      data.avatar_url,
      data.gender,
      data.email,
      date(data.birth).iso,
      data.blood,
      data.weight,
      data.height
    ]

    db.query(query, values, function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
    UPDATE Member
       SET Name=($1),
           Avatar_Url=($2),
           Gender=($3),
           Email=($4),
           Birth=($5),
           Blood=($6),
           Weight=($7),
           Height=($8),
           Instructor_Id=($9)
     WHERE Id = $10
  `

    const id = Number(data.id)
    const values = [
      data.name,
      data.avatar_url,
      data.gender,
      data.email,
      date(data.birth).iso,
      data.blood,
      data.weight,
      data.height,
      data.instructor,
      id
    ]

    db.query(query, values, function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback(id)
    })
  },
  delete(id, callback) {
    db.query('DELETE FROM Member WHERE Id = $1', [id], function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback()
    })
  },
  instructorsSelectOptions(callback) {
    db.query(`SELECT Id, Name FROM Instructor`, function (err, results) {
      if (err) throw 'Database Error'

      callback(results.rows)
    })
  }
}
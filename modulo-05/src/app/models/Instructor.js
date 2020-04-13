const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
  all(callback) {
    const query = `
      SELECT a.*, COUNT(b.Id) AS Total_Students
        FROM Instructor       a
             LEFT JOIN Member b ON (a.Id = b.Instructor_Id)
       GROUP BY a.Id
       ORDER BY a.Name
    `
    db.query(query, function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback(results.rows)
    })
  },
  find(id, callback) {
    db.query('SELECT * FROM Instructor WHERE Id = $1', [id], function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback(results.rows[0])
    })
  },
  findBy(filter, callback) {
    const query = `
      SELECT a.*, COUNT(b.Id) AS Total_Students
        FROM Instructor       a
             LEFT JOIN Member b ON (a.Id = b.Instructor_Id)
       WHERE a.Name ILIKE '%${filter}%'
          OR a.Services ILIKE '%${filter}%'
       GROUP BY a.Id
       ORDER BY a.Name
    `
    db.query(query, function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback(results.rows)
    })
  },
  create(data, callback) {
    const query = `
      INSERT INTO Instructor(Name, Avatar_Url, Gender, Services, Birth, Created_At)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING Id
  `

    const values = [
      data.name,
      data.avatar_url,
      data.gender,
      data.services,
      date(data.birth).iso,
      date(Date.now()).iso
    ]

    db.query(query, values, function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
    UPDATE Instructor
       SET Name=($1),
           Avatar_Url=($2),
           Gender=($3),
           Services=($4),
           Birth=($5)
     WHERE Id = ($6)
  `

    const id = Number(data.id)
    const values = [
      data.name,
      data.avatar_url,
      data.gender,
      data.services,
      date(data.birth).iso,
      id
    ]

    db.query(query, values, function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback(id)
    })
  },
  delete(id, callback) {
    db.query('DELETE FROM Instructor WHERE Id = $1', [id], function (err, results) {
      if (err) throw `Database Error! ${err}`

      callback()
    })
  },
  paginate(params) {
    const { filter, limit, offset, callback } = params

    let query = '',
      filterQuery = '',
      totalQuery = '(SELECT COUNT(*) FROM Instructor) AS Total'

    if (filter) {
      filterQuery = `${query}
        WHERE a.Name ILIKE = '%${filter}%'
           OR a.Services ILIKE = '%${filter}%'
      `

      totalQuery = `
        (SELECT COUNT(*) FROM Instructor ${filterQuery}) AS Total
      `
    }

     query = `
     SELECT a.*,
            COUNT(b.Id) AS Total_Students,
            ${totalQuery}
       FROM Instructor       a
            LEFT JOIN Member b ON (a.Id = b.Instructor_Id)
      ${filterQuery}
      GROUP BY a.Id
      LIMIT $1 OFFSET $2
    `

    db.query(query, [limit, offset], function (err, results) {
      if (err) throw 'Database Error!'

      callback(results.rows)
    })
  }
}
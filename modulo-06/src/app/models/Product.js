const db = require('../../config/db')

module.exports = {
    create(data) {
        const query = `
          INSERT INTO Product(
             Product_Name, 
             Product_Description,
             Product_OldPrice,
             Product_Price,
             Product_Quantity,
             Product_Status,
             Category_Id,
             User_Id)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING Id
      `

      data.price = data.price.replace(/\D/g, '')

        const values = [
            data.name,
            data.description,
            data.old_price || data.price,
            data.price,
            data.quantity,
            data.status || 1,
            data.category_id,
            data.user_id || 1
        ]

        return db.query(query, values)
    }
}
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
    },
    find(id) {
        return db.query(`
            SELECT Product_Id          AS Id,
                   Product_Name        AS Name,
                   Product_Description AS Description,
                   Product_OldPrice    AS Old_Price,
                   Product_Price       AS Price,
                   Product_Quantity    AS Quantity,
                   Product_Status      AS Status,
                   Category_Id,
                   User_Id
             FROM Product
            WHERE Product_Id = $1`, [id])
    },
    update(data) {
        const query = `
            UPDATE Product
               SET Product_Name=($1),
                   Product_Description=($2),
                   Product_OldPrice=($3),
                   Product_Price=($4),
                   Product_Quantity=($5),
                   Product_Status=($6),
                   Category_Id=($7),
                   User_Id=($8)
             WHERE Product_Id=($8)
         `

        const values = [
            data.name,
            data.description,
            data.old_price,
            data.price,
            data.quantity,
            data.status,
            data.category_id,
            data.user_id,
            data.id
        ]

        return db.query(query, values)
    },
    delete(id) {
        return db.query('DELETE FROM Product WHERE Product_Id = $1', [id])
    }
}
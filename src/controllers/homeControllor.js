import pool from '../configs/ConnectDB'


let getAllUser = async (req, res)=>{
    const [row, fields] = await pool.execute('select * from taikhoan')
    return res.status(200).json({
        dataTaiKhoan: row
    })
}

module.exports = {
    getAllUser
}
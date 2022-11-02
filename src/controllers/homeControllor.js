import pool from '../configs/ConnectDB'


let getAllThuoc = async (req, res)=>{
    const [row, fields] = await pool.execute('select * from thuoc')
    return res.status(200).json({
        dataThuoc: row
    })
}

let createThuoc = async(req, res) =>{
    let{TenThuoc,DangBaoChe,TacDung,ThanhPhanChinh,DoTuoi,CanhBao,
        DonGia,DVT,SoLuong,QuyCach,ChiDinh,ThuocCanKeToa,ChongChiDinh,
        SoDangKy,MaNhomThuoc} = req.body;
    if(!TenThuoc||!DangBaoChe||!TacDung||!ThanhPhanChinh||!DoTuoi||!CanhBao || !DonGia||!DVT||!SoLuong
        ||!QuyCach||!ChiDinh||!ThuocCanKeToa||!ChongChiDinh||!SoDangKy||!MaNhomThuoc) 
    {
        return res.status(200).json({
            message: "err"
        })
    }
    await pool.execute('INSERT INTO thuoc (TenThuoc,DangBaoChe,TacDung,ThanhPhanChinh,DoTuoi,CanhBao,DonGia,DVT,SoLuong,QuyCach,ChiDinh,ThuocCanKeToa,ChongChiDinh,SoDangKy,MaNhomThuoc) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?)',
    [TenThuoc,DangBaoChe,TacDung,ThanhPhanChinh,DoTuoi,CanhBao,
        DonGia,DVT,SoLuong,QuyCach,ChiDinh,ThuocCanKeToa,ChongChiDinh,
        SoDangKy,MaNhomThuoc]);
    return res.status(200).json({
        message: "ok"
    })
}

let updateThuoc = async(req, res) =>{
    let{TenThuoc,DangBaoChe,TacDung,ThanhPhanChinh,DoTuoi,CanhBao,
        DonGia,DVT,SoLuong,QuyCach,ChiDinh,ThuocCanKeToa,ChongChiDinh,
        SoDangKy,MaNhomThuoc,MaThuoc} = req.body;
        if(!TenThuoc||!DangBaoChe||!TacDung||!ThanhPhanChinh||!DoTuoi||!CanhBao || !DonGia||!DVT||!SoLuong
            ||!QuyCach||!ChiDinh||!ThuocCanKeToa||!ChongChiDinh||!SoDangKy||!MaNhomThuoc|| MaThuoc) 
        {
            return res.status(200).json({
                message: "err"
            })
        }
    await pool.execute('UPDATE thuoc SET TenThuoc=?,DangBaoChe=?,TacDung=?,ThanhPhanChinh=?,DoTuoi=?,CanhBao=?,DonGia=?,DVT=?,SoLuong=?,QuyCach=?,ChiDinh=?,ThuocCanKeToa=?,ChongChiDinh=?,SoDangKy=?,MaNhomThuoc=? WHERE MaThuoc= ?',
    [TenThuoc,DangBaoChe,TacDung,ThanhPhanChinh,DoTuoi,CanhBao,
        DonGia,DVT,SoLuong,QuyCach,ChiDinh,ThuocCanKeToa,ChongChiDinh,
        SoDangKy,MaNhomThuoc,MaThuoc]);
    return res.status(200).json({
        message: "ok"
    })
}

let deleteThuoc = async (req, res)=>{
    let thuocID = req.params.MaThuoc;
    if(!thuocID)
    {
        return res.status(200).json({
            message: "err ne"
        })
    }
    await pool.execute('DELETE FROM thuoc WHERE MaThuoc= ?',[thuocID])
    return res.status(200).json({
        message: "ok"
    })
}

let seachThuoc = async (req, res)=>{

}

module.exports = {
    getAllThuoc,createThuoc,updateThuoc,deleteThuoc,seachThuoc
}
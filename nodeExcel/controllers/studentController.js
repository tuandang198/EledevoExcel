const model = require('../models/studentModel')
const XLSX = require('xlsx')
exports.getStudent = async(req, res, next) => {
	try {
		const limit = parseInt(req.query.limit)
		const activePage = parseInt(req.query.activePage)
		const skip = (activePage -1)*limit
		const totalRecords = await model.find().select(["-__v","-_id"])
		const totalPage = Math.ceil(totalRecords.length/limit)
		const studentData = await model.find().skip(skip).limit(limit)
		res.send({studentData,totalPage,totalRecords,activePage})
	} catch (error) {
		res.send(404, error)
	}
}

exports.updateStudent = async(req, res, next) => {
	try {
		const id = req.params.id
		const country = req.body.country
		const gender = req.body.gender
		const studentData = await model.findByIdAndUpdate(id,{Gender: gender,Country: country})
		res.send({studentData})
	} catch (error) {
		res.send(404, error)
	}
}

exports.deleteStudent = async(req, res, next) => {
	try {
		const id = req.params.id
		const studentData = await model.findByIdAndDelete(id)
		res.send({studentData})
	} catch (error) {
		res.send(404, error)
	}
}

exports.addStudent = async(req, res, next) => {
	try {
		const studentId = Math.round(Math.random() * 1E2)
		const country = req.body.country
		const gender = req.body.gender
		const studentData = await model.create({StudentID: studentId,Gender: gender,Country: country})
		res.send({studentData})
	} catch (error) {
		res.send(404, error)
	}
}

exports.getExcel = async(req, res, next) => {
	try {
		const file = req.files[0]
		const wb = XLSX.readFile(file.path,{type:'buffer'})
		const arrSheetName = wb.SheetNames
		const convertedData = XLSX.utils.sheet_to_json(wb.Sheets[arrSheetName[0]])
		const arr = []
		for(let i = 0; i < convertedData.length; i++){
			var arrData = {...convertedData[i], StudentID: Math.round(Math.random() * 1E2)}
			arr.push(arrData)
		}
		const addExcel = await model.insertMany(arr)
		res.send({addExcel})
	} catch (error) {
		res.send(404, error)
	}
}
const controller = require('../controllers/studentController')

const route = (app) => {
	app.get('/student', controller.getStudent)
	app.delete('/student/:id', controller.deleteStudent)
	app.put('/student/:id', controller.updateStudent)
	app.post('/student', controller.addStudent)
	app.post('/studentExcel', controller.getExcel)
}

module.exports = route
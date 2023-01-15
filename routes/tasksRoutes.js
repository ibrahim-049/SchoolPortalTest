const router = require('express').Router();
const tasksController = require('../controller/tasksController');
const path = require('path');

// router.get('', tasksController.showAllTasks);
router.get('',  function(req, res) { 
    res.sendFile( path.join(__dirname, '../frontend/static/login.html'))} )

router.get('/add', tasksController.addTask);
router.post('/add', tasksController.addTaskPost);

router.get('/edit/:title', tasksController.editTask);
router.post('/edit/:title', tasksController.editTaskPost);

router.post('/delete/:title', tasksController.deleteTask);

router.post('/deleteAll', tasksController.deleteAll);

router.get('/show/:title', tasksController.showTask);

router.get('/login', function(req, res) { 
    res.sendFile( path.join(__dirname, '../frontend/static/login.html') ) 
});

router.get('/home', (req, res) => {
    res.sendFile( path.join(__dirname, '../frontend/static/home.html'))
})

router.get('/registerStudent', (req, res) => {
    res.sendFile( path.join(__dirname, '../frontend/static/registerStudent.html') )
})

module.exports = router


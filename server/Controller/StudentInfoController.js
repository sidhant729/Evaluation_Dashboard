const {StudentInfoModel} = require('../Model/StudentInfoModel');

module.exports.addStudent = async(req, res, next) => {
    
    const studentInfo = new StudentInfoModel(req.body);
    try {
        const doc = await studentInfo.save();
        console.log(doc)
        res.status(201).json(doc);
    } catch(err) {
        res.status(401).json(err);
    }
}

module.exports.getStudent = async(req, res, next) => {
    try {
        const studentsData = await StudentInfoModel.find();
        res.status(201).json(studentsData);
    } catch(err) {
        res.status(400).json(err);
    }
}
const express = require('express')
const router = express.Router()
const { verifyToken } = require('./middlewares/token')
const { checkEvent } = require('./middlewares/event')

router.use('/department', require('./apis/department'))
router.use('/exist', require('./apis/exist'))

router.use(verifyToken)
router.use(checkEvent)
router.use('/patient', require('./apis/patient'))
router.use('/report', require('./apis/report'))
router.use('/user', require('./apis/user'))
router.use('/schedule', require('./apis/schedule'))
router.use('/blood', require('./apis/blood'))
router.use('/count', require('./apis/count'))
router.use('/stats', require('./apis/stats'))
router.use('/dashboard', require('./apis/dashboard'))
router.use('/dicom', require('./apis/dicom'))
router.use('/worklist', require('./apis/worklist'))
router.use('/event', require('./apis/event'))
router.use('/cookie', require('./apis/cookie'))

module.exports = router

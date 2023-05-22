const mongoose = require('mongoose')
// const moment = require('moment')
// const moment_timezone = require('moment-timezone')

// const time = Date.now() + (7 * 60 * 60 * 1000) 

//const thaiTimezone = moment().add(7, 'hours') //สร้างตัวแปลรับ Date ของโซนประเทศไทย
//const thaiTimezone = moment.tz('Asia/Bangkok')

//const thai = moment().set


//console.log(new Date(time))

module.exports = mongoose.model('Employee',{
    name: { type:String },
    salary: { type:Number },
    updated_at: { type: Date, default: Date.now }
})
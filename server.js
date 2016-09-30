var nodemailer = require('nodemailer')
var fs = require('fs')
var config = require('./config')
var smtpTransport = nodemailer.createTransport('smtps://user%40gmail.com:password@smtp.gmail.com')

/**
  *@param {String} [subject] [主题]
  *@param {String} [html] [发送内容]
 */


function sendMail(subject, html) {
  var mailOptions = {
    from: '"发件人名称" <tianqin1103@gmail.com>',
    to: 'tianqin@xiaomi.com',
    subject: subject,
    html: fs.readFileSync('mail.html', 'utf8')
  }

  smtpTransport.sendMail(mailOptions, function(error, response) {
    if(error) {
      console.log(error)
    }
    else {
      console.log('Message sent: ' + response)
    }

    smtpTransport.close()
  })
}
sendMail('test', '<p>aaa</p>')

const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: 'mg.timothyhobbs.co.uk'
})

export default (req, res) => {
  const {
    body: { name, email, message }
  } = req

  mailgun
    .messages()
    .send({
      from: 'Website Contact <web@mg.timothyhobbs.co.uk>',
      to: ['tim@timothyhobbs.co.uk'],
      subject: `Website contact from ${name}`,
      html: `
        <h1>Website contact from <strong>${name}</strong></h1>
        <p>${message}</p>
        <p>Contact them on: ${email}</p>
      `
    })
    .then(() => res.status(200).end())
    .catch(err => {
      console.log(err)
      res.status(400).end()
    })
}

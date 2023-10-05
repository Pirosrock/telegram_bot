const express = require('express')
const { Telegraf } = require('telegraf')


// Config .env

require('dotenv').config()

const app = express()
const bot = new Telegraf(process.env.BOT_TOKEN)

app.use(bot.webhookCallback('/url_telegram'))
bot.telegram.setWebhook(`${process.env.BOT_URL}/url_telegram`)

const PORT = process.env.PORT || 3000


app.post('/url_telegram', (req, res) => {
  res.send('Funciona?')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`)
})
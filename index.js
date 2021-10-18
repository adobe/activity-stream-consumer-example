const express = require('express')
const winston = require('winston');
const port = 3000

const app = express().use(express.json())

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'activity-stream-consumer-example' },
  transports: [
    // - Write all logs with level `error` and below to `error.log`
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // - Write all logs with level `info` and below to `combined.log`
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({format: winston.format.simple()})
  ],
});

app.get('/', (req, res) => {
  logger.info(JSON.stringify(req.query))
  res.sendStatus(200)
})

app.post('/', (req, res) => {
  logger.info(JSON.stringify(req.body))
  res.sendStatus(200)
})

app.listen(port, () => {
  logger.info(`app listening on port ${port}`)
})

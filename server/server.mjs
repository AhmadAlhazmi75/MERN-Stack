import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import './db/conn.mjs'

const PORT = process.env.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.get('/data', (req, res) => {
  const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  res.json(data);
});


// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})

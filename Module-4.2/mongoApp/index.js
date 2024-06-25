const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const mongoURL = process.env.MONGO_URL || 'mongodb://mongo:27017/testdb';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const itemSchema = new mongoose.Schema({
  name: String,
  message: String,
});

const Item = mongoose.model('Item', itemSchema);

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/items', async (req, res) => {
  const item = new Item({ name: req.body.name, message:req.body.message });
  await item.save();
  res.status(201).send(item);
});

app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

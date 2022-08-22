const express = require('express');
const app = express();
const notification = require('./getNewItems');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
      bodyParser.urlencoded({
            extended: true,
      })
);

app.post('/getItems', async (req, res) => {
      const items = await notification.getItems(req.body.url);
      res.send(JSON.stringify(items));
});

app.post('/checkItems', async (req, res) => {
      clearInterval(notification.intervalId);
      console.log(req.body);
      notification.checkNewItemsNotification(req.body.url, req.body.ms);
      res.send('ok');
});

app.listen(5000);

var express = require('express');

var app     = module.exports = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var data = [
  {
    "id"   : 0,
    "title": "Lorem ipsum 1",
    "text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "id"   : 1,
    "title": "Lorem ipsum 2",
    "text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

app.get('/api/posts', function (req, res) {
  res.json(data);
});

app.get('/api/posts/:id', function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.length) {
    data.forEach(function(post, index) {
      if (post.id === id) return res.json(post);
    });
  } else {
    res.json(false);
  }
});

app.delete('/api/posts/:id', function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id <= data.length) {
    data.forEach(function(post, index) {
      if (post.id == id) {
        data.splice(index, 1);
      }
    });
    return res.json(true);
  } else {
    res.json(false);
  }
});

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

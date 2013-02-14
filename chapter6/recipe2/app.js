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

var persons = [
  { name: "Peter", age: 25, id: 1 },
  { name: "Stefan", age: 35, id: 2 },
  { name: "Agnes", age: 22, id: 3 }
];

app.get('/api/persons', function (req, res) {
  res.json(persons);
});

app.get('/api/persons/:id', function (req, res) {
  var id = req.params.id;
  persons.forEach(function(p, index) {
    if (p.id == id) return res.json(p);
  });
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/partials/:name', function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

app.get('*', function(req, res) {
  res.render('index');
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

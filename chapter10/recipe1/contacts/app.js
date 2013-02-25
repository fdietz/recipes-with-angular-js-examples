var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api');

var app = module.exports = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.get('/api/contacts', api.contacts);
app.get('/api/contacts/:id', api.contact);
app.post('/api/contacts', api.createContact);
app.put('/api/contacts/:id', api.updateContact);
app.delete('/api/contacts/:id', api.destroyContact);

app.get('*', routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

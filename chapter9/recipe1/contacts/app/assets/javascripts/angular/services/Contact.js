app.factory("Contact", function($resource, $http) {
  var resource = $resource("/api/contacts/:id", { id: "@id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );

  return resource;
});
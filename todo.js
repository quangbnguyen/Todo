(function() {
  var app = angular.module('TodoApp', []);

  var Item = function(name) {
    this.name = name;
    this.isDone = false;
  }

  app.controller('TodoController', ['$scope', function($scope) {
    $scope.items = [
      // new Item("Reading books"),
      // new Item("Coding"),
      // new Item("Surfing web")
    ];

    $scope.addItem = function(item) {
      var item = new Item(item)
      $scope.items.push(item);
      $scope.newItem = '';
    };

    $scope.deleteItem = function(index) {
      $scope.items.splice(index, 1);
    };

    $scope.toggle = function(item) {
      if (item.isDone) {
        item.isDone = false;
      } else {
        item.isDone = true;
      }
    };
  }]);
})();

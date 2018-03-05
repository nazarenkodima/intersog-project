app.controller('l-header', function($scope, $state) {
    $scope.dashboard = function(data) {
        console.log(data)
        $state.go('dashboard', {});
    }
});

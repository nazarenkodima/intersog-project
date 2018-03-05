app.controller('l-cards', function($scope, $http, $state) {
    $scope.cards = {
        campaigns: []
    };

    function init() {

      return  $http({
                method: 'GET',
                url: 'http://localhost:5000/cards'})
                .then(function (response) {
                    $scope.cards.campaigns = response.data.campaigns;
                })
            }
    init();

    //remove card
    $scope.hideCard= function($index) {

        $scope.cards.campaigns.splice($index, 1);
    };


    //get card details
    $scope.cardDetails = function(data) {
        $state.go('card', { data: data });
    };

    //show more items
    $scope.displayNumber = 7;

    $scope.showMore = function(num) {

        $scope.displayNumber += num;


    };



});

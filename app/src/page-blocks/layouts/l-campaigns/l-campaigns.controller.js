app.controller('l-campaigns', function($scope, $http, $state, $campaignData) {

    $scope.data = {
        campaigns : [],
        media: []
    };



    //get Campaigns name
    function init() {
        $campaignData
            .campaign({
                id: $state.params.data.id
            })
            .then(function (response) {
                $scope.data.campaigns = response.data;
            });
    }

    init();

    //get Campaigns media
    $scope.getMedia = function init() {

        return  $http({
            method: 'GET',
            url: 'http://localhost:5000/media'
            })
            .then(function (response) {
                $scope.data.media = response.data.media;
            })
    };






    //MaterialCSS plugins init
    $('ul.tabs').tabs();
    $('.chips-placeholder').material_chip({
        placeholder: 'Keyword',
        secondaryPlaceholder: '+Keyword',
    });

});





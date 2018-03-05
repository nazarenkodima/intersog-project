app.service('$data', function($http) {
    this.campaign = function(params) {
        return $http({
            method: 'GET',
            url: 'http://localhost:5000/campaign/' + params.id
        })
    };
});

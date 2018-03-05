app.service('$campaignData', function($data) {
    this.campaign = function(params) {
        return $data
            .campaign(params);
    };
});

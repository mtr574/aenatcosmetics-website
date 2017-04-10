app.controller('SocialsController', function ($scope, DATA) {
    $scope.socials = [{
        name: 'Facebook',
        url: DATA.facebook_link
    }, {
        name: 'Instagram',
        url: DATA.instagram_link
    }];
});

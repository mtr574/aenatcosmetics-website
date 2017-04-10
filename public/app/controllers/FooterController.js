app.controller('FooterController', function ($scope) {

    $scope.Copyrights = "copyrights";
    $scope.BackBtnText = "back to top";

    $scope.links = [{
        name: 'About',
        url: 'links'
    }, {
        name: 'Terms of use',
        url: 'links'
    }];
});

app.controller('BusinessDetailsController', function ($scope) {

    $scope.Title = "שעות פתיחה";
    $scope.Hours = "8:30 - 18:00";
    $scope.HoursFriday = "8:30 - 13:00";

    // Branches
    $scope.branchs = [
        {
            city: 'הרצליה',
            address: 'המסילה 32 הרצליה',
            info: 'some information here'
        }, {
            city: 'רמת גן',
            address: 'ראש פינה 10 רמת גן',
            info: 'some information here'
        }];
});

app.controller('BusinessDetailsController', ($scope) => {
  $scope.Title = "שעות פתיחה";
  $scope.Hours = "8:30 - 18:00";
  $scope.HoursFriday = "8:30 - 13:00";
  // Branches
  $scope.branches = [{
    city: 'הרצליה',
    address: 'המסילה 32 הרצליה',
    info: ''
  }, {
    city: 'רמת גן',
    address: 'ראש פינה 10 רמת גן',
    info: '054-4912615 / 09-7748621'
  }];
});

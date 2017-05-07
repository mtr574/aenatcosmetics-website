app.controller('SocialsController', ($scope, DATA) => {
  $scope.socials = [{
    name: 'Facebook',
    url: DATA.facebook_link
  }, {
    name: 'Instagram',
    url: DATA.instagram_link
  }];
});

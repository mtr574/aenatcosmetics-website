app.controller('MenuController', ($scope) => {
  $scope.menuitems = [{
    title: 'על עצמי',
    url: 'about'
  }, {
    title: 'שירותים',
    url: 'services'
  }, {
    title: 'שעות פתיחה',
    url: 'hours'
  }, {
    title: 'לקוחות',
    url: 'clients'
  }, {
    title: 'מוצרים',
    url: 'brands'
  }, {
    title: 'יצירת קשר',
    url: 'contact'
  }];
})

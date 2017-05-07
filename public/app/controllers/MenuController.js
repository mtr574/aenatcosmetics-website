app.controller('MenuController', ($scope) => {
  $scope.menuitems = [{
    title: 'על עצמי',
    url: 'about'
  }, {
    title: 'שירותים',
    url: 'services'
  }, {
    title: 'מוצרים',
    url: 'brands'
  }, {
    title: 'שעות פתיחה',
    url: 'hours'
  }, {
    title: 'יצירת קשר',
    url: 'contact'
  }, {
    title: 'לקוחות',
    url: 'clients'
  }];
})

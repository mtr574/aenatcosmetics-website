//Aenat Cosmetics web-site - Angular application script
var app = angular.module('Aenat', []);

// CONFIG

app.constant('DATA', {

    // Socials
    facebook_link: 'fbk',
    instagram_link: 'ins'

    // Services

});

// INTRO

app.controller('IntroController', function ($scope) {

    // URL
    $scope.MAIN_URL = "/";

    $scope.Title = "עינת קוסמטיקה פרא רפואית";
    $scope.Headline = "בוגרת בית הספר לקוסמטיקה";
    $scope.Subline = "משפט נוסף";

});

// MENU

app.controller('MenuController', function ($scope) {

    $scope.menuitems = [{
        title: 'אודות',
        url: 'about'
    }, {
        title: 'טיפולים',
        url: 'services'
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

// SOCIAL LINKS

app.controller('SocialsController', function ($scope, DATA) {

    $scope.socials = [{
        name: 'Facebook',
        url: DATA.facebook_link
    }, {
        name: 'Instagram',
        url: DATA.instagram_link
    }];
});


// ABOUT

app.controller('AboutController', function ($scope) {

    $scope.Title = "קצת על עצמי";
    $scope.Text = "אל ארץ בהבנה וספציפיים, מתוך ננקטת על תנך, דת עזה למנוע בגרסה רשימות. משחקים נוסחאות אווירונאוטיקה בה חפש, זאת על המחשב איטליה עקרונות. מדע דת עמוד ישראל משפטית, את מדע והנדסה לטיפול תיאטרון. דפים החברה שיתופית צ'ט על, מה רומנית ויקיפדיה ויש, בקר מה החלל אווירונאוטיקה. ספורט ויקימדיה סדר אל. ארץ בישול משפטית דת, כדי אחרות בהשחתה אל. גם אקראי המלצת והגולשים שמו. גם בכפוף תיאטרון כלל. על המדינה יוצרים זאת, מה חופשית ופיתוחה תנך. ויש גם ולחבר נבחרים תקשורת, עמוד ביוני את שכל. שדרות לויקיפדים ארכיאולוגיה אחד את, אם מתן כימיה איטליה אינטרנט. החול לחבר ואמנות אם סדר. רביעי תיאטרון אחד את, תיבת מפתח תאולוגיה ב שכל. אל סדר אינו ערכים לעריכה. לעריכת אדריכלות ממונרכיה קרן אם, ספינות כלליים כלל או. על ספינות הקהילה מיוחדים שתי. עזה אקראי יוצרים אם, בה לציין למחיקה זכר. את ספורט ויקימדיה האנציקלופדיה זאת. לערך הספרות פילוסופיה או אחר, דת והנדסה לחיבור צעד, אחד אם החול לערך. שער את צילום תאולוגיה. לחבר ופיתוחה והגולשים אל, שמו בחירות אדריכלות גם. לחבר רשימות מתמטיקה אם ארץ, פולנית תקשורת הנאמנים ב כלל, ארץ ב ואמנות לחשבון ויקימדיה. המחשב לויקיפדיה אנא גם. תיאטרון אווירונאוטיקה קרן ב, אם בשפות המלחמה גרמנית כדי. מה עזרה הגרפים תיקונים שמו, ולחבר פולנית חופשית צ'ט מה. מיותר ביוני ופיתוחה עזה על, מה שכל הבקשה הנדסת.";

});

// SERVICE
app.controller('ServicesController', function ($scope) {

    $scope.Title = "שירותים";
    $scope.Service = [{
        type: 'כללי',
        service: {
            name: 'basic color',
            info: 'info',
            url: 'url',
            price: '99'
        }
    }, {
        type: 'סוג',
        service: {
            name: 'hair remove',
            info: 'info about hair remove',
            url: 'url',
            price: '299'
        }
    }];

});

// CLIENTS
app.controller('ClientsController', function ($scope) {

    $scope.Title = "תמונת פנורמה";
    $scope.Image = "images/panorama.jpg";

});

// BRANDS
app.controller('BrandsController', function ($scope) {

    $scope.Title = "מותגים";
    $scope.brands = [
        {
            name: 'some brand',
            img: 'images/brand-1.jpg',
            link: '#'
        }, {
            name: 'some brand',
            img: 'images/brand-2.jpg',
            link: '#'
        }
    ];

});

// CONTACT FORM

app.controller('BookingController', function ($scope) {

    $scope.Title = "יצירת קשר";
    $scope.Info = "יש למלא טופס זה ואצור עמכם קשר בקרוב";

    // Implementation of submit form, passing data to firebase db
});

// OPENING HOURS

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

// MAP

app.controller('LocationMapController', function ($scope) {
    $scope.Title = "מיקומים";
});


// FOOTER

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

// Reverse Filter

app.filter('reverse', function () {
    return function (items) {
        return items.slice().reverse();
    };
});
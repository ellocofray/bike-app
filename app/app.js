'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'ngAria',
  'ngMaterial',
  'myApp.viewSkeleton',
  'myApp.viewSettings',
  'myApp.viewReport',
  'myApp.viewFrame',
  'myApp.viewCrank',
  'myApp.viewInfo',
  'myApp.viewSaddle',
  'myApp.viewWheel',
    'myApp.viewBicycle',
  'myApp.version','myApp.cycling',
    'SvgPanZoom',
  'pascalprecht.translate',
    'svgTranslate'
]).
config(['$routeProvider','$translateProvider', function($routeProvider,$translateProvider) {
      $translateProvider.translations('en', {
        APP_TITLE: 'BikeApp',
        FOO: 'This is a paragraph.',
        NAV_GEOMETRY:'Compute optimal frame geometry',
        NAV_SKELETON:'Frame',
        NAV_COMPONENTS:'Components',
        NAV_SETTINGS:'Settings',
        NAV_REPORT:'Report',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german',
        BUTTON_LANG_CZ: 'czech',
        BUTTON_COMPUTE:'Size my bike',
        BUTTON_REPORT:'Save as PDF',
        user:{
          FirstName:'First name',
          LastName:'Last name'
        },
        skeleton: {
          height:'Height',
          shoulders:'Shoulders',
          torso:'Torso',
          inseam:'Inseam',
          arm:'Elbow-Middle',
          foot:'Foot size',
          weight:"Weight",
          flexibility:"Flexibility"
        },
        bike: {
          valve:'valve',
          spokes:'spokes',
          hub:'hub',
          rim:'rim',
          tire:'tire',
          wheel:'Wheel',
          frame:'Frame',
          topTube:'top tube',
          seatTube:'seat tube',
          downTube:'down tube',
          seatStay:'seat stay',
          chainStay:'chain stay',
          frontDerailleur:'frontDerailleur',
          chainRings:'chain rings',
          chain:'chain',
          pedal:'pedal',
          crankArm:'crank arm',
          handlebarGrip:'handlebar grip',
          headTube:'head tube',
          shockAbsorber:'shock absorber',
          frontBreaks:'front breaks',
          frontSet:'Front set',
          fork:'fork',
          rearBreaks:'rear breaks',
          rearDerailleur:'rear derailleur',
          cogset:'cogset',
          saddleArea: 'Saddle area',
          saddle: 'saddle',
          seatPost: 'seat post'
        },
        frame: {
          seatTube: 'seat tube',
          seatHeight: 'seat height',
          stack: 'stack',
          topTube: 'top tube',
          reach: 'reach',
          flatHandlebars: 'flat handlebars',
          saddleHandlebarDrop: 'saddle-handlebar drop',
          saddlePedalSeatback: 'saddle-Pedalier Seatback:'
        }
      });
      $translateProvider.translations('de', {
        APP_TITLE: 'Fahrad',
        FOO: 'Dies ist ein Paragraph.',
        NAV_GEOMETRY:'Rechnen optimalle Rahmengrösse',
        NAV_SKELETON:'Rahmen',
        NAV_SETTINGS:'Einstellung',
        NAV_COMPONENTS:'Komponente',
        NAV_REPORT:'Report',
        BUTTON_LANG_EN: 'englisch',
        BUTTON_LANG_DE: 'deutsch',
        BUTTON_LANG_CZ: 'tschechisch',
        BUTTON_COMPUTE:'Rechnen',
        BUTTON_REPORT:'Speichern PDF',
        user:{
          FirstName:'VorName',
          LastName:'NachName'
        },
        skeleton: {
          height:'Körpergröße',
          heightH:'',
          shoulders:'Schulterbreite',
          shouldersH:'Gemessen wird der Abstand der äussersten Schulterknochen bei herab hängenden Armen.',
          torso:'Rumpflänge',
          torsoH:'Gemessen wird die genaue Länge vom Brustbein (kurz unterhalb des Kehlkopfes) bis zum Schambein (ene gute Handbreite unterhalb des Bacuhnables; Haaransantz).',
          inseam:'Schritthöhe',
          inseamH:"<p>Sie benötigen einen Zollstock und eine Wasserwaage. Haben Sie keine Wasserwaage, können Sie auch problemlos ein Buch verwenden.</p><p>Ziehen Sie Ihre Schuhe und Hose aus (je nachdem, wie ihre Hose geschnitten ist, beeinflusst sie das Messergebnis). Falls Sie eine Wasserwaage besitzen, ziehen Sie diese möglichst waagerecht zwischen den Beinen nach oben (s. Zeichnung rechts). Mit einem Buch funktioniert es genauso, allerdings sollten Sie sich an eine Tür oder Wand stellen, damit sich die Oberkante Ihres 'Messinstrumentes' parallel zum Boden befindet.</p><p>Messen Sie nun mit dem Zollstock vom Boden bis zur Oberkante der Wasserwaage bzw. des Buches. Der Wert, den Sie nun ermittelt haben, ist Ihre sog. Schrittlänge (Schritthöhe).",
          arm:'Unterarmlänge',
          armH:'Gemessen wird die Länge des Unterarmes vom Ellenbogengelenk bis zur Fingerspitze des Mittelfingers',
          foot:'Fußlänge',
          weight:"Gewicht",
          flexibility:"Flexibilität",
          flexibilityH:''
        },
        bike: {
          valve:'Schlauchventil',
          spokes:'Speiche',
          hub:'Vorderradnabe',
          rim:'Felge',
          tire:'Mantel',
          wheel:'Vorderrad',
          frame:'Rahmen',
          topTube:'Oberrohr',
          seatTube:'Sitzrohr',
          downTube:'Unterrohr',
          seatStay:'hinterer Streben',
          chainStay:'Kettenstrebe',
          frontDerailleur:'Schaltschwinge',
          chainRings:'Kettenblatt',
          chain:'Kette',
          pedal:'Pedal',
          crankArm:'Kulbelarm',
          handlebarGrip:'handlebar grip',
          headTube:'Steuersatz',
          shockAbsorber:'shock absorber',
          frontBreaks:'Handbremse',
          frontSet:'Lenker Anteile',
          fork:'Gabel',
          rearBreaks:'Felgenbremse',
          rearDerailleur:'Schaltschwinge',
          cogset:'Hinterradnabe',
          saddleArea: 'Sattel Anteile',
          saddle: 'Sattel',
          seatPost: 'Sattelstüze'
        },
        frame: {
          seatTube: 'Rahmenhöhe',
          seatHeight: 'Sattelhöhe',
          stack: 'Vorbaulänge',
          topTube: 'Oberrohrlänge',
          reach: 'Vorbaulänge',
          flatHandlebars: 'Einstellänge',
          saddleHandlebarDrop: 'Lenkertiefe',
          saddlePedalSeatback: 'Sattelstellung'
        }
      });
      $translateProvider.translations('cz', {
        APP_TITLE: 'Kolo',
        FOO: 'Dies ist ein Paragraph.',
        NAV_GEOMETRY:'Spočítat optimální geometrii rámu',
        NAV_SKELETON:'Rám',
        NAV_SETTINGS:'Nastavení',
        NAV_COMPONENTS:'Komponenty',
        NAV_REPORT:'Report',
        BUTTON_LANG_EN: 'anglicky',
        BUTTON_LANG_DE: 'německy',
        BUTTON_LANG_CZ: 'česky',
        BUTTON_COMPUTE:'Vypočítat',
        BUTTON_REPORT:'Uložit jako PDF',
        user:{
          FirstName:'Jméno',
          LastName:'Příjmení'
        },
        skeleton: {
          height:'výška postavy',
          heightH:'Zadejte výšku postavy (standarní výška - bez bot).',
          shoulders:'šírka ramen',
          shouldersH:'Změřte odstup mezi nejvnějšími body hrudní kosti.',
          torso:'délka trupu',
          torsoH:'Naměřte přesnou délku od hrudní kosti (těstě pod hrtanem) až k stydké kosti (cca. šířka ruky pod pupkem).',
          inseam:'délka nohy',
          inseamH:'Naměřte délku nohou od rozkroku na zem.',
          arm:'paže',
          armH:'Naměřte vzdálenost od loketního kloubu až ke konci nataženého prostředníčku.',
          foot:'velikost chodidla',
          weight:"váha",
          flexibility:"ohybnost",
          flexibilityH:'Zkuste se předklonit a položit ruce na zem (0=ke kolenům, 3= ke kotkníků, 5=koneček prstu se dotkne země, 10= celá dlaň se dotkne prstu'
        },
        bike: {
          valve:'ventílek',
          spokes:'paprsek (drát)',
          hub:'přední náboj',
          rim:'ráfek',
          tire:'plášť',
          wheel:'Kolo',
          frame:'Rám',
          topTube:'horní rámová trubka',
          seatTube:'sedlová trubka',
          downTube:'dolní rámová trubka',
          seatStay:'zadní vidlice',
          chainStay:'zadní vidlice',
          frontDerailleur:'přesmykač',
          chainRings:'převodníky',
          chain:'řetěz',
          pedal:'pedál',
          crankArm:'klika',
          handlebarGrip:'páčky měničů',
          headTube:'hlavová trubka',
          shockAbsorber:'odpružená vidlice',
          frontBreaks:'přední brzdy',
          frontSet:'Řízení',
          fork:'vidlice',
          rearBreaks:'zadní brzdy',
          rearDerailleur:'přehazovačka',
          cogset:'zadní náboj',
          saddleArea: 'Sedací část',
          saddle: 'sedlo',
          seatPost: 'sedlovka'
        },
        frame: {
          seatTube: 'sedlovka',
          seatHeight: 'výška sedla',
          stack: 'představec',
          topTube: 'horní rámová trubka',
          reach: 'představec',
          flatHandlebars: 'flat handlebars',
          saddleHandlebarDrop: 'hloubka řidítek',
          saddlePedalSeatback: 'sedlo-pedal odstup'
        }
      });
      $translateProvider.preferredLanguage('cz');
  $routeProvider.otherwise({redirectTo: '/viewBicycle'});
}])
.controller('mainCtrl', function($scope, $rootScope, $translate,$locale,$location) {
      $scope.langKey = $locale.id;
      $scope.currentView = function() {return $location.path();}

      $scope.hideToolbar = function(){
        var path = $location.path();
        //if (path === "/viewBicycle") return true;
        if (path === "/view1") return true;
        return false;
      }
      $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
      };

      $rootScope.$on('$translateChangeEnd', function (event, args) {

        console.log('new language: ', args.language);
      });


      $scope.goTo = function(path){
        $location.path(path);
      }

      $scope.navigateForward = function(){
        //$scope.second = !$scope.second;
        //$location.path("/viewBicycle");

      }
      $scope.navigateBack = function(){
        //$scope.second = !$scope.second;
        //$location.path("/view1");
      }

    })
.filter('emptyValue', function () {
  return function (input, emptySymbol) {
    if (!!!input) return emptySymbol != undefined ? emptySymbol : "---";
    return input;
  };
});


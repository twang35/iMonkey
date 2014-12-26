/*
 * TODO:
 * NOTHING! jk, so much.
 *
 * This game was proudly created on a macbook pro.
 * ... running windows
 * ... with putty installed
 * ... shelled into ubuntu
 *
 */
var app = angular.module('core', ['ui.router', 'ngResource', 'ui.bootstrap', 'LocalStorageModule']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider) {

    localStorageServiceProvider.setPrefix('cwj');

    /*
     * Default the route to home because why not?
     */
    $urlRouterProvider.otherwise("/")

    //$locationProvider.html5Mode(true)
    /*
     * page title
     */

    /*
     * Here is a list of the states and routes that will bind to the states.
     * Pretty simple to add a new state. Just append .state and copy one of
     * the examples
     *
     * You can get fancy later on and do some cool stuff like have a sub view
     * that the state will control.
     */
    //$urlRouterProvider.when('/news', '/news/world');
    $urlRouterProvider.when('/', '/lab');
    $stateProvider
        .state('lab', {
            url: "/lab",
            views: {
                slide1: {templateUrl: "app/pages/production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/lab.html"},
            }
        })
        .state('products', {
            url: "/products",
            views: {
                slide1: {templateUrl: "app/pages/production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/products.html"},
            }
        })
        .state('workforce', {
            url: "/workforce",
            views: {
                slide1: {templateUrl: "app/pages/production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/workforce.html"},
            }
        })
        .state('research', {
            url: "/research",
            views: {
                slide1: {templateUrl: "app/pages/production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/research.html"},
            }
        })
        .state('buildings', {
            url: "/buildings",
            views: {
                slide1: {templateUrl: "app/pages/production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/buildings.html"},
            }
        })
        .state('store', {
            url: "/store",
            views: {
                slide1: {templateUrl: "app/pages/production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/store.html"},
            }
        })
        .state('achievements', {
            url: "/achievements",
            views: {
                slide1: {templateUrl: "app/pages/production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/achievements.html"},
            }
        })
        .state('island', {
            url: "/island",
            views: {
                slide1: {templateUrl: "app/pages/island-production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/island.html"},
            }
        })
        .state('computer', {
            url: "/computer",
            views: {
                slide1: {templateUrl: "app/pages/production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/terminal.html"},
            }
        })
        .state('computer_program', {
            url: "/computer/{program}",
            views: {
                slide1: {templateUrl: "app/pages/production.html"},
                slide2: {templateUrl: "app/pages/messages.html"},
                slide3: {templateUrl: "app/pages/computer-program.html"},
            }
        })
});
app.controller('LabController', function($scope, MessageService, ApplicationService) {
    $scope.application = {};

    $scope.$watch(
        function () {
            return ApplicationService.data;
        },
        function (data) {
            $scope.application = data;
        },
        true
    );
    $scope.create = function() {

        var tmp = {
            name: $scope.name,
            ingredients: [$scope.item1, $scope.item2, $scope.item3],
            viability: 0,
            test: {
                tested: false,
                score: 0,
                depth: 0
            }
        };

        if (ApplicationService.addProduct(tmp)) {
            MessageService.add("You have created '" + $scope.name + "'", "history");
            //unset the items.
            $scope.item1 = null;
            $scope.item2 = null;
            $scope.item3 = null;
            $scope.name = null;
        }else{
            MessageService.add("Unable to create '" + $scope.name + "'", "error");
        }
    }

    /*
     * Modify the recipe.
     */
    $scope.modify = function() {
        var tmp = {
            name: $scope.newname,
            ingredients: [$scope.newitem1, $scope.newitem2, $scope.newitem3],
            viability: 0,
            test: {
                tested: false,
                score: 0,
                depth: 0
            }
        };

        if (ApplicationService.addProduct(tmp)) {
            $scope.application.brandModifier /= 2;
            // Unlock acheivment mixology 101.
            MessageService.add("New recipe created'" + $scope.newname + "'", "history");
            MessageService.add("People complain about the recipe change.", "error");
            //unset the items.
            $scope.newitem1 = null;
            $scope.newitem2 = null;
            $scope.newitem3 = null;
            $scope.newname = null;
        }else{
            MessageService.add("Unable to create '" + $scope.newname + "'", "error");
        }
    }
});

app.controller('BuildingsController', function($scope, MessageService, ApplicationService) {
    $scope.application = {};

    $scope.$watch(
        function () {
            return ApplicationService.data;
        },
        function (data) {
            $scope.application = data;
        },
        true
    );
    $scope.buyBuilding = function(name) {
        ApplicationService.buyBuilding(name);
    }
    $scope.sellBuilding = function(name) {
        ApplicationService.sellBuilding(name);
    }
    $scope.filterBuildings = function(w) {
        return (w.unlocked);
    }
});

app.controller('OverviewController', function($scope, ApplicationService) {
    $scope.application = {};

    $scope.$watch(
        function () { return ApplicationService.data; },
        function (data) {$scope.application = data;},
        true
    );
});

app.controller('InventoryController', function($scope, MessageService, ApplicationService) {
    // get the inventory items.
});
app.controller('ProductsController', function($scope){
    $scope.product = null;

    // get the products from the main page.
    $scope.addProduct = function() {

    }

    $scope.getProductByName = function(name) {

    }

    $scope.getProducts = function() {

    }

    $scope.setProduct = function(name) {
        return ApplicationService.getProduct(name);
    }

});
app.controller('ProductionController', function($scope, MessageService, ApplicationService) {

    $scope.application = {};
    $scope.productSet = ApplicationService.productSet;
    /*
     * 0 nothing
     * 1 making
     * 2 selling
     * 3 testing
     */
    $scope.makeQuantity = 4;

    $scope.distributing = false;
    $scope.product = {
        name: null,
        viability: 0,
        ingrediants: [],
        test: {
            tested: false,
            score: 0,
            depth: 0,
        }
    };

    $scope.$watch(
        function () { return ApplicationService.data; },
        function (data) {$scope.application = data;},
        true
    );

    $scope.newGame = function() {
    }

    /*
     * Perform an action.
     */
    $scope.getProduct = function(name) {
        return ApplicationService.getProduct(name);
    },
    $scope.getCurrentProduct = function() {
        return ApplicationService.getCurrentProduct();
    },
    $scope.make = function() {
        ApplicationService.make();
    }
    $scope.distribute = function() {
        ApplicationService.distribute();
    }
});
app.controller('MessageController', function($scope, MessageService, ApplicationService) {
    $message = {};

    /**
     * Watch the data from the service.
     */
    $scope.$watch(
        function () { return MessageService.data; },
        function (data) {$scope.message = data;},
        true
    );
    $scope.getBrandPowerMessage = function() {
        console.log("getting brand power message from service");
        return ApplicationService.getBrandPowerMessage();
    }
});
app.controller('WorkforceController', function($scope, ApplicationService, MessageService) {
    $scope.application = {};

    $scope.filterWorkforce = function(w) {
        return ($scope.application.workforceStage >= w.level);
    }
    $scope.filterWorkforceCost = function(w) {
        return (($scope.application.money > (w.cost * 4) || w.quantity >= application.maximumWorkforce));
    }
    $scope.$watch(
        function () { return ApplicationService.data; },
        function (data) {$scope.application = data;},
        true
    );

    /**
     * Method will hire a laborer
     */
    $scope.hire = function(name) {
        ApplicationService.addWorkforce(name);
    }
});
app.controller('StoreController', function($scope, ApplicationService) {
    $scope.application = {};

    $scope.$watch(
        function () { return ApplicationService.data; },
        function (data) {$scope.application = data;},
        true
    );

    $scope.filterStore = function(s) {
        console.log("filtering the store");
        return (!s.purchased && s.cost < $scope.application.money);
    }

    /**
     * Method will purchase something from the store.
     */
    $scope.purchase = function(name) {
        ApplicationService.purchase(name);
    }
});

app.controller('NavigationController', function($scope, ApplicationService) {
    $scope.application = {};
    $scope.$watch(
        function () { return ApplicationService.data; },
        function (data) {$scope.application = data;},
        true
    );
    $scope.hardReset = function() {
        ApplicationService.hardReset();
    }
});
app.controller('AchievementsController', function($scope, ApplicationService) {
    $scope.application = {};
    $scope.$watch(
        function () { return ApplicationService.data; },
        function (data) {$scope.application = data;},
        true
    );
    $scope.countTotal = function(type) {
        var c = 0;
        for(var i = 0; i < $scope.application.achievements.length; i++) {
            if ($scope.application.achievements[i].type == type) {
                c++;
            }
        }

        return c;
    }
    $scope.countUnlocked = function(type) {
        var c = 0;
        for(var i = 0; i < $scope.application.achievements.length; i++) {
            if ($scope.application.achievements[i].unlocked && $scope.application.achievements[i].type == type) {
                c++;
            }
        }

        return c;
    }
});
app.controller('TerminalController', function($scope, ApplicationService, $stateParams) {


    $scope.constructor = function() {
        if ($stateParams.program) {
            //code
        }
    }

});
app.controller('GenericController', function($scope, ApplicationService) {
    $scope.application = {};
    $scope.$watch(
        function () { return ApplicationService.data; },
        function (data) {$scope.application = data;},
        true
    );
    $scope.countTotal = function(type) {
        var c = 0;
        for(var i = 0; i < $scope.application.achievements.length; i++) {
            if ($scope.application.achievements[i].type == type) {
                c++;
            }
        }

        return c;
    }
    $scope.countUnlocked = function(type) {
        var c = 0;
        for(var i = 0; i < $scope.application.achievements.length; i++) {
            if ($scope.application.achievements[i].unlocked && $scope.application.achievements[i].type == type) {
                c++;
            }
        }

        return c;
    }
});
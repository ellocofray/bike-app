'use strict';

angular.module('myApp.cycling', [])

.factory('crossbar', [function() {
    return new BioMechanic.FrameGeometryFactory();
 }]);

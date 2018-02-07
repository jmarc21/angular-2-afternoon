angular.module('devmtnTravel').controller('locationCtrl', function($scope, mainSrvc){
    mainSrvc.getTravelInfo().then(res => {
        $scope.locations = res.data;
    })
})
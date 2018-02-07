angular.module('devmtnTravel').controller('packageCtrl', function($scope, $stateParams, mainSrvc){
    mainSrvc.getPackageInfo().then(res => {
        $scope.allPackages = res.data;

        if($stateParams.country){
            $scope.packages = $scope.allPackages.filter( package => {
                return package.country === $stateParams.country
            })
        }
    })
})  
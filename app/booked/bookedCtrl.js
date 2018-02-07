angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrvc){
    mainSrvc.getPackageInfo().then( res => {
        console.log(res)
        $scope.allPackages = res.data
        if($stateParams.id){
            $scope.packageIndex = $scope.allPackages.findIndex(function( package ){
                console.log(package)
                return package.id === parseInt($stateParams.id);
            })
            if($scope.packageIndex !== -1){
                $scope.package = $scope.allPackages[$scope.packageIndex];
            }
        }
    })
})  
angular.module('ScopeDemo',[])
    .controller('ScopeDemoController',['$scope',function($scope){
        $scope.title="Magic of Scope In Directive";
        setTimeout(function(){
            console.log('Set Timeout called-------------');
            $scope.title='Title is changed by Controller scope';
            $scope.$digest();
        },3000);
    }])
    .directive('directiveScopeValueIsFalse', function () {
        return {
            scope : false, // we could leave this out, since it's the default
            link : function ($scope, $element, $attrs) {
                console.log('Title in directive---------------',$scope.title);
                setTimeout(function(){
                    console.log('Set Timeout called-------------');
                    $scope.title = 'Title is changed by Directive scope where scope is false';
                    $scope.$digest();
                },7000);
            }
        };
    })
    .directive('directiveScopeValueIsTrue', function () {
        return {
            scope : true,
            link : function ($scope, $element, $attrs) {
                console.log('Title in directive---------------',$scope.title);
                setTimeout(function(){
                    console.log('Set Timeout called-------------');
                    $scope.title = 'Title is changed by Directive scope where scope is true';
                    $scope.$digest();
                },10000);
            }
        };
    })
    .directive('myComponent', function () {
        return {
            restrict:'E',
            scope : {
                'twoWayBindedTitle':'=newTitle',
                'oneWayBindedTitle':'@readOnlyTitle'
            },
            link : function ($scope, $element, $attrs) {
                console.log('Title in directive-------------in object--',$scope);
                setTimeout(function(){
                    console.log('Set Timeout called------------object-----------in Object scope');
                    $scope.twoWayBindedTitle = 'Title is changed by Directive scope where scope is object';
                    $scope.$digest();
                },13000);
            },
            templateUrl:'component'
        };
    });

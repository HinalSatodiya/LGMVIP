let app = angular.module("todoapp",[]);
    app.controller("todoCtrl", function($scope){
        $scope.taskDesc = "";
        $scope.tasklist= [];
    
    $scope.addtask = function(){
    if($scope.taskDesc){
        $scope.tasklist.push({taskDesc : $scope.taskDesc, status : false});
        }
        $scope.taskDesc="";
     }

     $scope.deletetask = function(idx){
        $scope.tasklist.splice(idx,1)
     }

     $scope.remainingCount = function()
     {
        let remainingTaskCount = 0;
        $scope.tasklist.forEach(element => {
        if(!element.status){
        remainingTaskCount++;
     }
    });
    return remainingTaskCount;
     }  
});
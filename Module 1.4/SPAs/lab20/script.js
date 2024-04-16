var myModule = angular.module("myModule", []);
    var myController = function ($scope) {
        $scope.students = [
            { name: "Jon", course: "Finance" },
            { name: "Sasha", course: "Marketing"},
            { name: "Sean", course: "Planning" },
            { name: "Chris", course: "Networking"}
        ];
        $scope.updateCourse = function () {
            //alert(student.name + "\n" + student.course);
        }
    }
myModule.controller("myController", myController);

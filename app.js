angular.module('myApp', ['ui.bootstrap', 'as.sortable', 'ngSQLite'])
    .controller('myCtrl', function($scope, $SQLite) {
        var i;
        $scope.itemsList = {
            items1: [],
            items2: []
        };

        var modal = document.getElementById('myModal');

        $scope.itemsList.items1.push({ Id: 1, Label: 'Paid Link', Page: 'PaidLink' });
        $scope.itemsList.items1.push({ Id: 4, Label: 'Organic Link', Page: 'OrganicLink' });
        $scope.itemsList.items1.push({ Id: 3, Label: 'Paid Video', Page: 'PaidVideo' });
        $scope.itemsList.items1.push({ Id: 2, Label: 'Organic Video', Page: 'OrganicVideo' });
        $scope.itemsList.items1.push({ Id: 5, Label: 'Programmatic', Page: 'Programmatic' });
        $scope.itemsList.items1.push({ Id: 6, Label: 'Best of Web', Page: 'BestOfWeb' });
        $scope.itemsList.items1.push({ Id: 7, Label: 'Subscriptions', Page: 'Subscriptions' });
        $scope.itemsList.items1.push({ Id: 8, Label: 'Comments', Page: 'Comments' });
        $scope.itemsList.items1.push({ Id: 9, Label: 'Placement', Page: 'Placement' });

        $scope.itemsList.items2.push({ Id: 9, Label: 'Placement', Page: 'Placement' });

        $scope.sortableOptions = {
            containment: '#sortable-container',
            allowDuplicates: true
        };

        $scope.sortableCloneOptions = {
            containment: '#sortable-container',
            clone: true
        };

        $scope.closeItem = function(index) {
            $scope.itemsList.items2.splice(index, 1);
        }

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.reset = function(ev) {
            modal.style.display = "block";
        }

        $scope.close = function() {
            modal.style.display = "none";
        }

        $scope.yes = function() {
            $scope.itemsList.items2 = [];
            $scope.itemsList.items2.push({ Id: 9, Label: 'Placement', Page: 'Placement' });
            modal.style.display = "none";
            localStorage.setItem('order', JSON.stringify($scope.itemsList.items2));
            document.getElementById('render-frame').contentWindow.location.reload();
        }

        localStorage.removeItem('order');
        $scope.save = function() {
            localStorage.setItem('order', JSON.stringify($scope.itemsList.items2));
            document.getElementById('render-frame').contentWindow.location.reload();
            var iframe = document.getElementById('render-frame');
            var childDocument = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
            childDocument.documentElement.scrollTop = 0;
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    });
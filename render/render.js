angular.module('myRender', ['ngSQLite', 'ui.swiper'])
    .controller('myRenderCtrl', function($scope, $SQLite) {


        $scope.CardItems = {
            'OrganicLink': [
                { Id: 1, content: 'I Covered The Rajneesh Cult. Here’s What ‘Wild Wild Country’ Leaves Out', content2: '', content3: '', content4: '', Time: '', Logo: 'NYNEWS' },
                { Id: 2, content: 'Hard Rock Atlantic City will feature iconic memorabilia from MJ, Prince and others', content2: '', content3: '', content4: '', Time: '', Logo: 'NYNEWS' },
                { Id: 3, content: 'Cuomo targets eight state Senate Republicans in new ads pushing gun control bill', content2: '', content3: '', content4: '', Time: '', Logo: 'NYNEWS' },
                { Id: 4, content: 'Signs of ADHD Can Be Different in Girls, New Study Shows', content2: '', content3: '', content4: '', Time: '', Logo: 'NYNEWS' },
            ],
            'BestOfWeb': [
                { Id: 1, content: 'North Korea Has Promised to Denuclearize Lots of Times Already', content2: '', content3: '', content4: '', Time: '', Logo: 'Wired.png' },
                { Id: 2, content: 'IQ Scores are Falling and Have Been for Decades, New Study Finds', content2: '', content3: '', content4: '', Time: '', Logo: 'CNN.png' },
                { Id: 3, content: 'At the U.S. Border, Asylum Seekers Fleeing Violence are Told to Come Back Later', content2: '', content4: '', content3: '', Time: '', Logo: 'washPost.png' },
                { Id: 4, content: 'Inside Amazon’s $3.5 Million Competition to Build Your Future AI Friend', content2: '', content3: '', content4: '', Time: '', Logo: 'Verge.png' },
            ],
            'OrganicVideo': [
                { Id: 1, content: 'A New Approach to Cybersecurity: Let the Hackers In ', content2: 'Because You Watched', content3: '“How to Keep Your Identity Safe”', content4: '', Time: '7:34', Logo: 'NYNEWS' },
                { Id: 2, content: 'Memorable Moments from the Historic Singapore Summit', content2: 'Because You Watched', content3: '“The Promises Trump Kept”', content4: '', Time: '3:56', Logo: 'NYNEWS' },
                { Id: 3, content: 'NYC Mesh: A Non-Profit Seeks to Get Back to the Original Spirit of the Internet', content2: 'Because You Watched Something in #fashion', content3: '', content4: '', Time: '3:23', Logo: 'NYNEWS' },
            ],
            'PaidVideo': [
                { Id: 1, content: 'How  Noise Pollution is Ruining our Hearing in a Matter of Minutes', content2: '', content3: '', content4: '1', Time: '5:22', Logo: 'Culture Crunch' },
                { Id: 2, content: '20 Countries Where $200K is Enough to Retire', content2: '', Time: '6:52', content3: '', content4: '1', Logo: 'MoneyWise' },
                { Id: 3, content: 'Never Pay Retail Price Again with These Shopping Apps (As Seen on the Today Show)', content3: '', content4: '1', content2: '', Time: '4:42', Logo: 'HONEY' },
            ],
            'Programmatic': [
                { Id: 1, content: 'Build Your Own Ideal Engagement Ring with the Highest-Quality Diamonds', content2: '', content3: '', content4: '1', Time: '', Logo: 'BlueNile' },
                { Id: 2, content: '12 Essential Tips for Cruising with a Toddler', content2: '', content3: '', content4: '1', Time: '', Logo: 'Norwegian Cruise Line' },
                { Id: 3, content: 'Lilly Pulitzer’s Newest Collection is Here! See the Latest in Resort Fashion Today', content2: '', content3: '', content4: '1', Time: '', Logo: 'Lilly Pulitzer' },
            ],
            'PaidLink': [
                { Id: 1, content: 'Been Traumatized? Here\'s How PTSD Rewires the Brain', content2: '', content3: '', content4: '1', Time: '', Logo: 'Health Central' },
                { Id: 2, content: 'Meet the Startup that’s Disupting the Oral Care Aisle', content2: '', content3: '', content4: '1', Time: '', Logo: 'Daily Dose' },
                { Id: 3, content: 'How \'The Sopranos\' and \'The Wire\' paved the way for peak TV', content2: '', content4: '1', content3: '', Time: '', Logo: 'Pop Ice' },
            ],
            'Comments': [
                { Id: 1, content: 'Ny News', content2: 'People are talking about:', content3: 'Disney selling GT New\'s longtime headquarters', content4: 'See More Comment', Time: '', Logo: 'NYNEWS.svg' }
            ],
            'Subscriptions': [
                { Id: 1, content: 'Washington Post Herald', content2: 'Stay Ahead With America\'s Most Trusted Newspaper', content3: '', content4: 'Subscribe to WPH', Time: '', Logo: 'WPH.svg' },
                { Id: 2, content: 'New York Tribune', content2: 'The strength of facts. The power of truth. Reporting stories you can trust no matter where you are.', content3: '', content4: 'Subscribe to NYT', Time: '', Logo: 'NY.png' }
            ],
        }

        $scope.itemsList = {
            items2: []
        };

        var tmp = localStorage.getItem('order');
        if (tmp === null) {
            console.log('null--------------->>');
        } else {
            console.log('not null--------------->>');
            $scope.itemsList.items2 = JSON.parse(tmp);
            $scope.showItems = [];
            for (let index = 0; index < $scope.itemsList.items2.length; index++) {
                var flag = 0;
                for (let n = 0; n < $scope.showItems.length; n++) {
                    if ($scope.showItems[n].Id == $scope.itemsList.items2[index].Id) {
                        flag++;
                    }
                }
                if ($scope.itemsList.items2[index].Page == 'Comments') {
                    flag = flag % 1;
                } else if ($scope.itemsList.items2[index].Page == 'Subscriptions') {
                    flag = flag % 2;
                } else {
                    flag = flag % 3;
                }

                $scope.showItems.push({
                    Id: $scope.itemsList.items2[index].Id,
                    Label: $scope.itemsList.items2[index].Label,
                    Page: $scope.itemsList.items2[index].Page,
                    Order: flag
                });
            }
            console.log("------->>");
            console.log($scope.showItems);
        }
    });
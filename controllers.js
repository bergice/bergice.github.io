var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('PortfolioListCtrl', function ($scope) {
    $scope.items = [
        {
            'name': 'bergedalen.com',
            'snippet': 'Landing page for a neuropsychologist business.',
            'image': "preview_bergedalen.png",
            'tech': ["HTML5", "Bootstrap"]
     },
        {
            'name': 'SwiftBooks',
            'snippet': 'An innovative and easy to use e - book reader that gives you a huge library of books at the tip of your finger.',
            'image': "preview_swiftbooks.png",
            'tech': ["Java", "Android Development Kit"]
        },
        {
            'name': 'RubbleRun',
            'snippet': 'Fun and addicting retro arcade game for Android about dodging incoming rocks.',
            'image': "preview_rubblerun.png",
            'tech': ["Java", "libGDX"]
        },
        {
            'name': 'pocketbike',
            'snippet': 'Racing game where you play as a motorbike rider where you must navigate through a bunch of levels without hitting your head.Features online highscores, replays, level editor and sharing of levels.',
            'image': "preview_pocketbike.png",
            'tech': ["Java", "libGDX"]
        },
        {
            'name': 'Web EMS',
            'snippet': 'Web EMS is a full fledged employee management system for keeping track of employee work hours, managing company branches, printing complete payrolls and communicating easily.',
            'image': "preview_webems.png",
            'tech': ["PHP"]
        },
        {
            'name': 'Small Markdown Editor',
            'snippet': 'A fast and easy to use markdown editor without any hassle.',
            'image': "preview_small-markdown-editor.png",
            'tech': ["Node.js", "NW.js"]
        }
  ];
});

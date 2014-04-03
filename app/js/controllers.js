'use strict';

/* Controllers */

angular.module('learnKana.controllers', [])
  .controller('homeCtrl', ['$scope', function($scope) {

  }])
  .controller('hiraganaCtrl', ['$scope', function($scope) {
    var hai_audio = new Audio('sound/hai.mp3');
    var iie_audio = new Audio('sound/iie.mp3');

    $scope.hiragana = [
      ['a', 'あ'],
      ['i', 'い'],
      ['u', 'う'],
      ['e', 'え'],
      ['o', 'お'],
      ['ka', 'か'],
      ['ki', 'き'],
      ['ku', 'く'],
      ['ke', 'け'],
      ['ko', 'こ'],
      ['sa', 'さ'],
      ['shi', 'し'],
      ['su', 'す'],
      ['se', 'せ'],
      ['so', 'そ'],
      ['ta', 'た'],
      ['chi', 'ち'],
      ['tsu', 'つ'],
      ['te', 'て'],
      ['to', 'と'],
      ['na', 'な'],
      ['ni', 'に'],
      ['nu', 'ぬ'],
      ['ne', 'ね'],
      ['no', 'の'],
      ['ha', 'は'],
      ['hi', 'ひ'],
      ['fu', 'ふ'],
      ['he', 'へ'],
      ['ho', 'ほ'],
      ['ma', 'ま'],
      ['mi', 'み'],
      ['mu', 'む'],
      ['me', 'め'],
      ['mo', 'も'],
      ['ya', 'や'],
      ['yu', 'ゆ'],
      ['yo', 'よ'],
      ['ra', 'ら'],
      ['ri', 'り'],
      ['ru', 'る'],
      ['re', 'れ'],
      ['ro', 'ろ'],
      ['wa', 'わ'],
      ['wo', 'を'],
      ['n', 'ん'],
    ];
    $scope.mistakes = [];

    $scope.selectHiragana = function() {
      var rand = Math.floor(Math.random() * $scope.hiragana.length);
      $scope.currentHiragana = $scope.hiragana[rand][1];
      $scope.result = $scope.hiragana[rand][0];
    };

    $scope.msg = '';
    $scope.checkGuess = function(guess) {
      if (guess === $scope.result) {
        $scope.msg = '';
        hai_audio.play();
        $scope.kanacounter -= 1;
        $scope.guess = '';
        $scope.selectHiragana();
      } else {
        $scope.msg = 'いいえ!';
        iie_audio.play();
        if ($scope.mistakes.indexOf($scope.currentHiragana) == -1) {
          $scope.mistakes.push($scope.currentHiragana);
        }
      }
    }

    $scope.selectHiragana();
    $scope.kanacounter = 50; // initialize the counter

  }])
  .controller('katakanaCtrl', ['$scope', function($scope) {

  }]);

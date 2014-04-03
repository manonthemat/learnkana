'use strict';

/* Controllers */

angular.module('learnKana.controllers', [])
  .controller('homeCtrl', ['$scope', function($scope) {

  }])
  .controller('kanaCtrl', ['$scope', '$location', function($scope, $location) {
    var hai_audio = new Audio('sound/hai.mp3');
    var iie_audio = new Audio('sound/iie.mp3');

    $scope.title = "ひらがな";
    var hiragana = [
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
    var katakana = [
      ['a', 'ア'],
      ['i', 'イ'],
      ['u', 'ウ'],
      ['e', 'エ'],
      ['o', 'オ'],
      ['ka', 'カ'],
      ['ki', 'キ'],
      ['ku', 'ク'],
      ['ke', 'ケ'],
      ['ko', 'コ'],
      ['sa', 'サ'],
      ['shi', 'シ'],
      ['su', 'ス'],
      ['se', 'セ'],
      ['so', 'ソ'],
      ['ta', 'タ'],
      ['chi', 'チ'],
      ['tsu', 'ツ'],
      ['te', 'テ'],
      ['to', 'ト'],
      ['na', 'ナ'],
      ['ni', 'ニ'],
      ['nu', 'ヌ'],
      ['ne', 'ネ'],
      ['no', 'ノ'],
      ['ha', 'ハ'],
      ['hi', 'ヒ'],
      ['fu', 'フ'],
      ['he', 'ヘ'],
      ['ho', 'ホ'],
      ['ma', 'マ'],
      ['mi', 'ミ'],
      ['mu', 'ム'],
      ['me', 'メ'],
      ['mo', 'モ'],
      ['ya', 'ヤ'],
      ['yu', 'ユ'],
      ['yo', 'ヨ'],
      ['ra', 'ラ'],
      ['ri', 'リ'],
      ['ru', 'ル'],
      ['re', 'レ'],
      ['ro', 'ロ'],
      ['wa', 'ワ'],
      ['wo', 'ヲ'],
      ['n', 'ン'],
    ];
    if ($location.path().indexOf("hiragana") != -1) {
      $scope.kana = hiragana;
      $scope.kanatype = "hiragana";
    } else {
      $scope.kana = katakana;
      $scope.kanatype = "katakana";
    }

    $scope.mistakes = [];

    $scope.selectKana = function() {
      var rand = Math.floor(Math.random() * $scope.kana.length);
      $scope.currentKana = $scope.kana[rand][1];
      $scope.result = $scope.kana[rand][0];
    };

    $scope.msg = '';
    $scope.checkGuess = function(guess) {
      if (guess === $scope.result) {
        $scope.msg = '';
        hai_audio.play();
        $scope.kanacounter -= 1;
        $scope.guess = '';
        $scope.selectKana();
      } else {
        $scope.msg = 'いいえ!';
        iie_audio.play();
        if ($scope.mistakes.indexOf($scope.currentKana) == -1) {
          $scope.mistakes.push($scope.currentKana);
        }
      }
    }

    $scope.selectKana();
    $scope.kanacounter = 50; // initialize the counter

  }]);

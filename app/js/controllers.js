'use strict';

/* Controllers */

angular.module('learnKana.controllers', [])
  .controller('homeCtrl', ['$scope', function($scope) {

  }])
  .controller('kanaCtrl', ['$scope', '$location', function($scope, $location) {
    var hai_audio = new Audio('sound/hai.mp3');
    var iie_audio = new Audio('sound/iie.mp3');

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
      ['ga', 'が'],
      ['gi', 'ぎ'],
      ['gu', 'ぐ'],
      ['ge', 'げ'],
      ['go', 'ご'],
      ['za', 'ざ'],
      ['ji', 'じ'],
      ['zu', 'ず'],
      ['ze', 'ぜ'],
      ['zo', 'ぞ'],
      ['da', 'だ'],
      ['ji', 'ぢ'],
      ['dzu', 'づ'],
      ['de', 'で'],
      ['do', 'ど'],
      ['ba', 'ば'],
      ['bi', 'び'],
      ['bu', 'ぶ'],
      ['be', 'べ'],
      ['bo', 'ぼ'],
      ['pa', 'ぱ'],
      ['pi', 'ぴ'],
      ['pu', 'ぷ'],
      ['pe', 'ぺ'],
      ['po', 'ぽ'],
      ['kya', 'きゃ'],
      ['kyu', 'きゅ'],
      ['kyo', 'きょ'],
      ['sha', 'しゃ'],
      ['shu', 'しゅ'],
      ['sho', 'しょ'],
      ['cha', 'ちゃ'],
      ['chu', 'ちゅ'],
      ['cho', 'ちょ'],
      ['nya', 'にゃ'],
      ['nyu', 'にゅ'],
      ['nyo', 'にょ'],
      ['hya', 'ひゃ'],
      ['hyu', 'ひゅ'],
      ['hyo', 'ひょ'],
      ['mya', 'みゃ'],
      ['myu', 'みゅ'],
      ['myo', 'みょ'],
      ['rya', 'りゃ'],
      ['ryu', 'りゅ'],
      ['ryo', 'りょ']
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
      ['ga', 'ガ'],
      ['gi', 'ギ'],
      ['gu', 'グ'],
      ['ge', 'ゲ'],
      ['go', 'ゴ'],
      ['za', 'ザ'],
      ['ji', 'ジ'],
      ['zu', 'ズ'],
      ['ze', 'ゼ'],
      ['zo', 'ゾ'],
      ['da', 'ダ'],
      ['ji', 'ヂ'],
      ['dzu', 'ヅ'],
      ['de', 'デ'],
      ['do', 'ド'],
      ['ba', 'バ'],
      ['bi', 'ビ'],
      ['bu', 'ブ'],
      ['be', 'ベ'],
      ['bo', 'ボ'],
      ['pa', 'パ'],
      ['pi', 'ピ'],
      ['pu', 'プ'],
      ['pe', 'ペ'],
      ['po', 'ポ'],
      ['kya', 'キャ'],
      ['kyu', 'キュ'],
      ['kyo', 'キョ'],
      ['sha', 'シャ'],
      ['shu', 'シュ'],
      ['sho', 'ショ'],
      ['cha', 'チャ'],
      ['chu', 'チュ'],
      ['cho', 'チョ'],
      ['nya', 'ニャ'],
      ['nyu', 'ニュ'],
      ['nyo', 'ニョ'],
      ['hya', 'ヒャ'],
      ['hyu', 'ヒュ'],
      ['hyo', 'ヒョ'],
      ['mya', 'ミャ'],
      ['myu', 'ミュ'],
      ['myo', 'ミョ'],
      ['rya', 'リャ'],
      ['ryu', 'リュ'],
      ['ryo', 'リョ']
    ];
    if ($location.path().indexOf("hiragana") != -1) {
      $scope.title = "ひらがな";
      var kana = hiragana;
      $scope.kanatype = "hiragana";
    } else {
      $scope.title = "カタカナ";
      var kana = katakana;
      $scope.kanatype = "katakana";
    }

    $scope.mistakes = [];

    var selectKana = function() {
      var rand = Math.floor(Math.random() * kana.length);
      $scope.currentKana = kana[rand][1];
      $scope.result = kana[rand][0];
    };

    $scope.msg = false;
    $scope.checkGuess = function() {
      if ($scope.guess.toLowerCase() === $scope.result) {
        $scope.msg = false;
        hai_audio.play();
        $scope.kanacounter -= 1;
        $scope.guess = '';
        selectKana();
      } else {
        $scope.msg = true;
        iie_audio.play();
        if ($scope.mistakes.indexOf($scope.currentKana) == -1) {
          $scope.mistakes.push($scope.currentKana);
        }
      }
    }

    $scope.restart = function() {
      $scope.kanacounter = 50;
      $scope.mistakes = [];
      selectKana();
    }

    selectKana();
    $scope.kanacounter = 50; // initialize the counter

  }]);

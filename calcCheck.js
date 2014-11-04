$(function() {
    var calculateICNumber = function (id) {
    var matches = id.toUpperCase().match(/^S\d{7}|T\d{7}|F\d{7}|G\d{7}/);
    if (matches) {
      var match = matches[0];

      var weights = {
            S: [2, 7, 6, 5, 4, 3, 2, 0],
            T: [2, 7, 6, 5, 4, 3, 2, 4],
            F: [2, 7, 6, 5, 4, 3, 2, 0],
            G: [2, 7, 6, 5, 4, 3, 2, 4],
            }[match[0]];

      for (var i = 0, sum = 0, digits = match.slice(-7); i < 7; i++) {
        sum += weights[i] * digits[i];
      }
      sum += weights[7];

      if(match[0] == "S" || match[0] == "T")
        return match + 'JZIHGFEDCBA'[sum % 11];
      else
        return match + 'XWUTRQPNMLK'[sum % 11];
    }
};

$('input').on('change keyup', function () {
    $('span').text(calculateICNumber(this.value) || 'Invalid input!');
    });
});

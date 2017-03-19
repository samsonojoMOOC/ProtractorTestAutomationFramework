
  this.clickWhenClickable = function(element) {
  return browser.wait(function() {
    return element.click().then(
      function() {
        return true;
      },
      function() {
        console.log('not clickable');
        return false;
      });
    });
  };


module.exports = clickWhenClickable;
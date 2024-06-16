(function () {
  /**
  @author: zy
  @email:simpleyoung1@outlook.com
  **/
  'use strict';
  console.log(122);

  function enableTextSelection() {
    var elements = document.querySelectorAll('.post, .post_page, .forbidd');
    elements.forEach(function (element) {
      element.style.userSelect = 'text';
    });
  }
  enableTextSelection()

  // function createEnableButton() {
  //     var button = document.createElement('button');
  //     button.textContent = 'Enable Text Selection';
  //     button.style.position = 'fixed';
  //     button.style.top = '10px';
  //     button.style.right = '10px';
  //     button.addEventListener('click', enableTextSelection);
  //     document.body.appendChild(button);
  // }

  // createEnableButton();
})();
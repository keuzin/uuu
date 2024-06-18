// JavaScript 파일 (예: script.js)
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');
    const hiddenText = document.querySelector('.hidden-text');
  
    imageContainer.addEventListener('mouseenter', function() {
      hiddenText.style.visibility = 'visible'; // 마우스를 가져다 대면 텍스트가 나타남
    });
  
    imageContainer.addEventListener('mouseleave', function() {
      hiddenText.style.visibility = 'hidden'; // 마우스를 요소 밖으로 이동하면 텍스트가 숨겨짐
    });
  });
  
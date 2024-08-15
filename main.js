'use strict';
{
  const button = document.querySelector("#btn");
  const moreText = document.querySelector("#more");

  button.addEventListener('click', () => {
    const btnText = button.textContent;

    if (btnText === 'もっと読む') {
      moreText.classList.add('appear');
      button.textContent = '閉じる';
    } else if (btnText === '閉じる') {
      moreText.classList.remove('appear');
      button.textContent = 'もっと読む';
    }
    
  });


  // 要素を取得した後に、classList.toggle(' クラス名 ') とすれば、このクラスが付いていなかったら付ける、付いていたら外すという意味になる
}

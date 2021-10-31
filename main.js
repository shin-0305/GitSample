    // 必要なHTML要素の取得
    const wrap = document.getElementById('wrap');
    const start = document.getElementById('start');
    const reset = document.getElementById('reset');

    const textLists = [
      'Hello World',
      'This is my App',
      'How are you?'
    ]; // 複数のテキストを格納する配列

    let checkTexts = [];

    const createText = () => {
      const p = document.getElementById('text');
      const rnd = Math.floor(Math.random() * textLists.length);
      p.textContent = '';
      checkTexts = textLists[rnd].split('').map(value => {
        const span = document.createElement('span');
        span.textContent = value;
        p.appendChild(span);
        return span;
      })
    }; // ランダムなテキストを画面に表示する
    // createText関数を実行する
    createText();

    let score = 0;

    const keyDown = e => {
      if (e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-color';
        checkTexts.shift();

        score++;
        if (!checkTexts.length) createText();
      }
    }; // キーイベント＆入力判定処理

    const rankCheck = rank => {
      let text = '';
      if (score < 100) {
        text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
      } else if (score < 200) {
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
      } else if (score < 300) {
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
      } else if (score >= 300) {
        text = `あなたのランクはSです。\nおめでとうございます！`;
      }
      return `${score}文字打てました！\n${text}\n【OK】リトライ／【キャンセル】終了`;
    };

    const gameOver = id => {
      clearInterval(id);
      const result = confirm(rankCheck(score));
      if (result) window.location.reload();
    }; // ゲームの終了処理

    const timer = () => {
      let time = 30;
      // タイマー要素を取得する
      const count = document.getElementById('count');

      const id = setInterval(() => {
        if (time <= 0) gameOver(id);

        count.textContent = time--;

        // 1秒ごとに実行する処理を書く

      }, 1000);
    }; // タイマー処理


    start.addEventListener('click', () => {
      timer();

      createText();
      start.style.display = 'none';
      document.addEventListener('keydown', keyDown);
    }); // ゲームスタート時の処理
    function gemefinish(){
      document.getElementById("retry").style.visibility = 'visible';
    }
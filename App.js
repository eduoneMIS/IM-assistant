var big_title = document.getElementsByClassName("big-title")[0];
var qustion = document.getElementsByClassName("qustion")[0];
var memo = document.getElementsByClassName("memo")[0];

// 開始資訊助理
problum_list();

// 問題清單
function problum_list() {
  const study123_softwareBTN = document.getElementById("study123-software");
  const power_BTN = document.getElementById("power-failure");
  // const emojis = ["o((>ω< ))o", "ᓚᘏᗢ", "(●'◡'●)", "╰(*°▽°*)╯", "ヾ(≧ ▽ ≦)ゝ", "(•ˋ _ ˊ•)"];
  // const emojis = ['😃😄😊', '😎', '🙂', '🐱👀😍', '😍', '👍', '🐕', '🐱', '🦴', '😪', '👻', '🐋', '🐳', '💕', '😍', '😎', '💖', '🤩', '🐕👀💕🦴', '👀', '✌️'];
  // const randomIndex = Math.floor(Math.random() * emojis.length);
  // const randomEmoji = emojis[randomIndex];
  memo.innerHTML =
    '<p class="note"><span id="note"></span><span id="emoji"></span></p>';
  // var emoji = document.getElementById("emoji");
  // emoji.textContent = `${randomEmoji}`;
  note.innerHTML = `若您已了解步驟可更快速除錯 <a href="./support-conponent/im-support.html" target="_blank">官方技術支援網站</a>`;
  power_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    power_cut();
  });
  study123_softwareBTN.addEventListener("click", function (event) {
    event.preventDefault();
    study123_software();
  });
}

// power問題
function power_cut() {
  big_title.innerHTML = `<i class='bx bxs-traffic-barrier'></i>
    <h2 class="title-text">您當前的電力狀態</h2>`;
  qustion.innerHTML = `
    <button class="choose" id="ready-to-cut"><i class='bx bx-shield-quarter'></i><p>將要停電</p></button>
    <button class="choose" id="power-restart"><i class='bx bx-reset'></i><p>電力已恢復</p></button>
    `;
  var power_restart = document.getElementById("power-restart");
  var ready_to_cut = document.getElementById("ready-to-cut");
  memo.innerHTML = '<p class="note"><span id="note"></span></p>';
  var note = document.getElementById("note");
  note.innerHTML = `您當前的電力狀態 <a href="https://nds.taipower.com.tw/ndsWeb/ndft112.aspx" target="_blank">台電停電查詢系統</a>`;
  power_restart.addEventListener("click", function (event) {
    event.preventDefault();
    all();
  });
  ready_to_cut.addEventListener("click", function (event) {
    event.preventDefault();
    power_readToCut();
  });
}

// 關閉容器
function power_readToCut() {
  big_title.innerHTML = `<i class='bx bxl-docker' ></i>
    <h2 class="title-text">請將容器關閉</h2>`;
  qustion.innerHTML = `
    <button class="choose" id="docker-off-faild"><i class='bx bx-toggle-right' ></i><p>無法關閉</p></button>
    <button class="choose" id="power-restart"><i class='bx bx-check' ></i><p>已關閉</p></button>
    `;
  var power_restart = document.getElementById("power-restart");
  var docker_off_faild = document.getElementById("docker-off-faild");
  note.innerHTML = `技術支援網站指引 <a href="./support-conponent/study123.html#overlist01" target="_blank">NAS容器如何關閉</a>`;
  power_restart.addEventListener("click", function (event) {
    event.preventDefault();
    shoutDownNas();
  });
  docker_off_faild.addEventListener("click", function (event) {
    event.preventDefault();
    fail();
  });
}

// 將NAS關機
function shoutDownNas() {
  big_title.innerHTML = `<i class='bx bx-power-off'></i>
    <h2 class="title-text">請長按NAS主機電源鍵進行關機</h2>`;
  qustion.innerHTML = `
    <button class="choose" id="shout-down-faild"><i class='bx bxs-error-circle'></i><p>無法關機</p></button>
    <button class="choose" id="power-off"><i class='bx bx-check' ></i><p>已關機</p></button>
    `;
  var power_off = document.getElementById("power-off");
  var shout_down_faild = document.getElementById("shout-down-faild");
  note.innerHTML = `技術支援網站指引 <a href="./support-conponent/study123.html#overlist01" target="_blank">如何關機</a>`;
  shout_down_faild.addEventListener("click", function (event) {
    event.preventDefault();
    fail();
  });
  power_off.addEventListener("click", function (event) {
    event.preventDefault();
    done();
  });
}

// 萬試通無法開啟 問題
function study123_software() {
  big_title.innerHTML = `<i class='bx bx-log-in'></i>
    <h2 class="title-text">無法登入萬試通</h2>`;
  qustion.innerHTML = `
    <button class="choose" id="all"><i class='bx bx-group'></i><p>全館電腦</p></button>
    <button class="choose" id="only"><i class='bx bx-user'></i><p>少數幾台電腦</p></button>
    `;
  const all_BTN = document.getElementById("all");
  const only_BTN = document.getElementById("only");
  memo.innerHTML = '<p class="note"><span id="note"></span></p>';
  var note = document.getElementById("note");
  note.innerHTML = `請告訴我您無法登入的程度`;
  all_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    all();
  });
  only_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    only();
  });
}

// 單一電腦
function only() {
  big_title.innerHTML = `<i class='bx bx-user-circle' ></i>
    <h2 class="title-text">萬試通登入帳密是否輸入正確</h2>`;
  qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>已正常登入</p></button>
    <button class="choose" id="true"><i class='bx bx-error' ></i><p>仍無法登入</p></button>
    `;
  const true_BTN = document.getElementById("true");
  var done_BTN = document.getElementById("done");
  note.innerHTML = `技術支援網站指引 <a href="./support-conponent/study123.html#step5" target="_blank">如何確認學生的帳號密碼?</a>`;
  done_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    done();
  });
  true_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    reset_software();
  });
}

// 全館電腦
function all() {
  big_title.innerHTML = `<i class='bx bx-hdd'></i>
    <h2 class="title-text">NAS主機是否已開機</h2>`;
  qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>已可登入</p></button>
    <button class="choose" id="cantTurnOn"><i class='bx bx-power-off'></i><p>無法開機</p></button>
    <button class="choose" id="on"><i class='bx bx-error' ></i><p>無法登入</p></button>
    `;
  note.innerHTML = `技術支援網站指引 <a href="./support-conponent/study123.html#step2" target="_blank">NAS主機怎麼開機</a>`;

  const on_BTN = document.getElementById("on");
  const cantTurnOn_BTN = document.getElementById("cantTurnOn");
  const done_BTN = document.getElementById("done");

  done_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    done();
  });
  on_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    docker_on();
  });
  cantTurnOn_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    cant();
  });
}

// NAS無法正常開機
function cant() {
  big_title.innerHTML = `<i class='bx bxs-plug'></i>
    <h2 class="title-text">確認NAS電源已插妥及地區供電</h2>`;
  qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>已正常開機</p></button>
    <button class="choose" id="cant"><i class='bx bx-error' ></i><p>仍無法開機</p></button>
    `;
  var done_BTN = document.getElementById("done");
  const cant_BTN = document.getElementById("cant");
  note.innerHTML = `技術支援網站指引 <a href="./support-conponent/study123.html#step1" target="_blank">NAS主機怎麼開機</a><a href="https://nds.taipower.com.tw/ndsWeb/ndft112.aspx" target="_blank">台電停電查詢系統</a>`;

  done_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    docker_on();
  });
  cant_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    fail();
  });
}
// 開啟容器
function docker_on() {
  big_title.innerHTML = `<i class='bx bxl-docker'></i>
    <h2 class="title-text">請開啟容器</h2>`;
  qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>已可登入</p></button>
    <button class="choose" id="cantTurnOn-docker"><i class='bx bx-toggle-left' ></i><p>無法開啟</p></button>
    <button class="choose" id="on-docekr"><i class='bx bx-error' ></i><p>仍無法登入</p></button>
    `;
  note.innerHTML = `技術支援網站指引 <a href="./support-conponent/study123.html#step3" target="_blank">怎麼開啟容器</a>`;
  const dockerOn_BTN = document.getElementById("on-docekr");
  const cantTurnOn_docker_BTN = document.getElementById("cantTurnOn-docker");
  const done_BTN = document.getElementById("done");

  done_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    done();
  });
  dockerOn_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    only();
  });
  cantTurnOn_docker_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    fail();
  });
}
// 更換軟體
function reset_software() {
  big_title.innerHTML = `<i class='bx bx-download'></i>
    <h2 class="title-text">重新安裝Study123檔案</h2>`;
  qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>已正常登入</p></button>
    <button class="choose" id="reset"><i class='bx bx-error' ></i><p>仍無法登入</p></button>
    `;
  var done_BTN = document.getElementById("done");
  const reset_BTN = document.getElementById("reset");
  note.innerHTML = `技術支援網站指引 <a href="./support-conponent/study123.html#step4" target="_blank">如何重新安裝Study123</a>`;

  done_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    done();
  });
  reset_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    configIP();
  });
}

// 修改config.txt的IP
function configIP() {
  big_title.innerHTML = `<i class='bx bx-planet' ></i>
    <h2 class="title-text">修改config.txt為館內IP</h2>`;
  var newDiv = document.createElement("input");
  qustion.innerHTML = `
    <button class="choose" id="done"><i class='bx bx-like'></i><p>已正常登入</p></button>
    <button class="choose" id="setted"><i class='bx bx-error' ></i><p>仍無法登入</p></button>
    `;
  var done_BTN = document.getElementById("done");
  const setted_BTN = document.getElementById("setted");
  note.innerHTML = `技術支援網站指引 <a href="./support-conponent/study123.html#step4" target="_blank">如何修改config.txt IP</a>`;

  done_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    done();
  });
  setted_BTN.addEventListener("click", function (event) {
    event.preventDefault();
    fail();
  });
}

// 無法自行解決問題
function fail() {
  big_title.innerHTML = `<i class='bx bxs-no-entry'></i>
    <h2 class="title-text">非常抱歉</h2>`;
  qustion.innerHTML = `<p class="prompt-message">您的問題可能較為複雜，涉及專業領域須由工程師處理</p>`;
  note.textContent = `請於工作日的9:30至21:00，聯繫金鑫資訊部`;
}

// 已完成
function done() {
  big_title.innerHTML = `<i class='bx bx-like'></i>
    <h2 class="title-text">您已完成基本操作</h2>`;
  qustion.innerHTML = `<p class="prompt-message">恭喜您</p>`;
  note.innerHTML = `如有其他疑問請點選 <a href="./index.html">返回主頁</a>`;
}

// -------- MENU --------
const homeBTN = document.getElementById("go-home");
// const backBTN = document.getElementById("go-back");
homeBTN.addEventListener("click", function (event) {
  event.preventDefault();
  location.reload();
});

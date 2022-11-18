// 弹出框
const newNode = "";
var divAp = document.createElement('div');
divAp.innerHTML='<input placeholder="请输入版本号" value="8.9.18" id="ipversion" /><button id="confirmVersion" onclick="confirmVersion">确认</button>';
document.body.appendChild(divAp);

function confirmVersion () {
  const version = document.querySelector('#ipversion').value; // '8.9.18';
  const uin = document.cookie.match(/uin=o[0-9]*/)[0].split('=o')[1];
  const s = document.cookie.split(';').filter(s => /(p_)?skey/.test(s)).map(s => s.trim().replace('p_skey', 'pskey')).concat(`uin=${uin};a2=AFE3C9193A7AC2BF8AE949B23EA6BBAF6598CF6E49BAB6F32D1121CD10E3816E8DBA23BC3A3D6D13D1C2DB2C284FFB00AF343B7E191B8583C5EF877C0DFC799F4D8032C34E4C58DC;qua=V1_IPH_SQ_${version}_0_RDM_R`).join(';');
  const h1 = document.body.querySelector('h1');
  h1.onclick = () => {
    const range = document.createRange(); // 控制 范围
    range.selectNode(h1); // 选择节点
    const selection = window.getSelection(); // 返回一个 Selection对象，表示用户选择的文本范围或插入符号的当前位置。
    if (selection.rangeCount > 0) selection.removeAllRanges(); // 大于0，删除所有 范围
    selection.addRange(range); // 添加范围
    document.execCommand('copy'); // 执行copy动作
  };
  h1.style.width = '400px';
  h1.style.wordBreak = 'break-all';
  h1.innerText = s;
};

document.querySelector("#confirmVersion").addEventListener('click', confirmVersion);




document.getElementById('callApiBtn').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = "加载中，请稍候...";

    fetch('https://api.kuleu.com/api/suiji_renshe')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP 错误: ${response.status}`);
            }
            return response.text(); // 如果返回 JSON 数据，用 response.json()
        })
        .then(data => {
            resultDiv.innerText = `生成的人设：\n${data}`;
        })
        .catch(error => {
            resultDiv.innerText = `请求失败：${error.message}`;
        });
});

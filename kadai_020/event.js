const addText = document.getElementById('text');
const addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
    addText.textContent = 'ボタンをクリックしました';
});
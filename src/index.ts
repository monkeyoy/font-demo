document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (!app) return;

    const text = '学城搜索';
    const textElement = document.createElement('div');
    textElement.className = 'text-display';
    textElement.textContent = text;
    
    app.appendChild(textElement);
}); 
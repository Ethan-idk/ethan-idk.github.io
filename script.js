// 主题切换
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

// 聊天功能
const chatToggle = document.querySelector('.chat-toggle');
const chatContainer = document.querySelector('.chat-container');
const closeChat = document.querySelector('.close-chat');
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-message');

// 切换聊天窗口
chatToggle.addEventListener('click', () => {
    chatContainer.style.display = 'flex';
    chatToggle.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatContainer.style.display = 'none';
    chatToggle.style.display = 'block';
});

// 发送消息函数
function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        // 添加用户消息
        addMessage(message, 'user');
        chatInput.value = '';
        
        // 模拟AI响应
        setTimeout(() => {
            const aiResponse = `我是AI助手，收到你的消息：${message}`;
            addMessage(aiResponse, 'ai');
        }, 1000);
    }
}

// 添加消息到聊天界面
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 发送消息事件监听
sendButton.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// 自动调整输入框高度
chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = chatInput.scrollHeight + 'px';
});

// 动态加载图片示例
const gallery = document.querySelector('.masonry-grid');
const sampleImages = [
    // 替换为你的实际项目图片
];

sampleImages.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.loading = 'lazy';
    img.alt = '作品展示';
    gallery.appendChild(img);
});

// 添加平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

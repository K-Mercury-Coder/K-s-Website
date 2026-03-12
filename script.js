// 雪花❄️效果
// 假设的代码逻辑
const fallSpeed = {
    default: 9,     // 中等速度
    fast: 3,        // 很快
    slow: 15        // 很慢
};
const snowConfig = {
    density: 50,        // 密度：屏幕上同时存在的雪花数量
    size: {min: 2, max: 8}, // 大小范围（像素）
    speed: 9,           // 你说的这个参数
    wind: 0.5,          // 风力/飘动幅度
    opacity: 0.8        // 透明度
};

// 雪花位置计算
snowflake.y += (screenHeight / fallSpeed) * deltaTime;


// 1. 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = '#fff';
    }
});

// 2. 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 3. 表单验证
const contactForm = document.querySelector('#contact form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const email = this.querySelector('#email').value;
        const message = this.querySelector('#message').value;
        
        if(!isValidEmail(email)) {
            e.preventDefault();
            alert('请输入有效的邮箱地址');
            return;
        }
        
        if(message.length < 10) {
            e.preventDefault();
            alert('留言内容至少10个字符');
            return;
        }
        
        // 可以添加更多验证...
    });
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// 4. 移动端菜单切换（如果需要汉堡菜单）
function initMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('header').prepend(menuToggle);
    
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成！');
    
    // 如果是移动设备，初始化移动菜单
    if(window.innerWidth <= 768) {
        initMobileMenu();
    }
});
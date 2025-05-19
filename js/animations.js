// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    // 添加浏览时间计时器
    const startTime = new Date();
    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'time-display';
    document.body.appendChild(timeDisplay);

    function updateTime() {
        const currentTime = new Date();
        const timeSpent = Math.floor((currentTime - startTime) / 1000);
        const hours = Math.floor(timeSpent / 3600); 
        const minutes = Math.floor((timeSpent % 3600) / 60);
        const seconds = timeSpent % 60;
        timeDisplay.textContent = `Browsing Time: ${hours}h ${minutes}m ${seconds}s`;
    }
    setInterval(updateTime, 1000);

    // 创建动态背景
    const background = document.createElement('div');
    background.className = 'dynamic-background';
    document.body.insertBefore(background, document.body.firstChild);

    // 背景动画
    anime({
        targets: '.dynamic-background',
        backgroundPosition: ['0% 0%', '100% 100%'],
        duration: 20000,
        easing: 'linear',
        loop: true
    });

    // 侧边栏动画
    anime({
        targets: '.sidebar',
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
    });

    // 头像动画 - 修改为渐入效果
    anime({
        targets: '.avatar',
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutExpo',
        delay: 300
    });

    // 标题动画
    anime({
        targets: '.sidebar h1, .sidebar h2',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 1000,
        easing: 'easeOutExpo'
    });

    // 社交链接动画
    anime({
        targets: '.social-links a',
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutElastic(1, .5)'
    });

    // 内容区域动画
    anime({
        targets: '.content',
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 500
    });
});

// 文章卡片悬停动画
document.querySelectorAll('.post-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        anime({
            targets: item,
            translateY: -10,
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    item.addEventListener('mouseleave', () => {
        anime({
            targets: item,
            translateY: 0,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});

// 导航菜单动画
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('toggle');
    if (navMenu.classList.contains('nav-active')) {
        // 关闭菜单
        anime({
            targets: navMenu,
            translateX: '100%',
            duration: 500,
            easing: 'easeInOutQuad',
            complete: () => {
                navMenu.classList.remove('nav-active');
            }
        });
    } else {
        // 打开菜单
        navMenu.classList.add('nav-active');
        anime({
            targets: navMenu,
            translateX: '0%',
            duration: 500,
            easing: 'easeInOutQuad'
        });
    }
});

// 点击菜单项关闭菜单
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('nav-active')) {
            menuToggle.classList.remove('toggle');
            anime({
                targets: navMenu,
                translateX: '100%',
                duration: 500,
                easing: 'easeInOutQuad',
                complete: () => {
                    navMenu.classList.remove('nav-active');
                }
            });
        }
    });
});

// 滚动动画
window.addEventListener('scroll', () => {
    anime({
        targets: '.content',
        translateY: -window.scrollY * 0.1,
        duration: 1000,
        easing: 'easeOutQuad'
    });
});

// 鼠标跟随效果
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    document.body.appendChild(cursor);

    anime({
        targets: cursor,
        opacity: [1, 0],
        scale: [1, 0],
        duration: 1000,
        easing: 'easeOutExpo',
        complete: () => cursor.remove()
    });
}); 
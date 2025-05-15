document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            date: 'May 14, 2025',
            title: 'Development Notes',
            description: 'About Development Notes',
            link: '/posts/Development_Notes.html'
        }
    ];

    const postsContainer = document.querySelector('.posts-container');

    //  生成文章列表
    function generatePosts() {
        let postsHTML = '';
        posts.forEach(post => {
            postsHTML += `
                <div class="post-item">
                    <span class="post-date">${post.date}</span>
                    <h3 class="post-title"><a href="${post.link}">${post.title}</a></h3>
                    <p class="post-description">${post.description}</p>
                </div>
            `;
        });
        postsContainer.innerHTML = postsHTML;
    }

    const homeButton = document.getElementById('home-button');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    //  文章列表
    function generatePosts() {
        let postsHTML = '';
        posts.forEach(post => {
            postsHTML += `
                <div class="post-item">
                    <span class="post-date">${post.date}</span>
                    <h3 class="post-title"><a href="${post.link}">${post.title}</a></h3>
                    <p class="post-description">${post.description}</p>
                </div>
            `;
        });
        postsContainer.innerHTML = postsHTML;
    }

    //  回到主页
    function goToHomePage() {
        window.location.href = '../index.html';
    }

    // 添加事件监听器
    if (homeButton) {
        homeButton.addEventListener('click', goToHomePage);
    } else {
        console.error('Home button element not found!');
    }

    generatePosts();

    //  菜单的点击事件处理
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('toggle');  //  切换 .toggle 类
        navMenu.classList.toggle('nav-active');  //  切换 .nav-active 类
    });

    //  回到主页
    function goToHomePage() {
        window.location.href = '../index.html';  //  确保这是你的主页文件名
    }

    if (homeButton) {
        homeButton.addEventListener('click', goToHomePage);
    } else {
        console.error('Home button element not found!');
    }

    generatePosts();
});
document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            date: 'Fir 14th, 2025',
            title: 'Create Notes',
            description: 'about creating notes',
            link: '/posts/Create_notes.html'
        }
    ];

    const postsContainer = document.querySelector('.posts-container');
    const homeLink = document.getElementById('home-link');

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

    //  回到主页
    function goToHomePage() {
        window.location.href = 'index.html';  //  确保这是你的主页文件名
    }

    generatePosts();  //  页面加载时生成文章列表
    homeLink.addEventListener('click', goToHomePage);  //  点击头像回到主页
});
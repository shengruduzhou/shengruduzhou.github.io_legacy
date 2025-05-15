document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            date: 'May 14, 2025',
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
        window.location.href = '../index.html';  //  确保这是你的主页文件名
    }

    if (homeButton) {
        homeButton.addEventListener('click', goToHomePage);
    } else {
        console.error('Home button element not found!');
    }

    generatePosts();
});
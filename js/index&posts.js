// index & posts
document.addEventListener('DOMContentLoaded', function() {
    Object.assign(GeneralFunction, {
        postsContainer: null,
        posts: [
            {
                date: 'May 14, 2025',
                title: 'Development Notes',
                description: 'About Development Notes',
                link: '/posts/Development_Notes.html'
            }
        ],

        generatePosts: function() {
            if (GeneralFunction.postsContainer && Array.isArray(GeneralFunction.posts)) {
                let postsHTML = '';
                GeneralFunction.posts.forEach(post => {
                    postsHTML += `
                        <div class="post-item">
                            <span class="post-date">${post.date}</span>
                            <h3 class="post-title"><a href="${post.link}">${post.title}</a></h3>
                            <p class="post-description">${post.description}</p>
                        </div>
                    `;
                });
                GeneralFunction.postsContainer.innerHTML = postsHTML;
            } else {
                console.error('postsContainer or posts not initialized!');
            }
        },

        initIndex: function() {
            GeneralFunction.menuToggle = document.querySelector('.menu-toggle');
            GeneralFunction.navMenu = document.querySelector('.nav-menu');
            GeneralFunction.homeLink = document.getElementById('home-link');
            GeneralFunction.postsContainer = document.querySelector('.posts-container');

            GeneralFunction.handleMenuToggle();
            GeneralFunction.goToHomePage();
            GeneralFunction.generatePosts();
        }
    });
    GeneralFunction.initIndex();
});
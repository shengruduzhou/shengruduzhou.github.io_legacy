// index & posts
document.addEventListener('DOMContentLoaded', function() {
    if (!window.GeneralFunction) {
        window.GeneralFunction = {};
    }

    Object.assign(window.GeneralFunction, {
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
            if (this.postsContainer && Array.isArray(this.posts)) {
                let postsHTML = '';
                this.posts.forEach(post => {
                    postsHTML += `
                        <div class="post-item">
                            <span class="post-date">${post.date}</span>
                            <h3 class="post-title"><a href="${post.link}">${post.title}</a></h3>
                            <p class="post-description">${post.description}</p>
                        </div>
                    `;
                });
                this.postsContainer.innerHTML = postsHTML;
            } else {
                console.error('postsContainer or posts not initialized!');
            }
        },

        initIndex: function() {
            this.menuToggle = document.querySelector('.menu-toggle');
            this.navMenu = document.querySelector('.nav-menu');
            this.homeLink = document.getElementById('home-link');
            this.postsContainer = document.querySelector('.posts-container');

            if (this.postsContainer) {
                this.generatePosts();
            } else {
                console.error('postsContainer not found!');
            }
        }
    });

    window.GeneralFunction.initIndex();
});
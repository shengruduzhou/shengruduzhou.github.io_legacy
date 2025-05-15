// script
const GeneralFunction = {
    menuToggle: null,
    navMenu: null,
    homeLink: null,

    handleMenuToggle: function() {
        if (this.menuToggle && this.navMenu) {
            this.menuToggle.addEventListener('click', () => {
                this.menuToggle.classList.toggle('toggle');
                this.navMenu.classList.toggle('nav-active');
            });
        } else {
            console.error('menuToggle or navMenu not initialized!');
        }
    },

    goToHomePage: function() {
        if (this.homeLink) {
            this.homeLink.addEventListener('click', () => {
                window.location.href = '../index.html';
            });
        } else {
            console.error('homeLink not initialized!');
        }
    }
};

// index&posts
(function() {
    const module = {
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

        init: function() {
            Object.assign(this, GeneralFunction); // 继承通用函数
            this.menuToggle = document.querySelector('.menu-toggle');
            this.navMenu = document.querySelector('.nav-menu');
            this.homeLink = document.getElementById('home-link');
            this.postsContainer = document.querySelector('.posts-container');

            this.handleMenuToggle();
            this.goToHomePage();
            this.generatePosts();
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        module.init();
    });
})();

// categories
(function() {
    const module = {
        listContainer: null,
        categories: [
            { name: 'Note', count: 1 },
        ],

        generateCategories: function() {
            if (this.listContainer && Array.isArray(this.categories)) {
                let listHTML = '';
                this.categories.forEach(category => {
                    listHTML += `
                        <div class="list-item">
                            <a href="#">${category.name}</a>
                            <span>(${category.count})</span>
                        </div>
                    `;
                });
                this.listContainer.innerHTML = listHTML;
            } else {
                console.error('listContainer or categories not initialized!');
            }
        },

        init: function() {
            Object.assign(this, GeneralFunction); // 继承通用函数
            this.menuToggle = document.querySelector('.menu-toggle');
            this.navMenu = document.querySelector('.nav-menu');
            this.listContainer = document.querySelector('.list-container');
            this.handleMenuToggle();
            this.generateCategories();
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        module.init();
    });
})();

// tags
(function() {
    const module = {
        listContainer: null,
        tags: [
            { name: 'System', count: 1 },
            { name: 'MyPage', count: 1 },
        ],

        generateTags: function() {
            if (this.listContainer && Array.isArray(this.tags)) {
                let listHTML = '';
                this.tags.forEach(tag => {
                    listHTML += `
                        <div class="list-item">
                            <a href="#">${tag.name}</a>
                            <span>(${tag.count})</span>
                        </div>
                    `;
                });
                this.listContainer.innerHTML = listHTML;
            } else {
                console.error('listContainer or tags not initialized!');
            }
        },

        init: function() {
            Object.assign(this, GeneralFunction); // 继承通用函数
            this.menuToggle = document.querySelector('.menu-toggle');
            this.navMenu = document.querySelector('.nav-menu');
            this.handleMenuToggle();
            this.listContainer = document.querySelector('.list-container');
            this.generateTags();
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        module.init();
    });
})();
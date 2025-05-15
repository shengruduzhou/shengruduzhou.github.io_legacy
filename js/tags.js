// tags
document.addEventListener('DOMContentLoaded', function() {
    Object.assign(GeneralFunction, {
        listContainer: null,
        tags: [
            { name: 'System', count: 1 },
            { name: 'MyPage', count: 1 },
        ],

        generateTags: function() {
            if (GeneralFunction.listContainer && Array.isArray(GeneralFunction.tags)) {
                let listHTML = '';
                GeneralFunction.tags.forEach(tag => {
                    listHTML += `
                        <div class="list-item">
                            <a href="#">${tag.name}</a>
                            <span>(${tag.count})</span>
                        </div>
                    `;
                });
                GeneralFunction.listContainer.innerHTML = listHTML;
            } else {
                console.error('listContainer or tags not initialized!');
            }
        },

        initTags: function() {
            GeneralFunction.menuToggle = document.querySelector('.menu-toggle');
            GeneralFunction.navMenu = document.querySelector('.nav-menu');
            GeneralFunction.handleMenuToggle();
            GeneralFunction.listContainer = document.querySelector('.list-container');
            GeneralFunction.generateTags();
        }
    });

    GeneralFunction.initTags();
});
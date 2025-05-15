// categories
document.addEventListener('DOMContentLoaded', function() {
    Object.assign(GeneralFunction, {
        listContainer: null,
        categories: [
            { name: 'Note', count: 1 },
        ],

        generateCategories: function() {
            if (GeneralFunction.listContainer && Array.isArray(GeneralFunction.categories)) {
                let listHTML = '';
                GeneralFunction.categories.forEach(category => {
                    listHTML += `
                        <div class="list-item">
                            <a href="#">${category.name}</a>
                            <span>(${category.count})</span>
                        </div>
                    `;
                });
                GeneralFunction.listContainer.innerHTML = listHTML;
            } else {
                console.error('listContainer or categories not initialized!');
            }
        },

        initCategories: function() {
            GeneralFunction.menuToggle = document.querySelector('.menu-toggle');
            GeneralFunction.navMenu = document.querySelector('.nav-menu');
            GeneralFunction.handleMenuToggle();
            GeneralFunction.listContainer = document.querySelector('.list-container');
            GeneralFunction.generateCategories();
        }
    });

    GeneralFunction.initCategories();
});
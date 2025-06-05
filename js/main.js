// main.js


document.addEventListener('DOMContentLoaded', () => {
    // Initialize the restaurant menu
    loadMenu();

    // Add event listeners for interactive elements
    const reservationButton = document.getElementById('reservation-button');
    if (reservationButton) {
        reservationButton.addEventListener('click', openReservationForm);
    }
    // Add animation class to text elements
    const textElements = document.querySelectorAll('p, h1, h2, h3, .menu-item');
    textElements.forEach(element => {
        element.classList.add('fade-in-up');
        // Stagger the animations slightly
        setTimeout(() => {
            element.classList.add('loaded');
        }, 100 + Math.random() * 400); // Random delay between 100-500ms
    });
});

// Mobile Navigation
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
});

function loadMenu() {
    const menuContainer = document.getElementById('menu');
    // Sample menu items organized by category
    const menuCategories = {
        appetizers: {
            title: 'Appetizers',
            items: [
                { name: 'Bruschetta', price: 7.99, description: 'Toasted bread with tomatoes and herbs' },
                { name: 'Caesar Salad', price: 8.99, description: 'Fresh romaine lettuce with caesar dressing' }
            ]
        },
        mainCourse: {
            title: 'Main Course',
            items: [
                { name: 'Spaghetti Carbonara', price: 12.99, description: 'Classic pasta with eggs and pancetta' },
                { name: 'Margherita Pizza', price: 10.99, description: 'Fresh tomatoes, mozzarella, and basil' }
            ]
        },
        desserts: {
            title: 'Desserts',
            items: [
                { name: 'Tiramisu', price: 6.99, description: 'Classic Italian coffee-flavored dessert' },
                { name: 'Panna Cotta', price: 5.99, description: 'Italian cream-based dessert' }
            ]
        }
    };

    Object.values(menuCategories).forEach(category => {
        const section = document.createElement('section');
        section.classList.add('menu-section');
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = category.title;
        section.appendChild(sectionTitle);

        const itemsContainer = document.createElement('div');
        itemsContainer.classList.add('menu-items-container');

        category.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <p class="price">$${item.price.toFixed(2)}</p>
            `;
            itemsContainer.appendChild(menuItem);
        });

        section.appendChild(itemsContainer);
        menuContainer.appendChild(section);
    });
}

function openReservationForm() {
    // Logic to open the reservation form
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.style.display = 'block';
    }
}

document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: document.getElementById('guests').value
    };

    // Here you would typically send this data to a server
    console.log('Reservation details:', formData);
    alert('Thank you for your reservation! We will confirm shortly.');
    
    // Reset form
    this.reset();
});

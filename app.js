// Sample game data (will be replaced with actual data from localStorage or API)
const games = [
    {
        id: 1,
        title: 'Grand Theft Auto V',
        description: 'The game blends shooting, driving, stealth, flying, swimming, and interacting with NPCs in a dynamic environment.',
        originalPrice: 1999,
        price: 249,
        discount: 88,
        image: 'https://i.ibb.co/p69zQ8Lw/0b179504-412d-4af7-9e00-3e3d92633577.jpg',
        tags: ['Action', 'Open World', 'Adventure'],
        featured: true
    },
    {
        id: 2,
        title: 'Cyberpunk 2077',
        description: 'An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamor, and body modification.',
        originalPrice: 3499,
        price: 299,
        discount: 92,
        image: 'https://i.ibb.co/LK9YYdy/12aaa3b137a18e180bb92682e8f81674dcb7451f-1280x720.jpg',
        tags: ['RPG', 'Open World', 'Cyberpunk'],
        featured: true
    },
    {
        id: 3,
        title: 'Red Dead Redemption 2',
        description: 'An epic tale of life in America\'s unforgiving heartland. The game\'s vast and atmospheric world provides the foundation for an immersive experience.',
        originalPrice: 3999,
        price: 249,
        discount: 94,
        image: 'https://i.ibb.co/hRnQ49J1/capsule-616x353.jpg',
        tags: ['Action', 'Adventure', 'Western'],
        featured: true
    },
    {
        id: 4,
        title: 'The Witcher 3: Wild Hunt',
        description: 'A story-driven, open world adventure set in a dark fantasy universe, full of meaningful choices and impactful consequences.',
        originalPrice: 1999,
        price: 299,
        discount: 85,
        image: 'https://i.ibb.co/v6WFn2BT/header.jpg',
        tags: ['RPG', 'Open World', 'Fantasy'],
        featured: true
    },
    {
        id: 5,
        title: 'The Legend of Zelda: Breath of the Wild',
        description: 'An action-adventure game set in an open world where players control Link.',
        originalPrice: 3499,
        price: 299,
        discount: 92,
        image: 'https://i.ibb.co/C3stxt1p/cfe9f8d674be958326d3ba11fc7598a4383e5c5d7809b6239ccac0783aac6cd8.jpg',
        tags: ['Adventure', 'Open World', 'Action'],
        featured: true
    },
    {
        id: 6,
        title: 'God of War (2018)',
        description: 'A third-person action-adventure video game developed by Santa Monica Studio.',
        originalPrice: 3499,
        price: 249,
        discount: 93,
        image: 'https://i.ibb.co/PZmBpv3T/God-Of-War-Wallpaper-1.jpg',
        tags: ['Action', 'Adventure', 'Single Player'],
        featured: true
    },
    {
        id: 7,
        title: 'Horizon Zero Dawn',
        description: 'An action role-playing game developed by Guerrilla Games.',
        originalPrice: 2999,
        price: 299,
        discount: 90,
        image: 'https://i.ibb.co/NdkmCBSn/Horizon-ZD-outonpc-1200w.jpg',
        tags: ['Action', 'RPG', 'Open World'],
        featured: true
    },
    {
        id: 8,
        title: 'Elden Ring',
        description: 'An action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment.',
        originalPrice: 3999,
        price: 299,
        discount: 93,
        image: 'https://i.ibb.co/HDT32Ff1/capsule-616x353-1.jpg',
        tags: ['Action', 'RPG', 'Souls-like'],
        featured: true
    },
    {
        id: 9,
        title: 'Dark Souls III',
        description: 'An action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment.',
        originalPrice: 2999,
        price: 249,
        discount: 92,
        image: 'https://i.ibb.co/BHFxGHn5/ds3-game-thumbnail.jpg',
        tags: ['Action', 'RPG', 'Difficult'],
        featured: false
    },
    {
        id: 10,
        title: 'Bloodborne',
        description: 'An action role-playing game developed by FromSoftware and published by Sony Computer Entertainment.',
        originalPrice: 3499,
        price: 299,
        discount: 92,
        image: 'https://i.ibb.co/dNDZ1th/Bloodborne-feature.jpg',
        tags: ['Action', 'RPG', 'Gothic'],
        featured: false
    },
    {
        id: 11,
        title: 'Sekiro: Shadows Die Twice',
        description: 'An action-adventure video game developed by FromSoftware and published by Activision.',
        originalPrice: 3999,
        price: 249,
        discount: 94,
        image: 'https://i.ibb.co/r2fTK2W7/capsule-616x353-2.jpg',
        tags: ['Action', 'Adventure', 'Souls-like'],
        featured: false
    },
    {
        id: 12,
        title: 'Ghost of Tsushima',
        description: 'An action-adventure game developed by Sucker Punch Productions.',
        originalPrice: 3999,
        price: 299,
        discount: 93,
        image: 'https://i.ibb.co/0p8nvZVk/images.jpg',
        tags: ['Action', 'Adventure', 'Open World'],
        featured: true
    },
    {
        id: 13,
        title: 'Marvel\'s Spider-Man',
        description: 'An action-adventure game based on the Marvel Comics superhero Spider-Man.',
        originalPrice: 3999,
        price: 249,
        discount: 94,
        image: 'https://i.ibb.co/CKx6RtTY/images-1.jpg',
        tags: ['Action', 'Adventure', 'Superhero'],
        featured: true
    },
    {
        id: 14,
        title: 'The Last of Us Part II',
        description: 'An action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment.',
        originalPrice: 3999,
        price: 299,
        discount: 93,
        image: 'https://i.ibb.co/gZf6nNQw/the-last-of-us-part-ii-remastered-blogroll-1705535028411.webp',
        tags: ['Action', 'Adventure', 'Post-apocalyptic'],
        featured: true
    },
    {
        id: 15,
        title: 'Uncharted 4: A Thief\'s End',
        description: 'An action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment.',
        originalPrice: 3499,
        price: 249,
        discount: 93,
        image: 'https://i.ibb.co/0j4GK4Xd/uc-4-thiefs-end.jpg',
        tags: ['Action', 'Adventure', 'Third-person Shooter'],
        featured: false
    },
    {
        id: 16,
        title: 'Persona 5 Royal',
        description: 'A role-playing video game developed by Atlus.',
        originalPrice: 3499,
        price: 299,
        discount: 92,
        image: 'https://i.ibb.co/Q7ZRvHv4/images-2.jpg',
        tags: ['RPG', 'Turn-based', 'Anime'],
        featured: false
    },
    {
        id: 17,
        title: 'Final Fantasy VII Remake',
        description: 'An action role-playing game developed and published by Square Enix.',
        originalPrice: 3999,
        price: 249,
        discount: 94,
        image: 'https://i.ibb.co/r2vtc9qw/images-3.jpg',
        tags: ['RPG', 'Action', 'Story-driven'],
        featured: true
    },
    {
        id: 18,
        title: 'Mass Effect Legendary Edition',
        description: 'A compilation of the video games in the original Mass Effect trilogy.',
        originalPrice: 3499,
        price: 249,
        discount: 93,
        image: 'https://i.ibb.co/hJNQ9GrB/capsule-616x353-3.jpg',
        tags: ['RPG', 'Shooter', 'Sci-fi'],
        featured: true
    },
    {
        id: 15,
        title: 'Hades',
        description: 'A roguelike action role-playing game developed and published by Supergiant Games.',
        originalPrice: 1599,
        price: 249,
        discount: 85,
        image: 'https://i.ibb.co/bcYhSQN/images-4.jpg',
        tags: ['Roguelike', 'Action', 'Indie'],
        featured: false
    },
    {
        id: 16,
        title: 'Stardew Valley',
        description: 'A simulation role-playing video game developed by Eric "ConcernedApe" Barone.',
        originalPrice: 999,
        price: 249,
        discount: 75,
        image: 'https://i.ibb.co/nNrgNcPN/capsule-616x353-4.jpg',
        tags: ['Simulation', 'RPG', 'Farming'],
        featured: false
    },
    {
        id: 17,
        title: 'Hollow Knight',
        description: 'A 2017 action-adventure game developed and published by Team Cherry.',
        originalPrice: 799,
        price: 249,
        discount: 69,
        image: 'https://i.ibb.co/xSctnF0X/header-2.jpg',
        tags: ['Metroidvania', 'Action', 'Platformer'],
        featured: false
    },
    {
        id: 18,
        title: 'Celeste',
        description: 'A platforming video game by Canadian video game developers Maddy Thorson and Noel Berry.',
        originalPrice: 499,
        price: 249,
        discount: 50,
        image: 'https://i.ibb.co/GfbWcmHz/capsule-616x353-5.jpg',
        tags: ['Platformer', 'Indie', 'Pixel Graphics'],
        featured: false
    },
    {
        id: 19,
        title: 'Disco Elysium',
        description: 'A role-playing video game developed and published by ZA/UM.',
        originalPrice: 1499,
        price: 299,
        discount: 80,
        image: 'https://i.ibb.co/B5SxS83s/images-5.jpg',
        tags: ['RPG', 'Story Rich', 'Detective'],
        featured: false
    },
    {
        id: 20,
        title: 'Baldur\'s Gate 3',
        description: 'A role-playing video game developed and published by Larian Studios.',
        originalPrice: 2999,
        price: 299,
        discount: 90,
        image: 'https://i.ibb.co/60PsR9D5/images-6.jpg',
        tags: ['RPG', 'Story Rich', 'Turn-Based'],
        featured: true
    },
    {
        id: 21,
        title: 'Divinity: Original Sin 2',
        description: 'A role-playing video game developed and published by Larian Studios.',
        originalPrice: 2799,
        price: 249,
        discount: 91,
        image: 'https://i.ibb.co/8Dk2QbWJ/images-7.jpg',
        tags: ['RPG', 'Turn-Based', 'Co-op'],
        featured: false
    }
];

// Initialize the application
function initApp() {
    // Always update games in localStorage with current data to ensure prices are up to date
    localStorage.setItem('steamzone_games', JSON.stringify(games));
    
    // Initialize other data if needed
    if (!localStorage.getItem('steamzone_orders')) {
        localStorage.setItem('steamzone_orders', JSON.stringify([]));
    }
    
    // Initialize users if not exists
    if (!localStorage.getItem('steamzone_users')) {
        localStorage.setItem('steamzone_users', JSON.stringify([
            {
                id: 1,
                email: 'admin@example.com',
                password: 'admin123',
                name: 'Admin User'
            }
        ]));
    }
}

// Get all games
function getGames() {
    return JSON.parse(localStorage.getItem('steamzone_games') || '[]');
}

// Get a single game by ID
function getGameById(id) {
    const games = getGames();
    return games.find(game => game.id === parseInt(id));
}

// Get featured games
function getFeaturedGames() {
    const games = getGames();
    return games.filter(game => game.featured);
}

// Create a new order
function createOrder(gameId, utrNumber, userId = null) {
    const game = getGameById(gameId);
    if (!game) return null;
    
    const orders = JSON.parse(localStorage.getItem('steamzone_orders') || '[]');
    const newOrder = {
        id: Date.now(),
        gameId: game.id,
        gameTitle: game.title,
        price: game.price,
        utrNumber,
        status: 'Pending',
        orderDate: new Date().toISOString(),
        userId
    };
    
    orders.push(newOrder);
    localStorage.setItem('steamzone_orders', JSON.stringify(orders));
    
    // Add order to user's order history if logged in
    if (userId) {
        const users = JSON.parse(localStorage.getItem('steamzone_users') || '[]');
        const user = users.find(u => u.id === userId);
        if (user) {
            user.orders = user.orders || [];
            user.orders.push(newOrder.id);
            localStorage.setItem('steamzone_users', JSON.stringify(users));
        }
    }
    
    return newOrder;
}

// Get user orders
function getUserOrders(userId) {
    const orders = JSON.parse(localStorage.getItem('steamzone_orders') || '[]');
    return orders.filter(order => order.userId === userId);
}

// Check if user is logged in
function isLoggedIn() {
    const user = JSON.parse(sessionStorage.getItem('user') || 'null');
    return user !== null;
}

// Get current user
function getCurrentUser() {
    const user = JSON.parse(sessionStorage.getItem('user') || 'null');
    if (!user) return null;
    
    return {
        id: user.uid,
        email: user.email,
        displayName: user.displayName || user.email.split('@')[0]
    };
}

// Login user (kept for backward compatibility)
function login(email, password) {
    // This is now handled by Firebase Auth directly in login.html
    console.warn('login() function is deprecated. Use Firebase Auth directly.');
    return getCurrentUser();
}

// Logout user
function logout() {
    // Import auth from Firebase
    import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js')
        .then(({ getAuth, signOut }) => {
            const auth = getAuth();
            return signOut(auth);
        })
        .then(() => {
            // Clear session storage
            sessionStorage.removeItem('user');
            // Redirect to home page
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('Logout error:', error);
            // Still clear session and redirect even if there's an error
            sessionStorage.removeItem('user');
            window.location.href = 'index.html';
        });
}

// Search games by title
function searchGames(query) {
    const games = getGames();
    const searchTerm = query.toLowerCase();
    return games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
}

// Get recommended games (excluding current game)
function getRecommendedGames(currentGameId, limit = 4) {
    const games = getGames();
    // Filter out the current game and get random games
    return games
        .filter(game => game.id !== currentGameId)
        .sort(() => 0.5 - Math.random())
        .slice(0, limit);
}

// Initialize the app when the script loads
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initApp);
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initApp,
        getGames,
        getGameById,
        getFeaturedGames,
        createOrder,
        getUserOrders,
        isLoggedIn,
        getCurrentUser,
        login,
        logout,
        searchGames
    };
}

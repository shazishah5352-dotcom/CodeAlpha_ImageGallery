// Art Collection Data
const artData = [
    // Nature Collection
    { id: 1, url: "https://picsum.photos/id/104/600/800", title: "Serenity", category: "nature", description: "Mountain lake at dawn, capturing the stillness of nature", year: "2024" },
    { id: 2, url: "https://picsum.photos/id/15/600/800", title: "Whispers", category: "nature", description: "Autumn forest path with golden leaves", year: "2023" },
    { id: 3, url: "https://picsum.photos/id/96/600/800", title: "Majesty", category: "nature", description: "Snow-capped mountain peak against blue sky", year: "2024" },
    { id: 4, url: "https://picsum.photos/id/28/600/800", title: "Flow", category: "nature", description: "Peaceful river through ancient forest", year: "2023" },
    
    // Urban Collection
    { id: 5, url: "https://picsum.photos/id/20/600/800", title: "Metropolis", category: "city", description: "Modern skyline at golden hour", year: "2024" },
    { id: 6, url: "https://picsum.photos/id/22/600/800", title: "Nocturne", category: "city", description: "City lights painting the night", year: "2023" },
    { id: 7, url: "https://picsum.photos/id/1/600/800", title: "Geometry", category: "city", description: "Architectural symmetry in downtown", year: "2024" },
    { id: 8, url: "https://picsum.photos/id/91/600/800", title: "Rhythm", category: "city", description: "Bustling street life monochrome", year: "2023" },
    
    // Wildlife Collection
    { id: 9, url: "https://picsum.photos/id/100/600/800", title: "Grace", category: "animals", description: "Elegant deer in misty forest", year: "2024" },
    { id: 10, url: "https://picsum.photos/id/144/600/800", title: "Playfulness", category: "animals", description: "Seal basking on coastal rocks", year: "2023" },
    { id: 11, url: "https://picsum.photos/id/145/600/800", title: "Freedom", category: "animals", description: "Bird in mid-flight", year: "2024" },
    { id: 12, url: "https://picsum.photos/id/166/600/800", title: "Metamorphosis", category: "animals", description: "Butterfly on wildflower", year: "2023" },
    
    // Coastal Collection
    { id: 13, url: "https://picsum.photos/id/95/600/800", title: "Paradise", category: "beach", description: "Tropical beach with turquoise water", year: "2024" },
    { id: 14, url: "https://picsum.photos/id/80/600/800", title: "Dusk", category: "beach", description: "Golden sunset over peaceful shore", year: "2023" },
    { id: 15, url: "https://picsum.photos/id/83/600/800", title: "Power", category: "beach", description: "Ocean waves crashing dramatically", year: "2024" },
    
    // Gastronomy Collection
    { id: 16, url: "https://picsum.photos/id/108/600/800", title: "Tradizione", category: "food", description: "Authentic Italian pizza", year: "2024" },
    { id: 17, url: "https://picsum.photos/id/106/600/800", title: "Omakase", category: "food", description: "Chef's sushi selection", year: "2023" },
    { id: 18, url: "https://picsum.photos/id/30/600/800", title: "Morning Ritual", category: "food", description: "Pour-over coffee art", year: "2024" },
    
    // Technology Collection
    { id: 19, url: "https://picsum.photos/id/0/600/800", title: "Workspace", category: "technology", description: "Minimalist creative studio", year: "2024" },
    { id: 20, url: "https://picsum.photos/id/2/600/800", title: "Flow State", category: "technology", description: "Developer's coding space", year: "2023" },
    { id: 21, url: "https://picsum.photos/id/4/600/800", title: "Creation", category: "technology", description: "Code and creativity", year: "2024" },
    
    // Art Collection
    { id: 22, url: "https://picsum.photos/id/49/600/800", title: "Digital Dreams", category: "art", description: "Contemporary digital illustration", year: "2024" },
    { id: 23, url: "https://picsum.photos/id/51/600/800", title: "Abstract No.5", category: "art", description: "Modern abstract composition", year: "2023" },
    { id: 24, url: "https://picsum.photos/id/53/600/800", title: "Study in Charcoal", category: "art", description: "Portrait study", year: "2024" },
    
    // Travel Collection
    { id: 25, url: "https://picsum.photos/id/48/600/800", title: "Lumiére", category: "travel", description: "Eiffel Tower, Paris", year: "2024" },
    { id: 26, url: "https://picsum.photos/id/57/600/800", title: "Westminster", category: "travel", description: "Big Ben, London", year: "2023" },
    { id: 27, url: "https://picsum.photos/id/60/600/800", title: "Fuji-san", category: "travel", description: "Mount Fuji, Japan", year: "2024" },
    { id: 28, url: "https://picsum.photos/id/67/600/800", title: "Eternal City", category: "travel", description: "Colosseum, Rome", year: "2023" }
];

// Category Data for Categories Grid
const categoriesData = [
    { name: "NATURE", count: "12 works", category: "nature", icon: "🌿", image: "https://picsum.photos/id/104/400/500" },
    { name: "URBAN", count: "8 works", category: "city", icon: "🏙️", image: "https://picsum.photos/id/20/400/500" },
    { name: "WILDLIFE", count: "6 works", category: "animals", icon: "🐾", image: "https://picsum.photos/id/100/400/500" },
    { name: "COASTAL", count: "5 works", category: "beach", icon: "🌊", image: "https://picsum.photos/id/95/400/500" },
    { name: "GASTRONOMY", count: "4 works", category: "food", icon: "🍽️", image: "https://picsum.photos/id/108/400/500" },
    { name: "TECHNOLOGY", count: "4 works", category: "technology", icon: "⚙️", image: "https://picsum.photos/id/0/400/500" },
    { name: "ARTISTIC", count: "4 works", category: "art", icon: "🎨", image: "https://picsum.photos/id/49/400/500" },
    { name: "WANDERLUST", count: "5 works", category: "travel", icon: "✈️", image: "https://picsum.photos/id/48/400/500" }
];

let currentImages = [...artData];
let currentIndex = 0;

// DOM Elements
const categoriesGrid = document.getElementById('categoriesGrid');
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const captionTitle = document.getElementById('captionTitle');
const captionDesc = document.getElementById('captionDesc');
const imageCounter = document.getElementById('imageCounter');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Render Categories Grid
function renderCategories() {
    categoriesGrid.innerHTML = '';
    
    categoriesData.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('data-category', cat.category);
        
        card.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}">
            <div class="category-overlay">
                <h3>${cat.name}</h3>
                <p>${cat.count}</p>
            </div>
        `;
        
        card.addEventListener('click', () => filterByCategory(cat.category));
        categoriesGrid.appendChild(card);
    });
}

// Filter by category
function filterByCategory(category) {
    if (category === 'all') {
        currentImages = [...artData];
    } else {
        currentImages = artData.filter(img => img.category === category);
    }
    renderGallery();
    
    // Scroll to featured section
    document.querySelector('.featured-section').scrollIntoView({ behavior: 'smooth' });
}

// Render Gallery
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    if (currentImages.length === 0) {
        galleryGrid.innerHTML = '<div style="text-align:center; padding:60px;">No works in this collection</div>';
        return;
    }
    
    currentImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-index', index);
        
        const categoryName = image.category.charAt(0).toUpperCase() + image.category.slice(1);
        
        item.innerHTML = `
            <img src="${image.url}" alt="${image.title}" class="gallery-img" loading="lazy">
            <div class="category-badge">${categoryName}</div>
            <div class="item-info">
                <h3>${image.title}</h3>
                <p>${image.year} • ${image.description.substring(0, 50)}${image.description.length > 50 ? '...' : ''}</p>
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(item);
    });
}

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    lightbox.classList.add('active');
    updateLightbox();
    document.body.style.overflow = 'hidden';
}

// Update Lightbox
function updateLightbox() {
    const image = currentImages[currentIndex];
    if (image) {
        lightboxImg.src = image.url;
        captionTitle.textContent = image.title;
        captionDesc.textContent = image.description;
        imageCounter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(currentImages.length).padStart(2, '0')}`;
    }
}

// Close Lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Next Image
function nextImage() {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        updateLightbox();
    } else {
        currentIndex = 0;
        updateLightbox();
    }
}

// Previous Image
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateLightbox();
    } else {
        currentIndex = currentImages.length - 1;
        updateLightbox();
    }
}

// Keyboard Navigation
function handleKeyboard(e) {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'ArrowRight': nextImage(); break;
        case 'ArrowLeft': prevImage(); break;
        case 'Escape': closeLightbox(); break;
    }
}

// Event Listeners
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
document.addEventListener('keydown', handleKeyboard);

// Close on outside click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Initialize
renderCategories();
renderGallery();
// Search DOM Elements
const searchIcon = document.getElementById('searchIcon');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchResultsGrid = document.getElementById('searchResultsGrid');
const resultCountSpan = document.getElementById('resultCount');

// Open Search
function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.focus();
    document.body.style.overflow = 'hidden';
}

// Close Search
function closeSearch() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.classList.remove('active');
    document.body.style.overflow = '';
}

// Perform Search (Real-time)
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        searchResults.classList.remove('active');
        return;
    }
    
    // Search in all images (artData)
    const results = artData.filter(item => {
        return item.title.toLowerCase().includes(query) ||
               item.description.toLowerCase().includes(query) ||
               item.category.toLowerCase().includes(query);
    });
    
    // Display results
    displaySearchResults(results, query);
    searchResults.classList.add('active');
}

// Display Search Results
function displaySearchResults(results, query) {
    if (results.length === 0) {
        searchResultsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No results found for "${query}"</p>
                <small>Try searching by title or description</small>
            </div>
        `;
        resultCountSpan.textContent = `0 RESULTS FOUND`;
        return;
    }
    
    resultCountSpan.textContent = `${results.length} RESULT${results.length > 1 ? 'S' : ''} FOUND`;
    
    searchResultsGrid.innerHTML = '';
    
    results.forEach((item, idx) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-item';
        
        const categoryName = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        
        resultItem.innerHTML = `
            <img src="${item.url}" alt="${item.title}" class="search-item-img">
            <div class="search-item-info">
                <h4>${highlightText(item.title, query)}</h4>
                <p>${highlightText(item.description.substring(0, 80), query)}${item.description.length > 80 ? '...' : ''}</p>
                <span class="search-item-category">${categoryName}</span>
            </div>
        `;
        
        // Find the actual index in artData
        const originalIndex = artData.findIndex(art => art.id === item.id);
        resultItem.addEventListener('click', () => {
            closeSearch();
            openImageFromSearch(originalIndex);
        });
        
        searchResultsGrid.appendChild(resultItem);
    });
}

// Highlight matching text
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span style="background: #D4AF37; color: #000; padding: 0 2px; border-radius: 2px;">$1</span>');
}

// Open image from search
function openImageFromSearch(index) {
    currentImages = [...artData];
    currentIndex = index;
    lightbox.classList.add('active');
    updateLightbox();
    document.body.style.overflow = 'hidden';
}

// Event Listeners for Search
if (searchIcon) {
    searchIcon.addEventListener('click', openSearch);
}

if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
}

if (searchInput) {
    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            closeSearch();
        }
    });
}

// Close search when clicking outside
searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        closeSearch();
    }
});

// Keyboard shortcut: Ctrl + K or Cmd + K to open search
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        closeSearch();
    }
});

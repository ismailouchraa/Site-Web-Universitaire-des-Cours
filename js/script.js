// Menu Toggle pour Mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Système de recherche
const searchInput = document.getElementById('searchInput');
const searchResultsContainer = document.getElementById('searchResults'); // Conteneur où afficher les résultats

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 2) {
        searchResultsContainer.innerHTML = ''; // Si moins de 2 caractères, vider les résultats
        return;
    }

    // Recherche des mots-clés dans le contenu de la page
    const searchResults = [];
    const contentElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li'); // Recherche dans les éléments de texte

    contentElements.forEach(element => {
        if (element.textContent.toLowerCase().includes(searchTerm)) {
            // Trouver l'élément parent (par exemple, le div contenant le h1)
            const parentElement = findParentElement(element);
            if (parentElement) {
                searchResults.push(parentElement.outerHTML); // Ajouter l'élément parent entier
            }
        }
    });

    // Stocker les résultats dans localStorage et rediriger vers result.html
    if (searchResults.length > 0) {
        localStorage.setItem('searchResults', JSON.stringify(searchResults)); // Stocker les résultats dans localStorage
        window.location.href = 'result.html'; // Rediriger vers la page des résultats
    } else {
        searchResultsContainer.innerHTML = '<p>Aucun résultat trouvé.</p>';
    }
});

function findParentElement(element) {
    // Trouver l'élément parent qui peut être un div, section, ou autre
    let parent = element.parentElement;
    while (parent) {
        if (parent.tagName.toLowerCase() === 'div' || parent.tagName.toLowerCase() === 'section') {
            return parent;
        }
        parent = parent.parentElement;
    }
    return null;
}



function displaySearchResults(results) {
    // Affichage des résultats de la recherche
    searchResultsContainer.innerHTML = ''; // Vider les résultats précédents

    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.innerHTML = result; // Ajouter l'élément parent comme HTML
            searchResultsContainer.appendChild(resultItem);
        });
    } else {
        searchResultsContainer.innerHTML = '<p>Aucun résultat trouvé.</p>';
    }
}

// Gestion des téléchargements
function downloadCourse(courseId) {
    // Simuler un téléchargement
    console.log(`Téléchargement du cours ${courseId}`);
    // Implémenter la logique réelle de téléchargement
}

// Animation de défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gestionnaire de filtres
const filters = {
    year: null,
    semester: null,
    branch: null
};

function updateFilters(filterType, value) {
    filters[filterType] = value;
    applyFilters();
}

// Création du tooltip
var tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

// Fonction pour afficher le tooltip avec le nom et l'image du système
function showTooltip(event, properties) {
    var imageTag = properties.picture ? `<img src="${properties.picture}" alt="System Image" class="tooltip-image">` : '';
    var tooltipContent = `<div class="tooltip-content">
                            <h3>${properties.NAME}</h3>
                            ${imageTag}
                          </div>`;

    tooltip.innerHTML = tooltipContent;
    tooltip.style.display = 'block';
    positionTooltip(event);
}

// Fonction pour positionner le tooltip près du curseur
function positionTooltip(event) {
    tooltip.style.left = event.pageX + 10 + 'px'; // Décalage de 10px à droite du curseur
    tooltip.style.top = event.pageY + 10 + 'px'; // Décalage de 10px en dessous du curseur
}

// Fonction pour cacher le tooltip
function hideTooltip() {
    tooltip.style.display = 'none';
}

// Suivi du mouvement de la souris pour mettre à jour la position du tooltip
document.addEventListener('mousemove', function(event) {
    if (tooltip.style.display === 'block') {
        positionTooltip(event);
    }
});

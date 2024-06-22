// Création du tooltip
var tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

// Fonction pour afficher le tooltip avec le nom et l'image du système
function showTooltip(event, properties) {
    var imageTag = properties.picture ? `<img src="${properties.picture}" alt="System Image" class="popup-image">` : '';
    var tooltipContent = `<div class="tooltip-content">
                            <h3>${properties.NAME}</h3>
                            ${imageTag}
                          </div>`;
    
    tooltip.innerHTML = tooltipContent;
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = event.pageY + 'px';
    tooltip.style.display = 'block';
}

// Fonction pour cacher le tooltip
function hideTooltip() {
    tooltip.style.display = 'none';
}

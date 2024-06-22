// Création du tooltip
var tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

// Fonction pour afficher le tooltip
function showTooltip(event, message) {
    tooltip.innerHTML = message;
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = event.pageY + 'px';
    tooltip.style.display = 'block';
}

// Fonction pour cacher le tooltip
function hideTooltip() {
    tooltip.style.display = 'none';
}

// Create a container for system tooltips
var tooltipContainer = document.createElement('div');
tooltipContainer.setAttribute('class', 'tooltip-container');
document.body.appendChild(tooltipContainer);

// Create a smaller tooltip for other functionalities
var smallTooltip = document.createElement('div');
smallTooltip.setAttribute('class', 'small-tooltip');
document.body.appendChild(smallTooltip);

// Function to show tooltips with system info
function showTooltip(event, features) {
    tooltipContainer.innerHTML = ''; // Clear previous tooltips
    features.forEach(properties => {
        var imageTag = properties.picture ? `<img src="${properties.picture}" alt="System Image" class="tooltip-image">` : '';
        var tooltipContent = `<div class="tooltip">
                                <h3>${properties.NAME}</h3>
                                ${imageTag}
                              </div>`;
        var tooltipElement = document.createElement('div');
        tooltipElement.innerHTML = tooltipContent;
        tooltipElement.style.position = 'absolute';
        tooltipElement.style.left = event.pageX + 10 + 'px';
        tooltipElement.style.top = event.pageY + 10 + 'px';
        tooltipContainer.appendChild(tooltipElement);
    });
    tooltipContainer.style.display = 'block';
}

// Function to show small tooltip for other functionalities
function showSmallTooltip(event, message) {
    smallTooltip.innerHTML = message;
    smallTooltip.style.display = 'block';
    smallTooltip.style.left = event.pageX + 10 + 'px';
    smallTooltip.style.top = event.pageY + 10 + 'px';
}

// Function to hide tooltips
function hideTooltip() {
    tooltipContainer.style.display = 'none';
    smallTooltip.style.display = 'none';
}

// Track mouse movement to update tooltip position
document.addEventListener('mousemove', function(event) {
    if (tooltipContainer.style.display === 'block') {
        positionTooltip(event, tooltipContainer);
    }
    if (smallTooltip.style.display === 'block') {
        positionTooltip(event, smallTooltip);
    }
});

function positionTooltip(event, tooltipElement) {
    tooltipElement.style.left = event.pageX + 10 + 'px'; // Offset 10px to the right of the cursor
    tooltipElement.style.top = event.pageY + 10 + 'px'; // Offset 10px below the cursor
}

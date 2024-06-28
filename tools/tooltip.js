// Create tooltips
var tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

var smallTooltip = document.createElement('div');
smallTooltip.setAttribute('class', 'tooltip small-tooltip');
document.body.appendChild(smallTooltip);

// Function to show tooltip with system info
function showTooltip(event, properties) {
    var imageTag = properties.picture ? `<img src="${properties.picture}" alt="System Image" class="tooltip-image">` : '';
    var tooltipContent = `<div class="tooltip-content">
                            <h3>${properties.NAME.toUpperCase()}</h3>
                            ${imageTag}
                          </div>`;

    tooltip.innerHTML = tooltipContent;
    tooltip.style.display = 'block';
    positionTooltip(event, tooltip);

    // Add event listener to convert to popup on click
    tooltip.addEventListener('click', function() {
        showPopup(properties);
    });
}

// Function to show small tooltip for other functionalities
function showSmallTooltip(event, message) {
    smallTooltip.innerHTML = message;
    smallTooltip.style.display = 'block';
    positionTooltip(event, smallTooltip);
}

// Function to position the tooltip near the cursor
function positionTooltip(event, tooltipElement) {
    tooltipElement.style.left = event.pageX + 10 + 'px'; // Offset 10px to the right of the cursor
    tooltipElement.style.top = event.pageY + 10 + 'px'; // Offset 10px below the cursor
}

// Function to hide tooltips
function hideTooltip() {
    tooltip.style.display = 'none';
    smallTooltip.style.display = 'none';
}

// Track mouse movement to update tooltip position
document.addEventListener('mousemove', function(event) {
    if (tooltip.style.display === 'block') {
        positionTooltip(event, tooltip);
    }
    if (smallTooltip.style.display === 'block') {
        positionTooltip(event, smallTooltip);
    }
});

// Function to show popup with system info
function showPopup(properties) {
    hideTooltip(); // Hide the tooltip when showing the popup

    var imageTag = properties.picture ? `<img src="${properties.picture}" alt="System Image" class="tooltip-image">` : '';
    var popupContent = `<div class="popup-info">
                          <h3>${properties.NAME.toUpperCase()}</h3>
                          ${imageTag}
                          <p>${properties.Description || ''}</p>
                          <button class="popup-close" onclick="closePopup()">×</button>
                        </div>`;

    var popup = document.createElement('div');
    popup.setAttribute('class', 'popup');
    popup.innerHTML = popupContent;

    document.body.appendChild(popup);
}

// Function to close the popup
function closePopup() {
    var popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}

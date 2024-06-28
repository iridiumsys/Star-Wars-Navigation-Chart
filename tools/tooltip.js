// Create tooltips and popup
var tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

var smallTooltip = document.createElement('div');
smallTooltip.setAttribute('class', 'tooltip small-tooltip');
document.body.appendChild(smallTooltip);

var popup = document.createElement('div');
popup.setAttribute('class', 'popup');
document.body.appendChild(popup);

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
}

// Function to show popup with system info
function showPopup(properties) {
    var imageTag = properties.picture ? `<img src="${properties.picture}" alt="System Image" class="popup-image">` : '';
    var popupContent = `<div class="popup-content">
                            <h3>${properties.NAME.toUpperCase()}</h3>
                            ${imageTag}
                            <button class="popup-close" onclick="hidePopup()">✖</button>
                          </div>`;

    popup.innerHTML = popupContent;
    popup.style.display = 'block';
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

// Function to hide popup
function hidePopup() {
    popup.style.display = 'none';
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

// Add click event listener to show popup on system click
document.body.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('tooltip-content') || target.closest('.tooltip-content')) {
        hideTooltip();
        var properties = {
            NAME: target.querySelector('h3').innerText,
            picture: target.querySelector('img') ? target.querySelector('img').src : ''
        };
        showPopup(properties);
    }
});

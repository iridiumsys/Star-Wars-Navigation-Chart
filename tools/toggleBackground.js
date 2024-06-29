export function setupBackgroundToggle(map) {
    let currentBackground = 'space-background';

    document.getElementById('toggle-background').addEventListener('click', () => {
        const newBackground = currentBackground === 'space-background' ? 'white-background' : 'space-background';
        map.setLayoutProperty(currentBackground, 'visibility', 'none');
        map.setLayoutProperty(newBackground, 'visibility', 'visible');
        currentBackground = newBackground;
    });
}

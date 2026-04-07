document.addEventListener('DOMContentLoaded', function() {
    const unitData = {
        'length': [
            {value: 'mm', text: 'Millimeters (mm)'},
            {value: 'cm', text: 'Centimeters (cm)'},
            {value: 'm', text: 'Meters (m)'},
            {value: 'km', text: 'Kilometers (km)'},
            {value: 'in', text: 'Inches (in)'},
            {value: 'ft', text: 'Feet (ft)'}
        ],
        'temp': [
            {value: 'C', text: 'Celsius (°C)'},
            {value: 'F', text: 'Fahrenheit (°F)'}
        ],
        'currency': [
            {value: 'USD', text: 'US Dollar ($)'},
            {value: 'EUR', text: 'Euro (€)'},
            {value: 'GBP', text: 'British Pound (£)'}
        ]
    };

    const categorySelect = document.getElementById('category_select');
    const unitFrom = document.getElementById('unit_from');
    const unitTo = document.getElementById('unit_to');

    function updateUnits() {
        const selectedCategory = categorySelect.value;
        const options = unitData[selectedCategory];
        
        unitFrom.innerHTML = '';
        unitTo.innerHTML = '';

        options.forEach(unit => {
            unitFrom.add(new Option(unit.text, unit.value));
            unitTo.add(new Option(unit.text, unit.value));
        });
    }

    // Initialize dropdowns
    updateUnits();
    
    // Listen for changes
    categorySelect.addEventListener('change', updateUnits);
});
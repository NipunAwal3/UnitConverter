import requests

def convert_units(value, unit_from, unit_to, category):
    value = float(value)
    
    if category == "length":
        # Base unit: Meters
        factors = {'mm': 0.001, 'cm': 0.01, 'm': 1, 'km': 1000, 'in': 0.0254, 'ft': 0.3048}
        return value * (factors[unit_from] / factors[unit_to])

    if category == "temp":
        if unit_from == "C" and unit_to == "F": return (value * 9/5) + 32
        if unit_from == "F" and unit_to == "C": return (value - 32) * 5/9
        return value

    return None

def get_currency_rate(amount, from_curr, to_curr):
    url = f"https://api.exchangerate-api.com/v4/latest/{from_curr}"
    response = requests.get(url).json()
    rate = response['rates'][to_curr]
    return amount * rate
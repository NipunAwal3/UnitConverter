from django.shortcuts import render
from .utils import convert_units, get_currency_rate

def convert_view(request):
    result = None
    if request.method == "POST":
        category = request.POST.get('category')
        value = float(request.POST.get('value', 0))
        unit_from = request.POST.get('unit_from')
        unit_to = request.POST.get('unit_to')

        if category == 'currency':
            result = get_currency_rate(value, unit_from, unit_to)
        else:
            result = convert_units(value, unit_from, unit_to, category)

    return render(request, 'index.html', {'result': result})
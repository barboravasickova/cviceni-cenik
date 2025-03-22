/*

1 - Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected.

2 - Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.

3 - Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrán vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.

4 - Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), ale na stránce by měl zůstat poslední vybraný plán.

*/

const selectPlan = (planNumber) => {

    const plans = document.querySelectorAll('.plan');

    plans.forEach(plan => plan.classList.remove('plan--selected'));

    const selectedPlan = document.getElementById(`plan${planNumber}`);
    if (selectedPlan) {
        selectedPlan.classList.add('plan--selected');
    }
};

document.querySelectorAll('.plan').forEach((plan, index) => {
    plan.addEventListener('click', () => selectPlan(index + 1));
});

window.selectPlan = selectPlan;
const IMCData = [
  { name: 'Maigreur', color: 'midnightblue', range: [0, 18.5] },
  { name: 'Bonne santé', color: 'green', range: [18.5, 25] },
  { name: 'Surpoids', color: 'lightcoral', range: [25, 30] },
  { name: 'Obésité modérée', color: 'orange', range: [30, 35] },
  { name: 'Obésité sévère', color: 'crimson', range: [35, 40] },
  { name: 'Obésité morbide', color: 'purple', range: 40 },
];

const form = document.querySelector('.form')
const inputs = document.querySelectorAll('input')
const result = document.getElementById('result')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const IMC = calculIMC()
  !isNaN(IMC) && verifRange(IMC)
})

function calculIMC() {
  const height = inputs[0].value
  const weight = inputs[1].value

  if (!height || height <= 0) return handleError('une taille')
  if (!weight || weight <= 0) return handleError('un poids')

  return (weight / ((height / 100) * (height / 100))).toFixed(1);  //Calcul IMC return with one decimal
}

function handleError(txt) {
  result.style.color = 'inherit'
  result.textContent = `Entrer ${txt} valide`
}

function verifRange(IMC) {
  const data = IMCData.find(data => {
    if (IMC >= data.range[0] && IMC < data.range[1]) return data;
    else if (typeof data.range === 'number' && IMC >= data.range) return data;
  });

  result.textContent = `Vous êtes en ${data.name} et votre IMC est de ${IMC}`
  result.style.color = data.color
}
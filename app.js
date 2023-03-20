const IMCData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
const inputHeight = document.getElementById('height')
const inputWeight = document.getElementById('weight')
const result = document.getElementById('result')
const btn = document.querySelector('button')

let profil = {
  height: 0,
  weight: 0
}

inputHeight.addEventListener('change', (e) => {
  if (isNaN(e.target.value)) { return alert('Veuiller entrer un nombre pour votre taille') }
  console.log(e.target.value);
  if (e.target.value >= 50 && e.target.value <= 240) {
    profil.height = e.target.value / 100 // Taille en metre
  } else {
    alert('Entrer une taille entre 50cm et 240cm')
  }
})

inputWeight.addEventListener('change', (e) => {
  if (isNaN(e.target.value)) { return alert('Veuiller entrer un nombre pour votre poids') }
  console.log(e.target.value);
  if (e.target.value >= 20 && e.target.value <= 500) {
    profil.weight = e.target.value
  } else {
    alert('Entrer un poids entre 20kg et 500kg')
  }
})

function financial(x) {
  return Number.parseFloat(x).toFixed(1);
}

function verifRange(imc) {
  if (isNaN(imc)) {
    result.textContent = `Veuillez entrer nombre`
    result.style.color = `black`
    return
  }
  for (const IMCD of IMCData) {
    if (imc > IMCD.range[0] && imc < IMCD.range[1]) {
      result.textContent = `Vous êtes en ${IMCD.name} votre IMC est de ${imc}`
      return result.style.color = `${IMCD.color}`


    }
  }
  result.textContent = `Vous êtes en ${IMCData[IMCData.length - 1].name} votre IMC est de ${imc}`
  result.style.color = `${IMCData[IMCData.length - 1].color}`
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  let imcBrute = profil.weight / (profil.height * profil.height);
  profil.imc = financial(imcBrute)
  verifRange(profil.imc)
})
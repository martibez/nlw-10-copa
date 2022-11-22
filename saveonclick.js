function salvaPlacar (idJogo) {
  var scr1 = document.querySelectorAll("#scr1")[idJogo - 1]
  var scr2 = document.querySelectorAll("#scr2")[idJogo - 1]

  const palpite = {
    golsT1: scr1.number.value,
    golsT2: scr2.number.value,
  }
  localStorage.setItem(idJogo, JSON.stringify(palpite))
}
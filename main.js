function createGame(group, player1, hour, player2) {
  return `
    <li>
      <p>Grupo ${group}</p>
      <div class="horario">
        <div style="width: 90px; height: 80px;">
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
          <p>${player1}</p>
        </div>
        <strong>${hour}</strong>
        <div style="width: 90px; height: 80px;">
          <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
          <p>${player2}</p>
        </div>
      </div>
    </li>
  `
}

let delay = 0
function createCard(date, day, games) {
  return `
    <div class="card" >
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.querySelector("#app").innerHTML = `
    <header>
      <img src="./assets/logo-fifa.svg" alt="Logo Copa do Mundo Fifa Qatar 2022" />
    </header>
    <main id="cards">
      ${createCard(
        "20/11",
        "domingo",
        createGame("A", "catar", "13:00", "equador")
      )}
      ${createCard(
        "21/11",
        "segunda-feira",
        createGame("B", "inglaterra", "10:00", "irã") +
          createGame("A", "senegal", "13:00", "holanda") +
          createGame("B", "estados unidos", "13:00", "gales")
      )}
      ${createCard(
        "22/11",
        "terça-feira",
        createGame("C", "argentina", "07:00", "arábia saudita") +
          createGame("D", "dinamarca", "10:00", "tunísia") +
          createGame("C", "méxico", "13:00", "polônia") +
          createGame("D", "frança", "16:00", "austrália")
      )}
      ${createCard(
        "23/11",
        "quarta-feira",
        createGame("F", "marrocos", "07:00", "croácia") +
          createGame("E", "alemanha", "10:00", "japão") +
          createGame("E", "espanha", "13:00", "costa rica") +
          createGame("F", "bélgica", "16:00", "canadá")
      )}
      ${createCard(
        "24/11",
        "quinta-feira",
        createGame("G", "suíça", "07:00", "camarões") +
          createGame("H", "uruguai", "10:00", "coreia do sul") +
          createGame("H", "portugal", "13:00", "gana") +
          createGame("G", "brasil", "16:00", "sérvia")
      )}
      ${createCard(
        "25/11",
        "sexta-feira",
        createGame("B", "gales", "07:00", "irã") +
          createGame("A", "catar", "10:00", "senegal") +
          createGame("A", "holanda", "13:00", "equador") +
          createGame("B", "inglaterra", "16:00", "estados unidos")
      )}
      ${createCard(
        "26/11",
        "sábado",
        createGame("D", "tunísia", "07:00", "austrália") +
          createGame("C", "polônia", "10:00", "arábia saudita") +
          createGame("D", "frança", "13:00", "dinamarca") +
          createGame("C", "argentina", "16:00", "méxico")
      )}
      ${createCard(
        "27/11",
        "domingo",
        createGame("E", "japão", "07:00", "costa rica") +
          createGame("F", "bélgica", "10:00", "marrocos") +
          createGame("F", "croácia", "13:00", "canadá") +
          createGame("E", "espanha", "16:00", "alemanha")
      )}
      ${createCard(
        "28/11",
        "segunda-feira",
        createGame("G", "camarões", "07:00", "sérvia") +
          createGame("H", "coreia do sul", "10:00", "gana") +
          createGame("G", "brasil", "13:00", "suíça") +
          createGame("H", "portugal", "16:00", "uruguai")
      )}
      ${createCard(
        "29/11",
        "terça-feira",
        createGame("A", "equador", "12:00", "senegal") +
          createGame("A", "holanda", "12:00", "catar") +
          createGame("B", "irã", "16:00", "estados unidos") +
          createGame("B", "gales", "16:00", "inglaterra")
      )}
      ${createCard(
        "30/11",
        "quarta-feira",
        createGame("D", "tunísia", "12:00", "frança") +
          createGame("D", "austrália", "12:00", "dinamarca") +
          createGame("C", "polônia", "16:00", "argentina") +
          createGame("C", "arábia saudita", "16:00", "méxico")
      )}
      ${createCard(
        "01/12",
        "quinta-feira",
        createGame("F", "croácia", "12:00", "bélgica") +
          createGame("F", "canadá", "12:00", "marrocos") +
          createGame("E", "japão", "16:00", "espanha") +
          createGame("E", "costa rica", "16:00", "alemanha")
      )}
      ${createCard(
        "02/12",
        "sexta-feira",
        createGame("H", "coreia do sul", "12:00", "portugal") +
          createGame("H", "gana", "12:00", "uruguai") +
          createGame("G", "sérvia", "16:00", "suíça") +
          createGame("G", "camarões", "16:00", "brasil")
      )}  
    </main>
`

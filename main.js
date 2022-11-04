function createGame(group, player1, hour, player2) {
  return `
    <li>
      <p>Grupo ${group}</p>
      <div class="horario">
        <div style="width: 90px; height: 80px;">
          <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
          <p>${player1}</p>
        </div>
        <strong>${hour}</strong>
        <div style="width: 90px; height: 80px;">
          <img src="assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
          <p>${player2}</p>
        </div>
      </div>
    </li>
  `
}

let delay = 0;
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
        createGame("A", "Catar", "13:00", "Equador")
      )}
      ${createCard(
        "21/11",
        "segunda-feira",
        createGame("B", "Inglaterra", "10:00", "Irã") +
          createGame("A", "Senegal", "13:00", "Holanda") +
          createGame("B", "EUA", "13:00", "Gales")
      )}
      ${createCard(
        "22/11",
        "terça-feira",
        createGame("C", "Argentina", "07:00", "Arábia Saudita") +
          createGame("D", "Dinamarca", "10:00", "Tunísia") +
          createGame("C", "México", "13:00", "Polônia") +
          createGame("D", "França", "16:00", "Austrália")
      )}
      ${createCard(
        "23/11",
        "quarta-feira",
        createGame("F", "Marrocos", "07:00", "Croácia") +
          createGame("E", "Alemanha", "10:00", "Japão") +
          createGame("E", "Espanha", "13:00", "Costa Rica") +
          createGame("F", "Bélgica", "16:00", "Canadá")
      )}
      ${createCard(
        "24/11",
        "quinta-feira",
        createGame("G", "Suíça", "07:00", "Camarões") +
          createGame("H", "Uruguai", "10:00", "Coreia do Sul") +
          createGame("H", "Portugal", "13:00", "Gana") +
          createGame("G", "Brasil", "16:00", "Sérvia")
      )}
      ${createCard(
        "25/11",
        "sexta-feira",
        createGame("B", "Gales", "07:00", "Irã") +
          createGame("A", "Catar", "10:00", "Senegal") +
          createGame("A", "Holanda", "13:00", "Equador") +
          createGame("B", "Inglaterra", "16:00", "EUA")
      )}
      ${createCard(
        "26/11",
        "sábado",
        createGame("D", "Tunísia", "07:00", "Austrália") +
          createGame("C", "Polônia", "10:00", "Arábia Saudita") +
          createGame("D", "França", "13:00", "Dinamarca") +
          createGame("C", "Argentina", "16:00", "México")
      )}
      ${createCard(
        "27/11",
        "domingo",
        createGame("E", "Japão", "07:00", "Costa Rica") +
          createGame("F", "Bélgica", "10:00", "Marrocos") +
          createGame("F", "Croácia", "13:00", "Canadá") +
          createGame("E", "Espanha", "16:00", "Alemanha")
      )}
      ${createCard(
        "28/11",
        "segunda-feira",
        createGame("G", "Camarões", "07:00", "Sérvia") +
          createGame("H", "Coreia do Sul", "10:00", "Gana") +
          createGame("G", "Brasil", "13:00", "Suíça") +
          createGame("H", "Portugal", "16:00", "Uruguai")
      )}
      ${createCard(
        "29/11",
        "terça-feira",
        createGame("A", "Equador", "12:00", "Senegal") +
          createGame("A", "Holanda", "12:00", "Catar") +
          createGame("B", "Irã", "16:00", "EUA") +
          createGame("B", "Gales", "16:00", "Inglaterra")
      )}
      ${createCard(
        "30/11",
        "quarta-feira",
        createGame("D", "Tunísia", "12:00", "França") +
          createGame("D", "Austrália", "12:00", "Dinamarca") +
          createGame("C", "Polônia", "16:00", "Argentina") +
          createGame("C", "Arábia Saudita", "16:00", "México")
      )}
      ${createCard(
        "01/12",
        "quinta-feira",
        createGame("F", "Croácia", "12:00", "Bélgica") +
          createGame("F", "Canadá", "12:00", "Marrocos") +
          createGame("E", "Japão", "16:00", "Espanha") +
          createGame("E", "Costa Rica", "16:00", "Alemanha")
      )}
      ${createCard(
        "02/12",
        "sexta-feira",
        createGame("H", "Coreia do Sul", "12:00", "Portugal") +
          createGame("H", "Gana", "12:00", "Uruguai") +
          createGame("G", "Sérvia", "16:00", "Suíça") +
          createGame("G", "Camarões", "16:00", "Brasil")
      )}  
    </main>
`



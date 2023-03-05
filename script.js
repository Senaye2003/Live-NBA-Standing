const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR-RAPIDAPI-KEY',
    'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
  }
};

// fetch NBA standings data
fetch('https://api-basketball.p.rapidapi.com/standings?league=12&season=2019-2020', options)
  .then(response => response.json())
  .then(response => {
    const standings = response.response[0].league.standings[0]; // get the standings data

    // create a table to display the standings
    const table = document.createElement('table');
    table.classList.add('standings-table');

    // create table headers
    const headers = ['Team', 'Wins', 'Losses'];
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    // create table rows
    const tbody = document.createElement('tbody');
    standings.forEach(team => {
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      nameTd.textContent = team.team.name;
      const winsTd = document.createElement('td');
      winsTd.textContent = team.games.win.total;
      const lossesTd = document.createElement('td');
      lossesTd.textContent = team.games.lose.total;
      tr.appendChild(nameTd);
      tr.appendChild(winsTd);
      tr.appendChild(lossesTd);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // display the table on the web page
    const standingsDiv = document.getElementById('standings');
    standingsDiv.appendChild(table);
  });
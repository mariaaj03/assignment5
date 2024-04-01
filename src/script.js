fetch("https://randomuser.me/api/?results=5")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let tableData = "";
    data.results.forEach((result, index) => {
      const firstName = result.name.first;
      const city = result.location.city;
      tableData += `<tr>
                      <th scope="row">${index + 1}</th> 
                      <td>${firstName}
                      <td>${city}</td> 
                    </tr>`;
    });
    document.querySelector("tbody").innerHTML = tableData;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

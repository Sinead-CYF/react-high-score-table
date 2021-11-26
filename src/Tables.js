import allCountryScores from "./scores";

function Tables(props) {

  const sortedCountries = allCountryScores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });

 

  return (
    <div className="tables-wrapper">
      {sortedCountries.map((country, index) => {
        return (
          <table className="table">
            <caption className="table-caption">
              {country.name}
            </caption>

            <thead>
              <tr>
                <th className="table-heading">Name</th>
                <th className="table-heading">Score</th>
              </tr>
            </thead>

            <tbody>
              {country.scores.sort((a, b) => (a.s < b.s ? 1 : -1)).map((person, index) => {
                return (
                  <tr className ="table-row">
                    <td className ="table-row-n">{person.n}</td>
                    <td className ="table-row-s">{person.s}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default Tables;

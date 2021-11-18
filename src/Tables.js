import allCountryScores from "./scores";

function Tables(props) {
  return (
    <div className="tables-wrapper">
      {allCountryScores.map((country, index) => {
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
              {country.scores.map((person, index) => {
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

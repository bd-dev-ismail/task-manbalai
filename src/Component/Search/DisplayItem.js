import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function DisplayItem({ value, country, visible, setVisible , abb ,setAbb}) {
  const data = [
    { name: "Country" },
    { name: "Abbreviation" },
    { name: "Barcode" },
    { name: "Length" },
    { name: "Religion" },
    { name: "Currency" },
  ];
  const handleNext = ()=> {
    setVisible(visible + 5);
  }
  const handlePrev = () => {
    setVisible(visible - 5);
  };
  console.log(abb);
  return (
    <div className="bg-black text-white p-2">
      <Table borderless responsive style={{ color: " #BDBDBD" }}>
        <thead>
          <tr>
            {data.map((item, idx) => (
              <th key={idx}>{item.name}</th>
            ))}
            {/* {Array.from({ length: 6 }).map((_, index) => (
              <th key={index}>Country</th>
            ))} */}
          </tr>
        </thead>

        <tbody>
          {country
            .filter((user) => user.country.toLowerCase().includes(value))
            .slice(0, visible)
            .map((item, idx) => (
              <tr key={idx}>
                <td>{item.country}</td>
              </tr>
            ))}
          {/* {abb
            .filter((abbr) => abbr.country.toLowerCase().includes(value))
            .slice(0, 5)
            .map((item, idx) => (
              <tr>
                <td>{item.abbreviation}</td>
              </tr>
            ))} */}
          {/* {country.filter.().map((item, idx) => (
            <tr>
              <td>TEst</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
      <div>
        {visible > 5 ? (
          <Button onClick={handlePrev} variant="info" className="me-3">
            Prev
          </Button>
        ) : (
          <Button disabled variant="info" className="me-3">
            Prev
          </Button>
        )}
        <Button onClick={handleNext} variant="primary">
          Next
        </Button>
      </div>
    </div>
  );
}

export default DisplayItem;

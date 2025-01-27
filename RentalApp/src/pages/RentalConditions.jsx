import { Container, Col, Row } from "react-bootstrap";

function RentalConditions() {
  return (
    <Container className="rentalCond-text mb-5">
      <Row>
        <Col className="p-4">
          <h2>Vuokrausehdot</h2>

          <h5 className="mb-3">Vuokra-aika</h5>
          <p>
            Vuokra-aika alkaa laitteen luovutushetkellä ja päättyy, kun laite on
            palautettu vuokranantajalle sopimuksen mukaisesti. Palautuspaikka
            ja -aika määritellään vuokrasopimuksessa. Myöhästyneestä
            palautuksesta on ilmoitettava vuokranantajalle heti. Myöhästymisestä
            peritään 10 €/alkava tunti. Jos laite palautetaan ennen sovittua
            vuokra-ajan päättymistä, hyvitystä ei makseta.
          </p>
          <p>
            Vuokra maksetaan etukäteen, ja vuokrasopimuksen allekirjoittaja on
            vastuussa vuokrasta, vahingoista ja ilkivallasta.
          </p>

          <h5 className="mb-3">Vuokralaisen velvollisuudet ja vastuut</h5>
          <p>
            Vuokrattua laitetta ei saa viedä Suomen rajojen ulkopuolelle, eikä
            sitä saa vuokrata edelleen kolmansille osapuolille. Laite on
            palautettava samassa kunnossa kuin luovutettaessa, lukuun ottamatta
            normaalia kulumista.
          </p>
          <ul>
            <li>
              Tarkista laite luovutushetkellä ja kirjaa mahdolliset viat tai
              puutteet yhdessä vuokranantajan kanssa.
            </li>
            <li>
              Jos vikoja ei ole kirjattu, vastuu havaittavista vioista on
              vuokralaisella.
            </li>
            <li>
              Ilmoita viipymättä vuokranantajalle laitteen teknisistä tai muista
              vioista.
            </li>
          </ul>

          <h5 className="mt-4">Korvaukset ja maksut</h5>
          <ul>
            <li>
              Vuokralainen korvaa laitteen vuokra-aikana tapahtuneet vahingot,
              joita vuokranantajan vakuutus ei kata.
            </li>
            <li>
              Vakuutuksen omavastuuosuudet: 200 € (perusvahingot) tai 500 €
              (törmäykset).
            </li>
            <li>Laitteesta kadonneiden osien korvaaminen kuuluu vuokralaiselle.</li>
            <li>
              Vuokralainen maksaa vahingoista johtuvan seisonta-ajan maksun
              (enintään 30 päivältä).
            </li>
            <li>
              Kaikki laitteen käyttöön liittyvät maksut, kuten
              leiriytymis-, pysäköinti- ja sakkomaksut, ovat vuokralaisen
              vastuulla.
            </li>
          </ul>

          <h5 className="mb-3">Toimenpiteet vika-, vahinko- ja varkaustapauksissa</h5>
          <p>
            Ilmoita viipymättä vuokranantajalle, jos laitteessa ilmenee vika,
            vahinko tai varkaus. Varkaustapauksessa tee heti ilmoitus poliisille.
          </p>
          <p>
            Liikennevahingon sattuessa tee vahinkoilmoitus ja tarvittaessa
            poliisille ilmoitus. Toimita poliisin antama todistus
            vuokranantajalle. Ilmoitusten laiminlyönti johtaa vahingon
            korvausvelvollisuuteen.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default RentalConditions;

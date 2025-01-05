import { Container } from "react-bootstrap";

function RentalConditions() {
  return (
    <Container className="rentalCond-text mt-5 ">
        
    <h2>VUOKRAUSEHDOT</h2>
      <h5 className="mb-3">Vuokra-aika</h5>
      <p>
        Vuokra-aika alkaa vuokrauksen kohteena olevan hinattavan laitteen luovutushetkellä ja kestää siihen
        saakka, kunnes vuokralainen on palauttanut sen vuokranantajille. Palautus vuokranantajille sopimuksen
        mukaisen vuokra-ajan päättyessä. Saunakärry on palautettava sovittuun paikkaan vuokrasopimuksessa
        sovitun vuokra-ajan päättyessä. Palautuksen myöhästymisestä on ilmoitettava vuokranantajille viipymättä.
        Myöhästymisestä peritään maksu 10€/jokaiselta alkavalta tunnilta. Sopimuksen mukainen vuokra-aika
        päättyy, kun hinattava laite on palautettu vuokranantajille. Vuokranantajilla ei ole velvollisuutta maksaa
        hyvitystä, jos vuokralainen palauttaa paljukärryn ennen sovitun vuokra-ajan päättymistä. Vuokra
        suoritetaan etukäteen varatulta vuokrausajalta, vuokrasopimuksen allekirjoittanut henkilö on vastuussa
        vuokran, vahinkojen ja ilkivallan maksamisesta.
      </p>

      <h5 className="mb-3">Vuokralaisen velvollisuudet ja vastuut</h5>
      <p>
        Vuokrattua hinattavaa laitetta ei saa viedä Suomen rajojen ulkopuolelle.
        Vuokralaisella ei ole oikeutta vuokrata laitetta kolmansille osapuolille.
      </p>
      <p>
        Vuokralainen on velvollinen hoitamaan hinattavaa laitetta huolellisesti ja sopimuksessa olevien ohjeiden
        mukaan niin, että ne ovat palautettaessa samassa kunnossa kuin luovutushetkellä normaalia kulumista
        lukuun ottamatta.
      </p>
      <ul>
        <li>
          Vuokralaisen on tarkistettava vuokrattava hinattava laite luovutushetkellä ja kirjattava yhdessä
          vuokranantajien kanssa ylös mahdolliset puutteet tai viat tähän sopimukseen.
        </li>
        <li>
          Mikäli puutteita tai vikoja ei ole kirjattu, on vuokralainen vastuussa näistä vioista sikäli, kuin ne ovat
          olleet vuokralaisen havaittavissa tarkastus hetkellä.
        </li>
        <li>
          Mikäli hinattavaan laitteeseen tulee tekninen tai muu vika, on tästä ilmoitettava viipymättä
          vuokranantajille.
        </li>
      </ul>
      <h5 className="mt-4">Korvaukset ja maksut</h5>
      <ul>
        <li>
          Vuokralainen on velvollinen korvaamaan kaikki hinattavalle laitteelle vuokra-aikana tapahtuneet
          vahingot, mitä vuokranantajien ottama vakuutus ei korvaa.
        </li>
        <li>
          Vuokralainen on myös velvollinen maksamaan vakuutuksen omavastuuosuuden 200€ tai 500€ (törmäys),
          mikäli vakuutusta joudutaan käyttämään.
        </li>
        <li>Korvaamaan hinattavasta laitteesta vuokra-aikana kadonneet osat.</li>
        <li>
          Suorittamaan vahinkojen aiheuttamalta seisonta-ajalta kohtuullisen vuorokausimaksun, kuitenkin
          enintään 30 vuorokaudelta. Seisonta-aika alkaa kulua vahinkopäivästä.
        </li>
        <li>
          Maksamaan kaikkine kustannuksineen vuokra-aikana hinattavan laitteen käyttämisestä aiheutuvat
          leiriytymis-, pysäköinti- ja pysäköintivirhemaksut, ylikuorma-, sakko-, rike- ja muut maksut.
        </li>
      </ul>

      <h5 className="mb-3">Vuokralaisen toimenpiteet vika-, vahinko- ja varkaustapauksissa</h5>
      <p>
        Vuokralaisen on välittömästi ilmoitettava vuokranantajille hinattavassa laitteessa ilmenneestä viasta,
        vahingosta tai varkaudesta. Varkaudesta on tehtävä viipymättä ilmoitus poliisille.
      </p>
      <p>
        Liikennevahingon sattuessa vuokralainen on aina velvollinen tekemään viipymättä vahinkoilmoituksen
        vuokranantajille. Kaikissa liikennevahingoissa joissa on mukana toinen osapuoli, on vuokralaisen
        ilmoitettava asiasta poliisille, sekä toimitettava vuokranantajalle poliisin antama todistus tehdystä
        ilmoituksesta.
      </p>
      <p>
        Jos vuokralainen laiminlyö edellä mainittujen ilmoitusten tekemisen, hän vastaa vuokranantajille siitä
        syntyneestä vahingosta.
      </p>
    </Container>
  );
}

export default RentalConditions;

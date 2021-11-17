Academy Qualification Task for Front-End Academy at Present Connection.
(Padaryta naudojant REACT biblioteką)

Task1
Pirmas puslapis: lentelė, kurioje atvaizduojami duomenys (List page)

Užkraunami duomenys iš API (https://jsonplaceholder.typicode.com/posts) į pradinį puslapį.

Task2
Į antrą puslapį patenkama paspaudus ant lentelės eilutės. Šiame puspalyje rodomos įrašo detalės (details page)

Paspaudus ant lentelės eilutės rodoma daugiau įrašo detalių. Daugiau detalių gaunama iš dar vieno API call (https://jsonplaceholder.typicode.com/posts/{ID}).
Galima buvo filtruoti pirmo API call duomenis ir pateikti juos, bet panaudotas antras API endpoint

#Kodo review/feedback galimų pataisymų sąrašas

- [x] Task 3
      Trečias puslapis (patenkama paspaudus mygtuką pridėti, kuris yra pirmajame puslapyje) skirtas sukurti naują įrašą (New record form).

- [x] Paspaudus mygtuką "PRESS ME FOR NEW POST" atsiranda forma, kurią supildžius siunčiamas post request į API (https://jsonplaceholder.typicode.com/posts). Tas postas pateikiamas consolėje.
      (tikram API būtų galima push/post prie kitų post'ų array duombazėj, bet čia tik į konsolę parodo)

Funkcionalumas:

- [x] Truputį footer'is ne vietoj details puslapyje.
- [x] Formoje nėra validacijos, leidžia tuščius saugoti.
- [x] Po formos submit galėtų būti koks pranešimas, kad viskas pavyko arba ne.
- [x] Task 3 psulapis -> Press me for the new post mygtukas nuveda į pirmą puslapį.

Kodas:

- [x] Buvo galima panaudoti react router'į, kad būtų skirtingi page. Dabar kaip ir padarei viską į vieną per conditions.
- [x] NewRecordForm irgi page, tada turėtų pavadinime turėti page kaip ir kiti.
- [x] Suspense panaudotas realiai dėl loading indikatoriaus o ne dėl elementų laodinimo tvarkos.
- [x] App.js footerį iškėliai į komponentą tai reikėjo ir header iškelti.
- [x] Footer.js kažkodėl nėra komponentų folderyje.
- [x] https://jsonplaceholder.typicode.com yra hardcode, reiktų perkelti į config'ą.
- [x] initDataApiCall -> pavadinimas galėtų daugiau pasakyti dabar gali reikšti bet kokį call į API. Taip pat čia trūksta error handlinimo.
- [x] //A bit not REACTish... teisingai, galima buvo į state, būtų nereikėja ref'u.

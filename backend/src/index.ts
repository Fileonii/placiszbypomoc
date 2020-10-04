import { ServerHelper, ApiHelper } from "./toolHelpers/appHelper";

const PORT: number = 5000;
//numer portu na którym uruchomiony jest serwer

ServerHelper.initialize();
//zainicjowanie

ServerHelper.serverStarted(PORT);
//rozpoczęcie "nasłuchiwania" serwera

ApiHelper.postApi();
//funkcja pozwalajaca na postowanie

ApiHelper.getApi();
//funkcja pozwalająca na wyświetlanie wszystkich rekordów

ApiHelper.getApiById();
//funkcja pozwalająca na wyświetlenie rekordu o zadanym id

ApiHelper.updateApi();
//funkcja pozwalająca na zaaktualizowanie rekordu

ApiHelper.deleteApi();
//funkcja pozwalajaca na usuniecie rekordu

ApiHelper.deleteAllApi();
//funkcja usuwajaca wszystkie rekordy

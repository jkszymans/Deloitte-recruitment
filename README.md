Polecenia rekrutacyjne:

Python/Django

### Do zadań z Django użyłem najprostszego domyślnego boilerplate'u. Dodatkowo nie zajmowałem się także chowaniem secretów np. SECRET_KEY. Do obsługi zależności pomiędzy paczkami użyłem poetry. :)

1.Napisz klasę w Django, która będzie zarządzać bazą danych użytkowników. Klasa powinna mieć metody umożliwiające dodawanie, usuwanie i edytowanie użytkowników, a także pobieranie informacji o nich.

### Przykładem takiej klasy jest api->users->serializers->UserSerializer, która potrafi dodawać, usuwać, edytować jak i serializować dane użytkownika, jednak na potrzeby zadania rekrutacyjnego stworzyłem dodatkową, poglądową klasę api->users->service->UserManager

2.Napisz endpoint w Django, który pozwoli na dodanie nowego produktu do bazy danych. Endpoint powinien umożliwiać wysłanie informacji o produkcie w formacie JSON, a następnie dodać ten produkt do bazy danych.

### Rozwiązanie umieszone jest w api->products. Stworzono model z dwoma polami: nazwa i cena. Zaimplementowano prosty endpoint tworzenia produktu metodą HTTP POST. Dodatkowo napisałem kilka testów(plik tests.py) sprawdzające poprawność działania endpointu.

3.Napisz funkcję w Pythonie, która pobierze listę plików z folderu i zwróci nazwy plików, które mają określone rozszerzenie (np. '.jpg' lub '.pdf'). Funkcja powinna obsługiwać dowolną ilość rozszerzeń i mieć opcjonalny parametr, który pozwoli na filtrowanie plików po dacie modyfikacji.

### Funkcja znajduję się w folderze python->3. Argumentami funkcji są: zbiór oczekiwanych rozszerzeń plików oraz opcjonalna data modyfikacji pliku.

4.Napisz endpoint w Django, który zwróci informacje o użytkownikach z bazy danych w formacie JSON. Endpoint powinien umożliwiać filtrowanie użytkowników po nazwie, emailu lub dacie rejestracji.

### Widok znajduję się w api->users->views. Użytko klasy z DRF - ModelViewSet, która udostępnia cały interfejs CRUD modelu użytkowników. Zostanie on później użyty w części frontend. Do implementacji filtrowania użyto paczki django-filters. Dopisałem kilka testów sprawdzających działanie filtrów.

5.Napisz funkcję w Pythonie, która pobierze tekst z pliku, podzieli go na słowa i zwróci listę słów, wraz z liczbą wystąpień każdego słowa. Funkcja powinna ignorować znaki interpunkcyjne oraz słowa o długości mniejszej niż 3 litery.

### Funkcja umieszczona jest w folderze python->5. Funkcja przyjmuje jako argument nazwę pliku, dla którego będą dzielone oraz zliczane słowa.

React

### Aby poprawnie sprawdzić działanie komponentów należy wcześniej uruchomić lokalnie api oraz zainstalować paczki komendą npm install, a następnie uruchomić npm start

1.Napisz komponent w React, który wyświetli listę produktów pobraną z API. Komponent powinien umożliwiać sortowanie produktów po nazwie lub cenie, a także filtrowanie po nazwie.

### Komponent Products.

2.Napisz komponent w React, który wyświetli listę użytkowników pobraną z API. Komponent powinien umożliwiać usuwanie użytkowników z listy oraz edycję ich danych.

### Komponent Users

4.Napisz komponent w React, który umożliwi dodanie nowego zadania do listy. Komponent powinien zawierać formularz umożliwiający wpisanie nazwy i opisu zadania, a także przycisk umożliwiający dodanie zadania do listy.

### Komponent Todos

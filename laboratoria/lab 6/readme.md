### Logowanie
- Dodaj nową rolę - gość. Gość może jedynie zobaczyć widok "oczekiwanie na zatwierdzenie konta".
- Zaimplementuj logowanie za pomocą OAuth Google (możesz użyć innego dostawcy jeśli chcesz)
- Domyślnie nowy użytkownik po zalogowaniu posiada rolę gość.
- Pierwsze logowanie nowego użytkownika powinno utworzyć powiadomienie dla administratorów (priorytet high) - tworzenie nowego konta w systemie.
- Dodaj widok listy użytkowników. W widoku listy możliwa jest zmiana roli użytkownika, zablokowanie go (brak wstępu do aplikacji). Dostęp do listy użytkowników mają jedynie admini.
- Likwidujemy zamockowanych użytkowników. W konfiguracji aplikacji pozostaw jedynie e-mail konta które będzie traktowany jako admin bezpośrednio po zalogowaniu ("super admin")
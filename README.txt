# Запуск приложения

1. Перейдите в каталог проекта и выполните команду:

    ### `npm instal`

    Данная команда установит все зависимости, необходимые для запуска.

2. Для запуска проекта выполните команду :
   ### `npm start`

3. Откройте [http://localhost:3000](http://localhost:3000) для просмотра приложения

# Что сделал?
#####Реализовал весь необходимый функционал указанный в ТЗ а именно:
    > Получение заявок с сервера
    > Добавление новой заявки
        > Форма новой заявки
    > Редактирование заявки
        > Добавление комментария
        > Выбор статуса
        > Выбор исполнителя
        > Выбор приоритета

# Недоработки
    > При сохранении формы редактирования, если комментарий осутствует, комментарий все равно добавляется с нулевым значением. В put запросе я сделал проверку на нулевой комментарий, и в случае если комментарий отсутствует, в теле запроса нет поля comment. Но сревер все равно создает нулевой комментарий. Возможно я не доконца разобрался в взаимодействии с API, или это какая-то недоработка API.
    > Знаю, что вверстка далеко не идельна, работаю над тем, чтобы улучшить этот навык


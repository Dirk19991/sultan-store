Проект выполнен с помощью Vite. Деплой - https://dirk19991.github.io/sultan-store/#/cosmetics

Некоторые замечания по заданию:
1. Local storage используется не только для редактирования товаров, но и для корзины, таким образом, при обновлении страницы товары в корзине сохраняются.
2. Для стилей использованы styled-components (стили в отдельных компонентах), чекбоксы и мультиселект взяты из Material UI. Позднее я увидел комментарий, что npm, относящиеся к UI использовать нельзя, но в условии задания этого не было, так что оставил как есть. Если принципиально, переделаю.
3. Админка открывается из правой части футера. Можно редактировать, добавлять (последний пункт в селекте), удалять товары, все синхронизируется с local storage.
4. Использовал три useContext для бургер-меню, товаров и корзины. Сделаны кастомные хуки для всех контекстов. Redux рассматривал, но ради трех слайсов решил не использовать его.
5. Данные взял реальные из магазина Магнит.
6. Структура проекта более или менее стандартная, из особенностей - мне нравится хранить каждый компонент в отдельной папке вместе со стилями к нему. Также присутствует иерархия в папках по принципу матрешки если компоненты рендерятся друг в друге. В папке components - переиспользуемые компоненты.
7. Мобильные компоненты сделаны отдельно, поскольку их дизайн слишком отличается от десткопной версии. Единственное исключение - сетка товаров, там все более или менее одинаково, поэтому переиспользовал компонент.
8. Использован hash роутер из-за ограничений GitHub Pages.

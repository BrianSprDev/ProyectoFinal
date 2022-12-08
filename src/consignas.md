Como sabes, todavía no tenemos nuestro detalle de ítem y este desarrollo es parte de él, así que por el momento puedes probar e importar este componente dentro del ItemListContainer, solo a
propósitos de prueba. Después lo sacaremos de aquí y lo incluiremos en el detalle del ítem. OK
Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js. Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red -->

Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante) -->
ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer de la primera pre-entrega del Proyecto Final)
Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.

Crea tu componente ItemDetailContainer con la misma premisa que ItemListContainer.

Al iniciar utilizando un efecto de montaje, debe llamar a un async mock, utilizando lo visto en la clase anterior con Promise, que en 2 segundos le devuelva un 1 ítem, y lo guarde en un estado prop

Crea tu componente ItemDetail.js

ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio

2da pre entrega

Formato: Link a último commit de git donde se cumplan los objetivos + GIF mostrando la navegabilidad. Debe tener el nombre “PreEntrega2+Apellido”.

Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom

Componentes:
Navbar con cart
Catálogo
Detalle de producto

Deberás desarrollar la navegabilidad básica de la aplicación, demostrando que la app permite ver el catálogo, y navegar a un detalle.

Rutas a configurar
‘/’ navega a <ItemListContainer />
‘/category/:id’ <ItemListContainer />
‘/item/:id’ navega a <ItemDetailContainer />

Links a configurar
Clickear en el brand debe navegar a ‘/’
Clickear un Item.js debe navegar a /item/:id
Clickear en una categoría del navbar debe navegar a /category/:categoryId

Para finalizar deberá integrar los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría.

No usar HashRouter como en el ejemplo del gif (usar BrowserRouter)
Utilizar el id de la categoría como nombre en la URL param en vez de números (vehículos, por ej)
Utilizar el id del item como URL param

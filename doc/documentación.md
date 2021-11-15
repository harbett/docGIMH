# Documentacion API

-   API: interfaz de programación de aplicaciones, que nos sirve para comunicar nos con una o mas aplicaciones desarrolladas en diferentes lenguajes de programacion por medio de protocolo http

-   node js: entorno de ejecucion para javascript del lado del servidor

## Logica

Todo el flujo de la informacion recae sobre el modulo de contratos si bien las bases de datos no relacionales no estan fuertemente ligadas a otras tablas, documentos como son llamados en este caso se necesita establecer cierta logica para comprender el origen o el porque de la informacion almacenada en el documento para tene la siguiente representacion.

![logica](./logica.PNG)

### Descripción

-   Los usuarios tienen roles de acceso los cuales les permitiran manipular la informacion almacenada de forma restringida mediante permiso pre-establecidos para cada uno de los roles que el sistema tendra dentro de su estructura.

-   Para que un usuario cuente con los permisos para poder realizar la manipulacion de la informacion necesita contar con un rol establecido para sus funciones dentro de GIMH.

-   Los usuarios dependiendo del rol que desempeñan pueden generar o realizar contratos cuyo proposito principal es establecer las reglas bajo las cuales se va a realizar un arriendo a una propiedad en especifico.

-   Los usuarios pueden crear, modificar o eliminar propiedades.

-   Los usuarios pueden crear, modificar o eliminar propietarios.

-   Los usuarios pueden crear, modificar o eliminar avales.

-   Los usuarios pueden crear, modificar o eliminar garantias.

-   Los usuarios pueden crear, modificar o eliminar valores arriendo los cuales se anexaran al contrato con el cual tienen relacion.

-   Los usuarios NO pueden modificar ni eliminar contratos que ya estan dados de alta en el sistema.

-   Los documentos llamados Contratos poseen la informacion de las propiedades, propierarios, arrendatarios, valores de arriendo, informacion de garantias y avales asociados a las condiciones de contrato establecidas por el usuario de GIMH.

# [Schema](../schema/documentación.md)

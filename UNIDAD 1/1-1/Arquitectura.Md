# ARQUITECTURA DE UNA APLICACION WEB
## Concepto de Arquitectura de una aplicacion

La arquitectura de una aplicación se refiere a la estructura fundamental y organización de los componentes de software, sus relaciones y los principios que guían su diseño. En el contexto de aplicaciones web, define cómo interactúan entre sí los diferentes elementos del sistema (frontend, backend, bases de datos, servidores, etc.) para cumplir con los requisitos funcionales y no funcionales como escalabilidad, rendimiento, seguridad y mantenibilidad.

![IMAGEN](https://www.zdapps.com.mx/wp-content/uploads/2023/05/infraestructura-de-app-movil-mexico-guadalajara.jpg)

## Tipos de arquitectura mas comunes
### De acuerdo a como se comunican las partes de una aplicacion
- #### Cliente a servidor
La arquitectura cliente-servidor es un modelo informático que divide un sistema en dos componentes: el cliente, que solicita servicios, y el servidor, que proporciona esos servicios. Esta estructura centraliza recursos y tareas, permitiendo la interacción a través de una red para gestionar eficientemente datos y procesos. Ejemplos comunes incluyen aplicaciones web, donde el navegador es el cliente y la máquina que aloja la aplicación es el servidor. 
![IMAGE2](https://edgarbc.wordpress.com/wp-content/uploads/2014/02/501f9-cliente-servidor.png)

- #### Punto a punto
La arquitectura punto a punto (P2P) es un modelo de red donde los dispositivos (nodos) comparten recursos y funciones de manera equitativa, actuando como clientes y servidores simultáneamente, sin necesidad de un servidor central. Se caracteriza por una conexión directa entre dos nodos para el intercambio de datos, lo que facilita una transmisión rápida y eficiente de información entre ellos.

![IMAGEN3](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Red_punto_a_punto.png/250px-Red_punto_a_punto.png) 

### De acuerdo a como se organiza el codigo de la aplicacion
- #### Monolito
El término "arquitectura monolítica" puede referirse a dos conceptos principales: en construcción, un edificio o estructura esculpido de una sola pieza de material, como las iglesias de Lalibela; y en desarrollo de software, una aplicación o sistema construido como una única unidad de código unificado y fuertemente acoplado, donde toda la funcionalidad (interfaz de usuario, lógica de negocio y acceso a datos) reside en una base de código compartida. 

![IMAGEN4](https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Fmonolitic-lg.png&w=1920&q=75)

- #### Capas
a arquitectura en capas es un patrón de diseño de software que organiza un sistema en módulos o "capas" independientes, cada una con una función específica y bien definida, que se comunican de forma jerárquica. Este enfoque promueve la separación de responsabilidades (SoC), lo que facilita el desarrollo, las pruebas y el mantenimiento al permitir que cada capa se gestione y modifique de forma aislada. Las capas típicas incluyen la capa de presentación (interfaz de usuario), la capa de lógica de negocio (procesamiento de datos) y la capa de acceso a datos (interacción con la base de datos). 

![IMAGEN5](https://oness.sourceforge.net/proyecto/html/images/three_layers.gif)

- #### Microservicios 
La arquitectura de microservicios es un estilo para desarrollar aplicaciones que las divide en pequeños servicios independientes, cada uno con una responsabilidad específica, que se comunican entre sí mediante APIs ligeras para formar una aplicación más grande. Esta estructura permite el desarrollo ágil, el despliegue independiente de los servicios, la resiliencia ante fallos de un solo servicio y la flexibilidad tecnológica, ya que se puede usar el lenguaje y la tecnología más adecuados para cada servicio.

![IMAGEN6](https://www.mytaskpanel.com/wp-content/uploads/2021/06/consulting-blog-31a.webp)

- #### Serverless
La arquitectura serverless permite ejecutar código sin gestionar servadores. El proveedor cloud (como AWS Lambda) se encarga de toda la infraestructura. Tus funciones se activan por eventos (peticiones HTTP, cambios en BD) y solo pagas por el tiempo de ejecución real. Es escalable automáticamente y ideal para tareas esporádicas o APIs ligeras.
![IMAGEN7](https://dc722jrlp2zu8.cloudfront.net/media/uploads/2021/09/17/1.jpg)
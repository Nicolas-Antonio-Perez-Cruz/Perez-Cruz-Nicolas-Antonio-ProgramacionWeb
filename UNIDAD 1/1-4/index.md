# **PROTOCOLO HTTP**
## **Que es http?**
El http (del inglés HyperText Transfer Protocol o Protocolo de Transferencia de Hiper Textos) es el protocolo de transmisión de información de la World Wide Web, es decir, el código que se establece para que el computador solicitante y el que contiene la información solicitada puedan “hablar” un mismo idioma a la hora de transmitir información por la red.

Con el http se establecen criterios de sintaxis y semántica informática (forma y significado) para el establecimiento de la comunicación entre los diferentes elementos que constituyen la arquitectura web: servidores, clientes, proxies. Fue creado en 1999 por el World Wide Web Consortium en colaboración con la Internet Engineering Task Force.

![Imegen1](https://i0.wp.com/academy.leewayweb.com/wp-content/uploads/2020/12/HTTP.jpg?fit=900%2C600&ssl=1)
## **Estructura de una peticion**
Una petición HTTP, también conocida como llamada HTTP, constituye la solicitud que un cliente, como un navegador web, envía a un servidor. Esta solicitud está compuesta por diversos elementos y debe seguir un formato estándar para que el servidor pueda interpretarla adecuadamente.
- **Linea de solicitud**:
Esta es la primera línea del mensaje y define la acción que se desea realizar y sobre qué recurso. 
  - Metodo HTTP: Es un verbo que indica la acción que se requiere (por ejemplo, GET para obtener un recurso, POST para enviar datos). 

  - Request-URL: Es el identificador del recurso en el servidor al que se dirige la petición. 
  - Version del protocolo HTTP: Indica la versión del protocolo utilizado para la comunicación, como HTTP/1.1. 

- **Cabeceras** 
Son líneas de texto que contienen información adicional (metadatos) sobre la solicitud, que no son parte de los datos del cuerpo. Algunos encabezados comunes son: 

  - Host:  El nombre del servidor al que se accede, siendo este el único encabezado obligatorio.

  - Accept:Indica los tipos de formato de respuesta que el cliente es capaz de entender (como text/html o application/json)
  - Content Type: Especifica el formato de los datos que se envían en el cuerpo de la petición, solo es relevante para métodos que envían datos, como POST.
  - User Agent: : Identifica al cliente que realiza la petición (por ejemplo, el navegador web).

- **Cuerpo**:
Es el cuerpo de la petición se incluye únicamente en aquellos mensajes HTTP que desean enviar datos adicionales al servidor, este componente se agrega en solicitudes que utilizan los métodos POST, PUT o PATCH, permitiendo la transferencia de información adicional junto con la solicitud

![Imagen5](https://blog.makeitreal.camp/assets/images/http-messages.jpg)

## **Metodos mas usados**
Los métodos HTTP más usados son GET (para recuperar datos), POST (para enviar datos y crear recursos), PUT (para actualizar recursos existentes), PATCH (para actualizar parcialmente un recurso) y DELETE (para eliminar recursos).
- **GET**:
Se utiliza para recuperar datos o un recurso del servidor. Las peticiones GET son idempotentes y seguras, lo que significa que no deben cambiar el estado del servidor.

- **POST**:
Se usa para enviar datos al servidor, generalmente para crear un nuevo recurso. Por ejemplo, cuando un usuario envía un formulario para registrarse o comentar.

- **PUT**:
Se emplea para actualizar un recurso existente en el servidor. Si el recurso no existe, PUT puede crearlo, aunque su uso principal es la actualización.

- **PATCH**:
: Similar a PUT, pero se utiliza para realizar una actualización parcial de un recurso existente, aplicando modificaciones específicas sin reemplazar todo el recurso.

- **DELETE**:
Se utiliza para eliminar un recurso del servidor. 

## **Codigos de estado**
 Son respuestas de tres dígitos que un servidor envía a un cliente (como un navegador web) para indicar si una solicitud ha sido procesada exitosamente, si hay un error o si se necesita más información. Se agrupan en cinco clases: 1xx (informativas), 2xx (satisfactorias), 3xx (redirección), 4xx (errores del cliente) y 5xx (errores del servidor).

 - **1xx (Informativa0):** 
  La solicitud ha sido recibida, pero el proceso aún está en curso. 

 - **2xx (Satisfactorias):**
La solicitud se completó con éxito

 - **3xx (Redireccion):**
Requiere que el cliente realice una acción adicional para completar la solicitud. 

 - **4x (Errores de cliente):**
 La solicitud no se pudo completar debido a un error del cliente. 

 - **5xx (Errores del sevidor):**
 La solicitud no se pudo completar debido a un error en el servidor. 

## **Que son los encabezados?**
Los headers en HTTP (cabeceras HTTP) son campos de texto que se envían como parte de una solicitud o respuesta HTTP. Sirven para transmitir información adicional sobre la petición o la respuesta, como el tipo de contenido, detalles del cliente o servidor, control de caché, autenticación, entre otros.

### Tipos de cabecera 
- General:
estas cabeceras no tienen ninguna relación con los datos de entrada ni de salida.
- De cosulta: estas cabeceras están relacionadas con los datos del contenido que se obtiene.
- De respuesta: estas cabeceras están relacionadas con el contenido y el origen del servidor.
- De entidad: estas cabeceras se relacionan con la información sobre el cuerpo del contenido de una petición y la obtención de una respuesta.
## **Que es y cual es la estructura de una URL?**
Una URL (por las siglas en inglés de Uniform Resource Locators) es la dirección web de un recurso de Internet, como una página web, por ejemplo.

Puedes ver la URL de la página en la que te encuentras en la barra de direcciones situada en la parte superior de la ventana de tu navegador.

Las URL son importantes porque ayudan a los usuarios a acceder a la página que quieren ver.

![Imagen2](https://static.semrush.com/blog/uploads/media/d0/dd/d0dd8be583fb876284322ca309ee11b5/QKj-iiE25c1I2Bfu6zJP_F03kCBWPZcU5z-iri13HoVUQslDP2kL-LdiBXX3WZSuNaBBMaUj1MgQW5rMgEot1ncgto9SfUDcBuR3rE0a9NwCk_6SdxJZ4NDuP9Ov7f7_dPWea5O0RjIr1ruNt3u9-ss.webp)
 ## Estructura de una URL
 Una URL se divide en 7 partes:

 ![Imagen3](https://static.semrush.com/blog/uploads/media/1c/61/1c6180e4294fd6f5f51be7067be9b2ef/ES-Parts-of-a-URL-2.webp)

 - **Protocolo:** El protocolo indica a tu navegador cómo conectarse a una página.

    Puede ser HTTP (Hypertext Transfer Protocol, o “protocolo de transferencia de hipertextos”) o HTTPS (HTTP seguro).

 - **Subdominio** Un subdominio es una cadena de letras o una palabra completa que aparece antes del primer punto de una URL.

    El subdominio más popular es www., que significa World Wide Web, comunicando que la URL es una dirección web. 

 - **Dominio:** Un dominio es la parte principal de la URL que identifica a la web. Como eBay, Expedia o Semrush.
 
 - **TLD:** El TLD (“Top level domain” en inglés, también llamado extensión de dominio) es la parte que va después del nombre de tu web, como ".com".

    - .com: webs comerciales.
    - .org: organizaciones sin ánimo de lucro.
    - .net: empresas de software y alojamiento.
    - .edu: instituciones educativas (universidades, colegios, escuelas, etc.).
    - .gov: instituciones del gobierno, como ministerios o departamentos (no en todos los países).

 - **Subcarpeta:** Una subcarpeta es una carpeta o directorio que se encuentra dentro del directorio superior (o directorio raíz) en la jerarquía de tu web.

    Por ejemplo, en la URL "www.dominio.com/zapatos/", la subcarpeta "zapatos" se encuentra dentro del directorio principal de la web, que es "www.dominio.com".
    De forma similar a los subdominios, las subcarpetas se utilizan para separar el contenido en secciones lógicas.

 - **Slug:** El slug es la parte de una URL que identifica una página específica o una entrada de una web. Ayuda a los usuarios a comprender el contexto y el contenido de una página.

 - **Parametros:** Los parámetros de URL (o cadenas de consulta) son partes de una URL que van después de un signo de interrogación (?).

    Se componen de claves y valores, separados por un signo igual (=). 
    Esta clave te indica el tipo de información que se envía, mientras que el valor indica la información enviada.


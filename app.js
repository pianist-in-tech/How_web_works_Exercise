/*
Part One: Solidify Terminology
In your own terms, define the following terms:

What is HTTP? - Hypertext Transfer Protocol is a protocol used for transferring data over the internet. It is the primary protocol used for communication between web servers and web clients, such as web browsers.

What is a URL? - Uniform Resource Locator is a string of characters that specifies the address of a resource on the internet. It consists of a protocol identifier, a domain name or IP address, and a path to a specific resource on the web server. URLs are used to access web pages, images, videos, and other types of content on the internet.

What is DNS? - Domain Name System translates human-readable domain names into IP addresses, that computers use to identify each other on the internet.

What is a query string? - It is a part of a URL that contains data to be passed to a web application. It is located after the URL path and preceded by a question maek. It is composed of one or more key-value pairs, separated by an ampersand. 

What are two HTTP verbs and how are they different? - Two common HTTP verbs are GET and POST. GET requests are used to retrieve data from a web browser. POST requests are used to send data to a web server, like submiting a form.

What is an HTTP request? - It is a message send by a client to a web server, asking for a specific resource to be returned. It includes the URL of the resource, as well as additional information such as headers and parameters.

What is an HTTP response? - It is a message sent by a web server to a client in response to an HTTP request. Typically includes the requested resource, along with aditional metadata.

What is an HTTP header? - It is a piece of data that is included in HTTP requests and responses to provide additional information about the request or respinse, such as type and size of data.
 Give a couple examples of request and response headers you have seen. - Request: Authorisation, content-type; Response: Content-Type, Content-Length.

What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser? - 1. The browser parses the URL and extract the protocol, domain name and path components. 2. Then it looks up the IP address associated with the domain name. 3. Then it initiates an HTTP request to the server identified by the IP address. 4. The server receives the request and processes it, generating an HTTp response containing the requested resource. 5. The server sends the response back to the client, which renders the content on the screen for the user to view. 


Part Two: Practice Tools

- Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
$ curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate"

- Use dig to find what the IP address is for icanhazdadjoke.com
dig icanhazdadjoke.com
172.67.198.173

Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser. 
- done
*/

//Part 3


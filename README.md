This file was created using vite an alternative to create react app. The project is a typescript react project, the reasons for using type script is to reduce and catch real-time bugs even while typing. For styling i used styled components because of its declarative way and simplicity in passing props.
The file also contains a docker image that can be used in testing the application running on node:17 alpine;
In other to run the application
The Project was built using create-vite-app, vite is an alternative for create-react-app which is currently deprecated. Vite is now the newly recommended way of creating react app.

The major project dependencies include typescript and styled components.
Typescipt ensures there are little or no bugs even while in run time(i.e while developing), it also speeds up your development once you get a hang of it.
Styled components are also a way of writing css but it follows a component structure. It ensures you maintain a clean boiler plate code structure and is also highly performant. Personally styled components takes out the need of using ref in manipulating the dom.

The Project structure maintains a very clean format and adequate comments for easy debugging, understanding and maintaining.

It also comprises of a docker file which i have made simple by including it in my public docker hub repository. To run the project simply go to your terminal and type this command <docker pull iampraizdcoder/techtime>.
Once on your local machine all you need do is type the command <docker run <imagename> > this will automatically create a container asper defined in my docker file and run it.

Note: you must have docker installed on your system pull and run.

optionally you can view the project on the web as it was temporarily created "https://techtimebuild.netlify.app/".

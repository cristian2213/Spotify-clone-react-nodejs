<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Spotify Clone</h3>

  <p align="center">
    Spotify Clone BY me cristian2213
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a> -->
    <!-- <br /> -->
    <br />
    <a href="https://spotify-clone-by-cristian2213.netlify.app/">View Demo (Just Front-end, I'm looking for back-end provider)</a>
    ·
    <a href="https://github.com/cristian2213/Spotify-clone-react-nodejs/issues">Report Bug</a>
    ·
    <a href="https://github.com/cristian2213/Spotify-clone-react-nodejs/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation Node.js</a></li>
        <li><a href="#installation2">Installation React</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<a id="about-the-project"></a>
This is a Spotify clone created with Nests and React, currently client and server are working well, but I can just deploy the front-end, because of on the back-end side I need money to pay by a cloud provider, since I'm using more than one docker container and I need a provider with support to Kubernetes, but If you want to test this project, you must execute it locally in your environment.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

<a id="built-with"></a>
These are the technologies with which this project is being built:

- [TypeScript](https://www.typescriptlang.org/)
- [Nestjs](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest#readme)
- [Swagger](https://swagger.io/)
- [Docker](https://docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Skeleton

![Skeleton](./imgs/skeleton.png?raw=true 'Skeleton')
<br/>
<br/>

## Songs

![Songs](./imgs/songs.png?raw=true 'Songs')

<br/>
<br/>

## Songs

![Search](./imgs/look.png?raw=true 'Search')

<br/>
<br/>

<!-- GETTING STARTED -->

## Getting Started

<a id="getting-started"></a>
First, make sure you have the following dependencies with this version or a newer one.

### Prerequisites

<a id="prerequisites"></a>

- node & npm
  ```sh
  v16.13.1 & v8.1.2
  ```
- Docker & Docker-compose

- A coffee on your table ☕

### Installation Node.js

<a id="installation"></a>
_To run this project, please follow the steps below to Node.js._

1. Clone the repo
   ```sh
   git clone https://github.com/cristian2213/Spotify-clone-react-nodejs
   ```
2. Run services
   ```sh
   docker-compose up -d
   ```
3. Create a .env file in the server folder and paste this variables:

   ```js
    APP_NAME=spotify
    APP_PORT=8080
    APP_HOST=http://localhost:8080/v1/

    DB_TYPE=postgres
    POSTGRES_HOST=localhost
    POSTGRES_NAME=spotify-db
    POSTGRES_USER=root
    POSTGRES_PASSWORD=123456
    POSTGRES_PORT=5432

    TYPEORM_CONNECTION=postgres
    TYPEORM_HOST=localhost
    TYPEORM_USERNAME=root
    TYPEORM_PASSWORD=123456
    TYPEORM_DATABASE=spotify-db
    TYPEORM_PORT=5432
    TYPEORM_SYNCHRONIZE=false
    TYPEORM_LOGGING=true
    TYPEORM_ENTITIES=src/**/*.entity.ts
    TYPEORM_MIGRATIONS='src/database/migrations/*.ts'
    TYPEORM_MIGRATIONS_DIR=src/database/migrations/
    TYPEORM_MIGRATIONS_TABLE_NAME=migrations
    JWT_SECRET=your-secret
   ```

4. Create a .env file in the client folder and paste this variables:

```js
  REACT_APP_HTTP_SERVER=http://localhost:8080/v1
  REACT_APP_STATIC_FILES=http://localhost:8080/
```

4. Install NPM packages in server and client folder:
   ```sh
   npm run install
   ```
5. Run Server and Client to the same time:
   ```sh
   npm run watch
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>
<br>
<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<a id="usage"></a>
Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

<!-- ## Roadmap

<a id="roadmap"></a>

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

## Contributing

<a id="contributing"></a>
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

<a id="license"></a>
Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<a id="contact"></a>
My Linkedin: [https://www.linkedin.com/in/cristian-johany/](https://www.linkedin.com/in/cristian-johany/)

<p align="right">(<a href="#top">back to top</a>)</p>

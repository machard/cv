import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, Media } from 'reactstrap';

function Main() {
  return (<div>
    <Row>
      <Col sm="4" className="mb-5">
        <Card  className="h-100">
          <CardHeader className="text-center"><b>Experience</b></CardHeader>
          <CardBody className="text-center">
            Javascript (7 years)<br />Node (7 years)<br />React (5 years)<br />React Native (3 years)
          </CardBody>
        </Card>
      </Col>
      <Col sm="8" className="mb-5">
        <Card  className="h-100">
          <CardHeader className="text-center"><b>Profile</b></CardHeader>
          <CardBody className="text-center">
            Matthieu is a French Fullstack Javascript developer who has shipped numerous minimum viable products (MVPs) for various startups. One of those MVPs—Streamroot—was sold to CenturyLink in 2019. Besides his in-depth technical know-how, Matthieu also has experience successfully collaborating on freelance projects with remote teammates based all over the world, including Japan, the US, and the UK.
          </CardBody>
        </Card>
      </Col> 
    </Row>
    <Row>
      <Col>
        <Card>
          <CardHeader className="bg-info text-white"><b>Work</b> Experiences</CardHeader>
          <CardBody>
            <Media className="page-break">
              <Media left href="#" className="mr-2">
                <Media object src="./toptal.png" width="70" />
              </Media>
              <Media body>
                <Media heading>
                  Toptal (2019-*)
                </Media>
                Toptal is the leading network of high quality freelancers.<br /><br />

                <h6>Screening project : Node API + React app for a small recommendation platform similar to Yelp.</h6>
                In 60 hours the goal is to produce a production ready web app with 4 kinds of users (anonymous, user, owner, admin) with unit tests, e2e tests, and production ready UX.<br />
                <br />The app features all the traditional user management systems (authentication, password management, email validation/verification...), anonymous users can publicly browse the restaurants and the reviews, all users can manage their account, users can post reviews, owners can manage their restaurants and reply to reviews, and admins can edit and view anything. Different kind of filtering on rates and dates had to be implemented to provide a clear and functional UX for the end user. We are left alone to identify and deal with any edge cases that arise in a way that makes sense and that actually "close" the scope.<br />
                <br />UX, security, good practices, and code quality are evaluated. I use FeathersJS with Sequelize and Postgres for the backend and React for the frontend. I now only use function components with Hooks and Contexts, no more class, no more Redux. Unit test framework is Jest and Cypress for E2E tests. UI library used is Bootstrap 4. Api documentation was displayed using Swagger.
              
                <br /><br /><Media object src="./linkedin/toptal1.png" height="150" /> <Media object src="./linkedin/toptal2.png" height="150" />

              </Media>
            </Media>
            <br /><br />
            <Media className="mt-4">
              <Media left href="#" className="mr-2">
                <Media object src="./liquid.png" width="70" />
              </Media>
              <Media body>
                <Media heading>
                  Liquid (2019-2019)
                </Media>
                Liquid is the first licensed exchange in Japan.

                <br /><br /><h6>Node Middleware API</h6>
                I developed a Node.js REST API for frontend related features. The service used a Postgres database and the main Liquid backend as its data layers. the documentation was generated in the code and displayed using Swagger, the monitoring was done using Prometheus and Grafana. The deployment used Kubernetes/Concourse/CircleCI/Heroku and was managed by a devops team.

                <br /><br /><h6>Mailing microservice</h6>
                I developed a Node.js service to replace Sendgrid templating system in order to overcome limitations when dealing with multiple languages. Templates use MJML and Handlebars.js, Github is used for storage and versioning of the templates, Redis is used as a cache between the service and Github, and a Google Chrome extension has been made in order to integrate a live editor directly within Github. The service uses SMTP for sending email.

              </Media>
            </Media>
            <br /><br />
            <Media className="mt-4">
              <Media left href="#" className="mr-2">
                <Media object src="./gigster.png" width="70" />
              </Media>
              <Media body>
                <Media heading>
                  Gigster (2016-2018)
                </Media>
                Gigster is a SF based freelancer network similar to Toptal. I worked on web, mobile and backend projects for early stage startups from UK and US. Gig are project based, the scope is defined when client signs the contract and split into 2 weeks milestones. Usually you have one guy for the Backend and one guy for the Frontend and a Product Manager for client relationship. Designers are involved in the scoping phase and we get Invision/sketch files as specs.<br /><br />
                <h6>5 iOS/Android React Native apps (Social networks and chat apps)</h6>
                All apps were done from scratch, with few native functionalities. They shared the same navigation, data and form patterns that I setup in my previous experience and allowed me to go fast. I used testflight and google play beta versions to handle releases for validation by the client.<br />
                <br /><Media object src="./linkedin/gigster1.jpeg" height="150" /> <Media object src="./linkedin/gigster3.jpeg" height="150" /> <Media object src="./linkedin/gigster5.jpeg" height="150" /> <Media object src="./linkedin/gigster6.jpeg" height="150" /> <Media object src="./linkedin/gigster7.jpeg" height="150" />
                <br /><br /><h6>1 fullstack Node/React webapp (Talent matching)</h6>
                I joined a team of 2 for this project. That's where I discovered and learned Feathers JS. This project had a very good product manager that was very good at managing client and avoiding scope creep. This project was more agile where priorities and objectives were discussed every 2 weeks. I worked on Stripe integrations, on an integrated calendar allowing talents and recruiters to find timeslots to meet and on various fix on different parts of the codebase.<br />
                <br /><Media object src="./linkedin/gigster4.jpeg" height="150"/>
                <br /><br /><h6 className="page-break-before">1 React/Relay webapp (Event planner)</h6>
                I joined as a fireman on this project to finish missing features and fix all bugs on the frontend. Luckily, Relay is really powerful and allows to go very fast. The app had no difficulty and I worked with the best backend guy ever, very responsive, very effective, little mistake, good async communication and perfect GraphQL backend. Client ended up being very happy.<br />
                <br /><Media object src="./linkedin/gigster2.jpeg" height="150" />
                <br /><br /><h6>1 data processing workflow using Serverless framework on AWS (Lambda, DynamoDB, SNS, S3)</h6>
                This one was challenging and interesting! Firstly, I had to find a way to package native git into an AWS Lambda function (limited space and specific linux environment).
                The goal was to react in realtime when docx document were uploaded to s3 to make a github web page (with custom CNAME) and markdown file of it while conserving versions, images, and formatting. As the process is not instant it had to be monitored through a small frontend and be resilient to race conditions, and failures so state needed to be managed accordingly.
                Serverless SDK with SQS, DynamoDB and S3 also required a special setup to be able to test locally, both for manual and automated tests.
              </Media>
            </Media>
            <br /><br />
            <Media className="mt-4">
              <Media left href="#" className="mr-2">
                <Media object src="./mobeye.png" width="70" />
              </Media>
              <Media body>
                <Media heading>
                  Mobeye App (2015-2016)
                </Media>
                Mobeye is an app allowing retail customers to respond to surveys from big consumer brands.<br /><br />
I built the React Native implementation of a new version of their app. It was only about 5 months after React Native was released so very challending. Challenging as well because their app relied on a lot of advanced native features such as geolocation, background fetching, and background uploading.
Also I had to come up with a dynamic navigation system as the autogenerated surveys were sometimes three levels deep.  Once everything was ready I handed over the project to their inhouse dev team.<br />Around this time I posted some PRs and open source projects on Github relative to React Native, including my trials on navigation patterns which got me 54 stars (https://github.com/machard/react-native-advanced-navigation).
              <br /><br /><Media object src="./linkedin/mobeye.jpeg" height="150" />
              </Media>
            </Media>

            <br /><br />
            <Media className="mt-4">
              <Media left href="#" className="mr-2">
                <Media object src="./viadeo.png" width="70" />
              </Media>
              <Media body>
                <Media heading>
                  Viadeo (2014-2015)
                </Media>
                Viadeo is a professional network targeting Francophone countries.<br /><br />
I took the lead in clearing the technical debt and enhancing the development workflow of the mobile middleware API (NodeJS) so that it was not a bottleneck anymore. The difficulty was to migrate to a new codebase while keeping the service in production (about 60 millions users / day). I created a "safe heaven" inside the codebase where I setup a clean architecture and added tests (non existent before) and we then proceeded to migrated every endpoint to this new architecture. The difficulty of the architecture was that there was a lot of hydration to do and there was 4 differents kinds of ids used at the time in the platform backend that needed to be converted in a lazy way. I also setup a custom documentation using special comments parsing and a react frontend. 
              </Media>
            </Media>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <br /><br />
    <br /><br />
    <Row>
      <Col>
        <Card className="mt-5">
          <CardHeader className="bg-info text-white"><b>Founder</b> Experiences</CardHeader>
          <CardBody>
            <Media>
              <Media left href="#" className="mr-2">
                <Media object src="./mc.png" width="70" />
              </Media>
              <Media body>
                <Media heading>
                  Machard Capital (2017-2019)
                </Media>
                I built a bot acting as a market maker on Coinbase EUR pairs. Coinbase is the leading retail crypto exchange in Europe.<br /><br />
                My total traded volume has been over 450M USD. Resilience to failures and performance was KEY to this project.<br />
                The bot was built with NodeJS and was using websockets streams, FIX APIs, Google Sheets, Kibana graphs, ElasticSearch and email alerts. FX was using OANDA realtime feed.<br />Over 15MB/s in/out of data was a common occurence. I was using a c5.xlarge instance.<br /><br />
                The source code can be found on my github (https://github.com/machard/mm-crypto-bot). Nowadays market making has increasingly been taken over by HFT firms such as Jump Trading and Alameda and fees have been raised making it harder for independant guys like me to compete.
                <br /><br /><Media object src="./linkedin/bot1.png" height="150" /> <Media object src="./linkedin/bot3.png" height="150" style={{ maxWidth: '100%' }} /> <Media object src="./linkedin/bot2b.png" height="80" />
              </Media>
            </Media>
            <br /><br />
            <Media className="mt-4">
              <Media left href="#" className="mr-2">
                <Media object src="./streamroot.png" width="70" />
              </Media>
              <Media body>
                <Media heading>
                  Streamroot (2012-2014)
                </Media>
                Streamroot was sold in September 2019 to CenturyLinks.
<br /><br />
Streamroot offers innovative, WebRTC-based distributed video CDN solutions (Peer to Peer P2P) to improve quality and cut bandwidth costs for VOD (video on demand) and live streaming platforms as well as global enterprise networks.
<br /><br />
Streamroot was a personal project that I started building initially with AS3/Cumulus before switching to WebRTC and WebMedia HTML5 APIs. I also designed the original idea of relying on existing streaming technologies (DASH, HLS, and so on) and of making Streamroot a plugin for existing video players.
<br /><br />
I kept founder shares when my friends took over and incorporated the company.
              </Media>
            </Media>
            <br /><br />
            <Media className="mt-4 page-break-before">
              <Media left href="#" className="mr-2">
                <Media object src="./tracktl.png" width="70" />
              </Media>
              <Media body>
                <Media heading>
                  Tracktl (2013-2014)
                </Media>
                Tracktl is a complete music streaming solution for business and events willing to interact with their audience. It is a very interactive digital jukebox. We had events of over 1000 persons interacting in realtime with it.
<br /><br />
I built the first MVP, Jukeo, using backbone.js and Node, and built the foundation of the actual product from scratch using Node and Angular. It is using SocketIO to handle realtime communications. Music is streamed from various streaming services. The app is a responsive webapp working on any device, web, tv, mobile, and within Cordova/PhoneGap.
<br /><br />
I sold my shares back to my cofounders when leaving the company. The company is still active.
                <br /><br /><Media object src="./linkedin/tracktl.jpeg" height="150" /> <Media object src="./linkedin/tracktl2.png" height="150" />
              </Media>
            </Media>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <br /><br />
    <Row>
      <Col>
        <Card className="mt-5">
          <CardHeader className="bg-info text-white"><b>Education</b></CardHeader>
          <CardBody>
            <Media className="mt-4">
              <Media left href="#" className="mr-2">
                <Media object src="./centralesupelec.png" width="70" />
              </Media>
              <Media body>
                <Media heading>
                  CentraleSupélec (2009-2013)
                </Media>
                CentraleSupeclec education is the combination of the fundamental and the applied sciences, approached from a complex perspective within a multidisciplinary framework. These disciplines include mathematics, physics, computer science and technology, energy, mechanics and industrial engineering.<br /><br />
                - Ranked among the best universities in the world; 177th by QS<br />
                - Ranked 28th by QS and 35th by THE in terms of employability
              </Media>
            </Media>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>);
};

export default Main;

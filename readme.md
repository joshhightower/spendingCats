Original File Readme below:

This has grown bigger to be a simple seed/starter project.
This is an angular 2 template project using which new projects can be developed.

This project at aimed at angular 2 beginners.. and DOES NOT contains anything to do with unit testing(karma/jasmine/whatsitsname)

git : https://gitlab.com/FullMetal/angular2-template-project.git

How to use
1) git clone https://gitlab.com/FullMetal/angular2-template-project.git
2) cd angular2-webpack-starter
3) npm i
4) npm run start
5) to deploy -> npm run build:prod. Deploy the 'dist' folder in apache or nginix. Make corresponding changes to apache conf.
6) If you have never used apache, this will be simpler... https://www.npmjs.com/package/http-server

You might also need...
Sample backend - a simple backend app. Adding the api used in frontend.Use this in tandem.
https://gitlab.com/FullMetal/express-template-project

A much more simple backend project can be found here. Might not be fully compatible.
https://gitlab.com/FullMetal/sample-backend-app


Features:
- uses Webpack 1
- lazy loading of feature modules
- offline mode. Toggle from config/appConfig.<env>.json. Set to true by default. Add functions to DummyData. See examples in LoginService, DeviceService.
- using config/env.json .. we should be able to switch config files depending on the environment
- added a grid example on devices page (https://github.com/swimlane/ngx-datatable)
- added a chart example on dashboard (https://github.com/swimlane/ngx-charts)
- maintains user session using local storage

TODOs
1) redirect to previous visited page if previous session is valid.
2) add a register user feature.
3) add tutorial.
4) find a better way to package the css files.
5) upgrade to Webpack 2

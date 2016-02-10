# FATF HTML integration
#### conversion of design into HTML
##### responsive design using HTML 5, CSS 3, JS


## Live demo
[www.maritana.ee/helmes](http://www.maritana.ee/helmes/)


## How to build

### Custom CSS and Javascript
**_Gruntfile.js_** is available in the directory root to be used with **Grunt**.

First, let's install Grunt's command line interface (CLI) globally by issuing the following command:
```
npm install -g grunt-cli
```

Change into the root directory **_( /fatf-html )_** via command line and install Grunt and required Grunt-plugin dependencies.
This can be done easily using the command shown below, it will install the required files looking into our **_package.json_** file.
```
npm install
```

While in the same directory (after installing required files) just type in the command shown below and all custom CSS and JS files will be built into **_dist/stylesheets_** and **_dist/javascripts_** directories correspondingly.
```
grunt
```

### Bootstrap CSS and Javascript
Now let's build our customized bootstrap's CSS and Javascript files. Talking about customization, some of the variables from bootstrap's variables.less file have been modified. Those changes are written into **_/public/less/bootstrap-variables-override.less_** file. That file is loaded within **_/bower_components/bootstrap/less/bootstrap.less_** (line: 59) while compiling bootstrap's final CSS file.

Navigate to bootstrap's root **_bower_components/bootstrap_** directory, then run the command shown below. Again npm will look at the **_package.json_** file and automatically install the necessary local dependencies listed there.
```
npm install
```

Now we just build all the files needed for bootstrap using the command below:
```
grunt dist
```

Finally we can check out our working **_index.html_** from the browser ;)

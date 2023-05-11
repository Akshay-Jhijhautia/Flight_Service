const dotenv = require('dotenv');

/*dotenv module returns an object, on that object call the config function
so that we can get our environment variables in place. The moment we do this 
inside our process global, we have a property env, all environment variables will
be loaded inside the object (process.env)*/

dotenv.config();


module.exports = {
    PORT: process.env.PORT
}

/* Now for every file that we need a environment variable, we are not required to 
do dotenv separately, all the exports from .env here, and import the config file, 
in that file, and we will be able to use environment variables there.*/

/* Environment variables are essential to make sure that, any varialble that is
independent of the project, like selecting a port,etc..., so we don't put that
piece of information in that project, or there might be secret keys that we might
not want to put in our project. Values of environment variables are ser outside the
project*/
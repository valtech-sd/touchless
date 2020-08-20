# Touchless

V_ is exploring various options for low-touch and touchless physical experiences. This repo holds some of these experiments.

# Files

* docs - Github Pages source content which is served at https://touchless.valtech.engineering
* src - source files for the various demos

Projects should be developed in the `/src` directory and promoted to the `/docs` directory (likely though a build script output).

>NOTE: There is NO CI for this project. Builds and deployments must be done manually.

# Contributing

This project is hosted on Github Pages and is using Jekyll to build the site. It is recommended that you use rbenv for your Ruby and GEM environment. Here is a decent [guide](https://jekyllrb.com/docs/installation/) if you need help setting up Ruby.

Install the bundler by running:

`$ gem install bundler:2.1.4`

To set up your development environment first run the following from the `docs` directory:

`$ bundle install`

To build the site and make it available on a local server:

`$ bundle exec jekyll serve`

~~In order to achieve camera access when running on localhost, you need an HTTPS certificate. You can build the certificate following the 'with Jekyll' instructions [here](https://dev.to/remotesynth/running-ssl-on-localhost-42ol).
Once you have generated the localhost.key and localhost.crt files in the project directory, you can then run:~~

~~`$ bundle exec jekyll serve --ssl-key localhost.key --ssl-cert localhost.crt`~~

# Deployment

All files in the `docs` directory will be served at [https://touchless.valtech.engineering](https://touchless.valtech.engineering). It's best to add the output of your `builds` to a subfolder in the `docs` directory. Then update the `index.html` file to link to it.

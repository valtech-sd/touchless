# Touchless

V_ is exploring various options for low-touch and touchless physical experiences. This repo holds some of these experiments.

# Files

* docs - Github Pages source content which is served at https://touchless.valtech.engineering
* demos - source files for the various demos

# Contributing

This project is hosted on Github Pages and is using Jekyll to build the site. It is recommended that you use rbenv for your Ruby and GEM environment. Here is a decent [guide](https://jekyllrb.com/docs/installation/) if you need help setting up Ruby.

To set up your development environment first run the following from the `docs` directory:

`$ bundle install`

To build the site and make it available on a local server:

`$ bundle exec jekyll serve`

In order to achieve camera access when running on localhost, you need an HTTPS certificate. You can build the certificate following the 'with Jekyll' instructions [here](https://dev.to/remotesynth/running-ssl-on-localhost-42ol).
Once you have generated the localhost.key and localhost.crt files in the project directory, you can then run:

`$ bundle exec jekyll serve --ssl-key localhost.key --ssl-cert localhost.crt`

# Deployment

All files in the `docs` directory will be served at [https://touchless.valtech.engineering](https://touchless.valtech.engineering). It's best to add the output of your `builds` to a subfolder in the `docs` directory. Then update the `index.html` file to link to it.



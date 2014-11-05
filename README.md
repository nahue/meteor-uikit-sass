uikit for meteor
==============

[uikit](http://getuikit.com/) packaged for [Meteor](https://www.meteor.com) 1.0+



### Installation

```
meteor add nahue:uikit-sass
```


## Usage


### Import scss file

add `@import ".meteor/local/build/programs/server/assets/packages/nahue_uikit-sass/uikit";` to your main scss file

### Configure

To configure uikit (change variables) just copy the file `_uikit-variables.scss` from the package root + `lib/scss` to the stylesheets main folder and import from your main scss file adding: `@import "_uikit-variables.scss"`

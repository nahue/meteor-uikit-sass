Package.describe({
  name: 'nahue:uikit-sass',
  summary: 'uikit Packaged for Meteor ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('lib');

  api.addFiles([
      "_uikit.scss",
      path.join(asset_path,"scss", "uikit.scss"),
      path.join(asset_path,"scss", "_uikit-mixins.scss"),
      path.join(asset_path,"scss", "_uikit-variables.scss"),
      path.join(asset_path,"scss", "core/_alert.scss"),
      path.join(asset_path,"scss", "core/_animation.scss"),
      path.join(asset_path,"scss", "core/_article.scss"),
      path.join(asset_path,"scss", "core/_badge.scss"),
      path.join(asset_path,"scss", "core/_base.scss"),
      path.join(asset_path,"scss", "core/_breadcrumb.scss"),
      path.join(asset_path,"scss", "core/_button.scss"),
      path.join(asset_path,"scss", "core/_close.scss"),
      path.join(asset_path,"scss", "core/_comment.scss"),
      path.join(asset_path,"scss", "core/_description-list.scss"),
      path.join(asset_path,"scss", "core/_dropdown.scss"),
      path.join(asset_path,"scss", "core/_form.scss"),
      path.join(asset_path,"scss", "core/_grid.scss"),
      path.join(asset_path,"scss", "core/_icon.scss"),
      path.join(asset_path,"scss", "core/_list.scss"),
      path.join(asset_path,"scss", "core/_modal.scss"),
      path.join(asset_path,"scss", "core/_nav.scss"),
      path.join(asset_path,"scss", "core/_navbar.scss"),
      path.join(asset_path,"scss", "core/_offcanvas.scss"),
      path.join(asset_path,"scss", "core/_overlay.scss"),
      path.join(asset_path,"scss", "core/_pagination.scss"),
      path.join(asset_path,"scss", "core/_panel.scss"),
      path.join(asset_path,"scss", "core/_print.scss"),
      path.join(asset_path,"scss", "core/_progress.scss"),
      path.join(asset_path,"scss", "core/_subnav.scss"),
      path.join(asset_path,"scss", "core/_switcher.scss"),
      path.join(asset_path,"scss", "core/_tab.scss"),
      path.join(asset_path,"scss", "core/_table.scss"),
      path.join(asset_path,"scss", "core/_text.scss"),
      path.join(asset_path,"scss", "core/_thumbnail.scss"),
      path.join(asset_path,"scss", "core/_tooltip.scss"),
      path.join(asset_path,"scss", "core/_uikit.scss"),
      path.join(asset_path,"scss", "core/_utility.scss"),
      path.join(asset_path,"scss", "core/_variables.scss"),

      path.join(asset_path,"scss","components/_autocomplete.scss"),
      path.join(asset_path,"scss","components/_cover.scss"),
      path.join(asset_path,"scss","components/_datepicker.scss"),
      path.join(asset_path,"scss","components/_dotnav.scss"),
      path.join(asset_path,"scss","components/_flex.scss"),
      path.join(asset_path,"scss","components/_form-advanced.scss"),
      path.join(asset_path,"scss","components/_form-file.scss"),
      path.join(asset_path,"scss","components/_form-password.scss"),
      path.join(asset_path,"scss","components/_form-select.scss"),
      path.join(asset_path,"scss","components/_htmleditor.scss"),
      path.join(asset_path,"scss","components/_nestable.scss"),
      path.join(asset_path,"scss","components/_notify.scss"),
      path.join(asset_path,"scss","components/_placeholder.scss"),
      path.join(asset_path,"scss","components/_search.scss"),
      path.join(asset_path,"scss","components/_slidenav.scss"),
      path.join(asset_path,"scss","components/_sortable.scss"),
      path.join(asset_path,"scss","components/_sticky.scss"),
      path.join(asset_path,"scss","components/_upload.scss")
]);
api.addFiles([
      path.join(asset_path,"js","uikit.js"),
      path.join(asset_path,"js","components/autocomplete.js"),
      path.join(asset_path,"js","components/cover.js"),
      path.join(asset_path,"js","components/datepicker.js"),
      path.join(asset_path,"js","components/form-password.js"),
      path.join(asset_path,"js","components/form-select.js"),
      path.join(asset_path,"js","components/htmleditor.js"),
      path.join(asset_path,"js","components/nestable.js"),
      path.join(asset_path,"js","components/notify.js"),
      path.join(asset_path,"js","components/pagination.js"),
      path.join(asset_path,"js","components/search.js"),
      path.join(asset_path,"js","components/sortable.js"),
      path.join(asset_path,"js","components/sticky.js"),
      path.join(asset_path,"js","components/timepicker.js"),
      path.join(asset_path,"js","components/upload.js"),

      path.join(asset_path,"js","core/alert.js"),
      path.join(asset_path,"js","core/button.js"),
      path.join(asset_path,"js","core/core.js"),
      path.join(asset_path,"js","core/dropdown.js"),
      path.join(asset_path,"js","core/grid.js"),
      path.join(asset_path,"js","core/modal.js"),
      path.join(asset_path,"js","core/nav.js"),
      path.join(asset_path,"js","core/offcanvas.js"),
      path.join(asset_path,"js","core/scrollspy.js"),
      path.join(asset_path,"js","core/smooth-scroll.js"),
      path.join(asset_path,"js","core/switcher.js"),
      path.join(asset_path,"js","core/tab.js"),
      path.join(asset_path,"js","core/toggle.js"),
      path.join(asset_path,"js","core/tooltip.js"),
      path.join(asset_path,"js","core/touch.js"),
      path.join(asset_path,"js","core/utility.js"),

  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nahue:uikit-sass');
  api.addFiles('nahue:uikit-sass-tests.js');
});
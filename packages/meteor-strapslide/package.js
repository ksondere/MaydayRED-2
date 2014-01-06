Package.describe({
    summary: "Provides strapslide 2."
});

Package.on_use(function (api) {
    api.use('jquery','client');
    api.use('templating', 'client');

    var path = Npm.require('path');
    var asset_path = path.join('strapslide-v2/strapslide');

    //css
    api.add_files(path.join(asset_path, 'css', 'strapslide.css'), 'client');
    //api.add_files(path.join(asset_path, 'css', 'strapslide-default.css'), 'client');
    api.add_files(path.join(asset_path, 'css', 'strapslide-default-v3.css'), 'client');
    //api.add_files(path.join(asset_path, 'css', 'strapslide-metro.css'), 'client');
    //api.add_files(path.join(asset_path, 'css', 'strapslide-minimalistic.css'), 'client');
    api.add_files(path.join(asset_path, 'css', 'strapslide-template.css'), 'client');

    // css-bootstrap
    api.add_files(path.join(asset_path, 'css-bootstrap', 'bootstrap.css'), 'client');
    //api.add_files(path.join(asset_path, 'css-bootstrap', 'bootstrap.min.css'), 'client');
    api.add_files(path.join(asset_path, 'css-bootstrap', 'bootstrap-responsive.css'), 'client');
    //api.add_files(path.join(asset_path, 'css-bootstrap', 'bootstrap-responsive.min.css'), 'client');

    // css-bootstrap-v3
    api.add_files(path.join(asset_path, 'css-bootstrap-v3', 'bootstrap.css'), 'client');
    //api.add_files(path.join(asset_path, 'css-bootstrap-v3', 'bootstrap.min.css'), 'client');

    // js
    api.add_files(path.join(asset_path, 'js', 'jquery.fitVids.js'), 'client');
    api.add_files(path.join(asset_path, 'js', 'jquery.mousewheel.js'), 'client');
    api.add_files(path.join(asset_path, 'js', 'jquery.touchSwipe.min.js'), 'client');
    api.add_files(path.join(asset_path, 'js', 'jquery.transit.min.js'), 'client');
    //api.add_files(path.join(asset_path, 'js', 'strapslide old.js'), 'client');
    api.add_files(path.join(asset_path, 'js', 'strapslide.js'), 'client');

    api.add_files(path.join(asset_path, 'js', 'app-slide.js'), 'client');

    // js-bootstrap
    api.add_files(path.join(asset_path, 'js-bootstrap', 'bootstrap.min.js'), 'client');

    // js-bootstrap-v3
    api.add_files(path.join(asset_path, 'js-bootstrap-v3', 'bootstrap.js'), 'client');
    api.add_files(path.join(asset_path, 'js-bootstrap-v3', 'bootstrap.min.js'), 'client');
    api.add_files(path.join(asset_path, 'js-bootstrap-v3', 'respond.min.js'), 'client');

    var base_path = path.join('strapslide-v2');
    var images = 'images';

    // templates
    api.add_files(path.join(base_path, 'templates', 'strapslide.html'), 'client');
    //images
    /*
    api.add_files(path.join(image_path, images, 'background.png'), 'client');
    api.add_files(path.join(image_path, images, 'default_appleipad.png'), 'client');
    api.add_files(path.join(image_path, images, 'default_appleiphone.png'), 'client');
    api.add_files(path.join(image_path, images, 'default_applemacbook.png'), 'client');
    api.add_files(path.join(image_path, images, 'default_background1.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'default_background2.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'default_background3.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'default_background4.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'default_background5.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'default_plane.png'), 'client');
    api.add_files(path.join(image_path, images, 'default_themes1.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'default_themes2.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'default_themes3.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'default_ufo.png'), 'client');
    api.add_files(path.join(image_path, images, 'glyphicons-halflings.png'), 'client');
    api.add_files(path.join(image_path, images, 'liststyle.png'), 'client');
    api.add_files(path.join(image_path, images, 'loader.gif'), 'client');
    api.add_files(path.join(image_path, images, 'metro_background1.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'metro_background2.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'metro_phone.png'), 'client');
    api.add_files(path.join(image_path, images, 'metro_tablet.png'), 'client');
    api.add_files(path.join(image_path, images, 'minimalistic_background1.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'minimalistic_background2.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'minimalistic_background3.jpg'), 'client');
    api.add_files(path.join(image_path, images, 'minimalistic_logo.png'), 'client');
    api.add_files(path.join(image_path, images, 'minimalistic_next.png'), 'client');
    api.add_files(path.join(image_path, images, 'minimalistic_prev.png'), 'client');
    api.add_files(path.join(image_path, images, 'minimalistic_tablet.png'), 'client');
    api.add_files(path.join(image_path, images, 'twitterlogo.png'), 'client');
    */
});
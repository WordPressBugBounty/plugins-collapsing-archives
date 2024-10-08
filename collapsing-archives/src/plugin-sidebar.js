( function ( wp ) {
    var registerPlugin = wp.plugins.registerPlugin;
    var PluginSidebar = wp.editPost.PluginSidebar;
    var el = wp.element.createElement;

    registerPlugin( 'collapsing-archives-sidebar', {
        render: function () {
            return el(
                PluginSidebar,
                {
                    name: 'collapsing-archives-sidebar',
                    icon: 'admin-post',
                    title: 'Collapsing archives sidebar',
                },
                'Meta field'
            );
        },
    } );
} )( window.wp );

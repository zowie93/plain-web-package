/*
require js config settings
 */

require.config({
    'paths'     : {
        'jquery'    : [
            '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min',
            '../lib/jquery/jquery.min'
        ],
        'bootstrap' : [
            '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min',
            '../lib/bootstrap/bootstrap.min'
        ]
    },
    'shim'      : {
        'bootstrap'     : ['jquery']
    }
});

/*
Page plugin
 */
require(['index']);
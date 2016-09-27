requirejs.config({
    waitSeconds: 20,
    shim: {
        "dotdotdot" : {
            "deps" : ["jquery"]
        },
        "m/ajaxComponent" : {
            "deps" : ["jquery"]
        }
    },
    paths: {
        "dotdotdot": "/requirejs/rjs-cool/js/vendor/jquery.dotdotdot.min",
        "jquery": "/requirejs/rjs-cool/js/vendor/jquery-3.1.1.min",
        "m": "/requirejs/rjs-cool/js/module",
        "v": "/requirejs/rjs-cool/js/vendor"
    }
});

define(['jquery'], function ($) {

    function queryCrest(q) {
        console.log(q);
        const CREST = 'https://crest-tq.eveonline.com/';
        var jqxhr = $.get({
            url: CREST + q + '/',
            data: {},
            beforeSend: function(xhr){xhr.setRequestHeader('Accept', 'application/vnd.ccp.eve.RegionCollection-v1+json');},
        }, function(results) {
            console.log('successfully retrieved: ' + q);
            $evetable = $('#evetable');
            console.log(results);
         $.each(results.items, function (i,item){
              $evetable.append(
                    "<tr>"
                      +"<td>"+item.id+"</td>"
                      +"<td>"+item.name+"</td>"
                      +"<td>"+item.href+"</td>"
                    +"</tr>" );
         });
        });       
    }

    queryCrest('constellations');
    
});
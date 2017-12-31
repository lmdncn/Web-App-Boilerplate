import * as qwest from 'qwest';

qwest.base = 'http://example.com';

// Will make a request to 'http://example.com/somepage' 
qwest.get('/somepage')
    .then(function () {
        // Blah blah 
    });


const basicApi = {

    info:
    qwest.get('/somepage')
        .then(function () {
            // Blah blah 
        }),

}
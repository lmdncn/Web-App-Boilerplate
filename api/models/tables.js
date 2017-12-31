// Table Definitions Can be generate using sql generate first we define our
// tables
var user = sql.define({
    name: 'user',
    columns: ['id', 'name', 'email', 'lastLogin']
});

var post = sql.define({
    name: 'post',
    columns: ['id', 'userId', 'date', 'title', 'body']
});

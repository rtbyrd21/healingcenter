var mysql = require('mysql');
var connection = mysql.createConnection({ host: 'localhost', user: 'api',  
                                          password: '12345', database: 'api'});

exports.all = function(req, res){
    if (connection) {
        connection.query('select * from commodores order by name', function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write(JSON.stringify(rows));
            res.end();
        });
    }
};

exports.one = function(req, res){
    var id = req.params.id;
    if (connection) {
        var queryString = 'select * from commodores where id = ?';
        connection.query(queryString, [id], function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write(JSON.stringify(rows));
            res.end();
        });
    }
};
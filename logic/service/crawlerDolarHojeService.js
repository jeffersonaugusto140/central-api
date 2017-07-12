'use strict'

var cheerio = require('cheerio');
var urlDolarHoje = '/media/jefferson/Dev/workspace.node/central-api/test/pages/cot-dolarhoje/index.html';
var options = {
    url: urlDolarHoje
};

function getFloatValue($, filter) {
    var rows = $('#divSpdInText > table > tbody > tr');
    var value = 0;

    try {
        for (var index = 0; index < rows.length; index++) {
            var element = rows[index];

            if (filter === element.children[1].children[0].children[0].data) {
                value = element.children[3].children[0].data.replace("R$ ", '').replace(',', '.');
                value = parseFloat(value, 4);
                break;
            }
        }

        return value;        
    } catch (error) {
        console.error('Falha pegando valor.');
        console.error(error);
        return 0;
    }

}

function getComercialValue($) {
    try {
        var filter = 'Dólar comercial';
        var rows = $('#divSpdInText > table > tbody > tr');
        var value = 0;
        var element = rows[0];
        value = element.children[3].children[0].data.replace("R$ ", '').replace(',', '.');
        value = parseFloat(value, 4);
        return value;
    } catch (error) {
        console.error('Falha pegando dólar comercial.');
        console.error(error);
        return 0;
    }
}

function getTurismValue($) {
    try {
        var filter = 'Dólar turismo';
        var rows = $('#divSpdInText > table > tbody > tr');
        var value = 0;
        var element = rows[1];
        value = element.children[3].children[0].data.replace("R$ ", '').replace(',', '.');
        value = parseFloat(value, 4);
        return value;
    } catch (error) {
        console.error('Falha pegando dólar comercial.');
        console.error(error);
        return 0;
    }
}

function get(crawlerContent, callback) {
    crawlerContent.get(options, function (textHtml) {
        var $ = cheerio.load(textHtml);

        callback({
            comercialValue: getComercialValue($),
            turismValue: getTurismValue($),
            sourseName: '',
            timeQuery: new Date()
        });
    });
}

module.exports = {
    get: get
}
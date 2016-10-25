const fs = require('fs');
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('test.txt').setEncoding('utf8')
});

lineReader.on('line', function(line){
    var arr = line.split(/\t+/);
    var nameArr = arr[0].split('，');

    if( nameArr.length > 1){
        nameArr.forEach(function(data){
            console.log(data, arr[1], arr[2], arr[3]);
            fs.appendFile('result.txt', `${data}    ${arr[1]}    ${arr[2]}     ${arr[3]} \n`);
        });
    } else {
        console.log(arr[0], arr[1], arr[2], arr[3])
        fs.appendFile('result.txt', `${arr[0]}    ${arr[1]}    ${arr[2]}     ${arr[3]} \n`);
    }
});

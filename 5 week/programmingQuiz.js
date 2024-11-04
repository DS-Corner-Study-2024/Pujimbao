//8번
const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme.txt');
writeStream.on('finish', () => {
    console.log("write 완료");
})

writeStream.write("write1");
writeStream.write("write2");
writeStream.end();

//9번
const fs = require('fs');
//readme2.txt파일로 읽어오시오.
console.log('시작');
fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme.txt', (err, data) => {
        if(err) {
            throw err;
        }
        console.log('2번', );
        fs.readFile('./readme.txt', (err, data) => {
            if(err) {
                throw err;
            }
        console.log('3번', );
        console.log('끝');
        });
    });
});
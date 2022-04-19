

var fs = require('fs');
const { Parser } = require('json2csv');
var newLine = '\r\n';

const dataCtrl = {
    savetocsv: async (req, res) => {
        try {
            //console.log(req.body.Face)
            ////////////////////
            var fields = [
                'lw',
                'Jawcheckbone',
                'dadhijaw',
                'left1lcenter',
                'left2lcenter',
                'left3lcenter',
                'left4lcenter',
                'left5lcenter',
                'left6lcenter',
                'left7lcenter',
                'left8lcenter',
                'left9lcenter',
                'right1lcenter',
                'right2lcenter',
                'right3lcenter',
                'right4lcenter',
                'right5lcenter',
                'right6lcenter',
                'right7lcenter',
                'right8lcenter',
                'right9lcenter',
            ];


            // 1 heart
            // 2.square
            // 3.round
            // 4.oblog
            // 5.oval


            fs.stat('file1.csv', function (err, stat) {
                if (err == null) {
                    // console.log('File exists');

                    //write the actual data and end with newline
                    // var csv = json2csv(req.body) + newLine;

                    const json2csvParser = new Parser({
                        fields, header: false
                    });
                    const csv = json2csvParser.parse(req.body.Face) + newLine;

                    // console.log(csv)

                    fs.appendFile('file1.csv', csv, function (err) {
                        if (err) throw err;
                        // console.log('The "data to append" was appended to file!');
                    });
                } else {
                    //write the headers and newline
                    // console.log('New file, just writing headers');
                    fields = fields + newLine;

                    fs.writeFile('file1.csv', fields, function (err) {
                        if (err) throw err;
                        // console.log('file saved');
                    });
                }
            });





            ////////////////////


            res.json({
                status: 'success',
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


module.exports = dataCtrl   
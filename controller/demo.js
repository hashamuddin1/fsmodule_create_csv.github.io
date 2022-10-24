let fs = require("fs");
let { promisify } = require('util')
let csv = require("fast-csv");
const datarr = [{
        balance: 1249668888,
        rate: 13,
        minimumPayment: 1475,
        interestAmount: 1353.7983333333334,
        interestRate: 0.13,
        totalInterestPaid: 13594.798333333334,
        principlePaid: 121.2016666666666,
        endingBalance: 124844.79833333334,
        isLastMonth: false,
        loanId: 1,
        university: "ubit"
    },
    {
        balance: 887761.35,
        rate: 8,
        minimumPayment: 75,
        interestAmount: 59.07566666666667,
        interestRate: 0.08,
        totalInterestPaid: 595.4256666666666,
        principlePaid: 15.92433333333333,
        endingBalance: 8845.425666666668,
        isLastMonth: false,
        loanId: 2,
        university: "ku"
    },
    {
        balance: 124844.8,
        rate: 13,
        minimumPayment: 1475,
        interestAmount: 1352.4853333333333,
        interestRate: 0.13,
        totalInterestPaid: 14947.285333333333,
        principlePaid: 122.5146666666667,
        endingBalance: 124722.28533333333,
        isLastMonth: false,
        loanId: 3,
        university: "ku"
    },
    {
        balance: 8845.43,
        rate: 8,
        minimumPayment: 75,
        interestAmount: 58.96953333333334,
        interestRate: 0.08,
        totalInterestPaid: 654.3995333333332,
        principlePaid: 16.030466666666662,
        endingBalance: 8829.399533333333,
        isLastMonth: false,
        loanId: 4,
        university: "ku"
    },
    {
        balance: 124722.29,
        rate: 13,
        minimumPayment: 1475,
        interestAmount: 1351.1581416666666,
        interestRate: 0.13,
        totalInterestPaid: 16298.448141666668,
        principlePaid: 123.84185833333345,
        endingBalance: 124598.44814166665,
        isLastMonth: false,
        loanId: 5,
        university: "ku"
    },
]


//insert data
const insertdata = async(req, res) => {
    try {
        //write data
        // let balance = req.body.balance;
        // let rate = req.body.rate;
        // let minimumPayment = req.body.minimumPayment;
        // let interestAmount = req.body.interestAmount;
        // let interestRate = req.body.interestRate;
        // let totalInterestPaid = req.body.totalInterestPaid;
        // let principlePaid = req.body.principlePaid;
        // let endingBalance = req.body.endingBalance;
        // let isLastMonth = req.body.isLastMonth;
        // let loanId = req.body.loanId;
        // csv.write([
        //     ["balance", "rate", "minimumPayment", "interestAmount", "interestRate", "totalInterestPaid", "principlePaid", "endingBalance", "isLastMonth", "loanId"],
        //     [balance, rate, minimumPayment, interestAmount, interestRate, totalInterestPaid, principlePaid, endingBalance, isLastMonth, loanId],
        //     // [8861.35, 8, 75, 59.07566666666667, 0.08, 595.4256666666666, 15.92433333333333, 8845.425666666668, false, 2]
        // ], { headers: true }).pipe(wf);


        // let wf = './data.csv';
        // let filePath = "./data.csv";
        // console.log('dirname', __dirname);
        // fs.exists(filePath, function(exists) {
        //     console.log(exists)
        //     if (exists) {
        //         fs.unlinkSync(filePath);
        //         console.log("File Is Deleted")
        //         csv.write(datarr, { headers: true }).pipe(wf);
        //         res.send("Data Inserted Successfully")
        //         console.log("Data is Inserted")
        //     } else {
        //         let cf = fs.createWriteStream('./controller/data.csv')
        //         csv.write(datarr, { headers: true }).pipe(cf);
        //         console.log('File not found, so not deleting.');
        //         res.send("New file Is created ")
        //     }
        // });
        let filePath = "./data.csv";
        console.log('dir---', __dirname);
        const filea = `${__dirname}\\data.csv`;
        console.log('dir2---', filea);
        const existPromise = promisify(fs.exists);
        let demo = await existPromise(filea)
        console.log(demo)
        let wf = `${__dirname}\\data.csv`;
        if (demo) {
            fs.unlinkSync(`${__dirname}\\data.csv`);
            console.log("File Is Deleted")
            let cf = fs.createWriteStream(`${__dirname}\\data.csv`)
            console.log("File is created")
            csv.write(datarr, { headers: true }).pipe(cf);
            res.send("Data Inserted Successfully")
            console.log("Data is Inserted")
        } else {
            let cf = fs.createWriteStream(`${__dirname}\\data.csv`)
            csv.write(datarr, { headers: true }).pipe(cf);
            console.log('File not found, so not deleting.');
            res.send("New file Is created ")
        }

    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

module.exports = { insertdata }
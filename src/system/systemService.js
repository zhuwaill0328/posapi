var systemModel = require('./systemModel')


module.exports.getSystemDetails = (t) => {

    return new Promise(function checkURL(resolve, reject) {

        systemModel.find(t, function returnData(error, result) {
            if (error) reject(false);
            else resolve(result);
        })

    }).catch(error => {
        return error;
    });


};

module.exports.saveSystemDetails = (t) => {

    return new Promise(function myFn(resolve, reject) {
        var sys = new systemModel();
        sys.Company = t.Company
        sys.GcashRates = t.GcashRates

        sys.save(function resultHandle(error, result) {
            if (error) reject(false);
            else resolve(result);
        });

    }).catch(error => {
        return error;
    });


};

module.exports.updateSystemDetails = (t) => {

    return new Promise(function myFn(resolve, reject) {
        systemModel.findOneAndUpdate(t.Id, t,{upsert: true} , function returnData(error, result) {
            if (error) reject(false);
            else resolve(result);

        });

    }).catch(error => {
        return error;
    });


};



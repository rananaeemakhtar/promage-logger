const Logger = require("../models/Logger");
const { Success, ServerError } = require("../utils/Responses");

var self = (module.exports = {

    store(req, res){
        try {
            const data = req.body;
            
            const log = new Logger({
                data: JSON.stringify(data),
            });

            log.save((error, Log) => {
                if(error) {
                    return ServerError(res, error.message);
                }

                return Success(res, "Log Stored");
            });
        } catch (e) {
            return ServerError(res, e.message);
        }
    },

});
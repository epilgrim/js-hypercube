function ReportsBuilder() {
    this._metadata= {
        'main' : {
            'date': {
                'dimension': true
            },
            'country': {
                'dimension': true
            },
            'visits': {
                'dimension': false
            },
            'signups': {
                'dimension': false
            }
        },
        'by_country': {
            'country': {
                'dimension': true
            },
            'visits': {
                'dimension': false
            },
            'signups': {
                'dimension': false
            }
        }
    }
    this._data = {
        'main': [
            {"facts":{"date":1385942400 ,"country":"es"},"measures":{"visits":10,"signups":1}},
            {"facts":{"date":1385942400 ,"country":"ar"},"measures":{"visits":20,"signups":10}},
            {"facts":{"date":1385942400 ,"country":"uk"},"measures":{"visits":30,"signups":5}},
            {"facts":{"date":1385942400 ,"country":"es"},"measures":{"visits":40,"signups":3}},
            {"facts":{"date":1385942400 ,"country":"ar"},"measures":{"visits":50,"signups":7}},
            {"facts":{"date":1385942400 ,"country":"uk"},"measures":{"visits":60,"signups":4}},
            {"facts":{"date":1385942400 ,"country":"ar"},"measures":{"visits":70,"signups":7}},
            {"facts":{"date":1386028800 ,"country":"es"},"measures":{"visits":80,"signups":2}},
            {"facts":{"date":1386028800 ,"country":"uk"},"measures":{"visits":90,"signups":5}},
        ],
        'by_country': [
            {"facts":{"country":"es"},"measures":{"visits":130,"signups":6}},
            {"facts":{"country":"ar"},"measures":{"visits":90, "signups":24}},
            {"facts":{"country":"uk"},"measures":{"visits":180,"signups":14}},
        ],
    };

}

ReportsBuilder.prototype.getReportKeys = function (){
    return Object.keys(this._metadata);
};
ReportsBuilder.prototype.getReportsCollection = function (){
    var reports = [];
    var self = this;
    this.getReportKeys().forEach(function(key){
        reports.push(new Report(key, self._data[key], self._metadata[key]));
    });
    return new ReportsCollection(reports);
};


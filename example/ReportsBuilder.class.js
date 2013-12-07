function ReportsBuilder() {
    this._metadata= {
        'main' : [
            {
                'name': 'date',
                'key': 'date',
                'isFact': true,
                'type': 'date',
                'format': 'y-m-d'
            },
            {
                'name': 'country',
                'key': 'country',
                'isFact': true,
                'type': 'string'
            },
            {
                'name': 'visits',
                'key': 'visits',
                'isFact': false,
                'type': 'string'
            },
            {
                'name': 'signups',
                'key': 'signups',
                'isFact': false,
                'type': 'string'
            }
        ],
        'by_country': [
            {
                'name': 'country',
                'key': 'country',
                'isFact': true,
                'type': 'string'
            },
            {
                'name': 'visits',
                'key': 'visits',
                'isFact': false,
                'type': 'string'
            },
            {
                'name': 'signups',
                'key': 'signups',
                'isFact': false,
                'type': 'string'
            }
        ]
    };
    this._data = {
        'main': [
            {"facts":{"date":1385942400 ,"country":"es"},"measures":{"visits":10,"signups":1}},
            {"facts":{"date":1385942400 ,"country":"ar"},"measures":{"visits":20,"signups":10}},
            {"facts":{"date":1385942400 ,"country":"uk"},"measures":{"visits":30,"signups":5}},
            {"facts":{"date":1385982400 ,"country":"es"},"measures":{"visits":40,"signups":3}},
            {"facts":{"date":1385982400 ,"country":"ar"},"measures":{"visits":50,"signups":7}},
            {"facts":{"date":1385982400 ,"country":"uk"},"measures":{"visits":90,"signups":4}},
            {"facts":{"date":1386028800 ,"country":"ar"},"measures":{"visits":40,"signups":7}},
            {"facts":{"date":1386028800 ,"country":"es"},"measures":{"visits":100,"signups":2}},
            {"facts":{"date":1386028800 ,"country":"uk"},"measures":{"visits":20,"signups":5}}
        ],
        'by_country': [
            {"facts":{"country":"es"},"measures":{"visits":130,"signups":6}},
            {"facts":{"country":"ar"},"measures":{"visits":90, "signups":24}},
            {"facts":{"country":"uk"},"measures":{"visits":180,"signups":14}}
        ]
    };

}

ReportsBuilder.prototype.getReportKeys = function (){
    return Object.keys(this._metadata);
};
ReportsBuilder.prototype.getReportsCollection = function (){
    var collection = new ReportsCollection();

    var self = this;
    this.getReportKeys().forEach(function(key){
        var report = new ps.Cube.deserialize(self._data[key], self._metadata[key]);
        collection.addReport(key, report);
    });
    return collection;
};


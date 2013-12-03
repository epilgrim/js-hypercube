function ReportsCollection(reports) {
    reports = reports || {};

    this._reports = {};
    var self = this;

    Object.keys(reports).forEach(function(key){
        self._reports[reports[key].getKey()] = reports[key];
    });
}
ReportsCollection.prototype.addReport = function(report) {
    return this._reports[report.getKey] = report;
};
ReportsCollection.prototype.getReport = function(key) {
    return this._reports[key];
};
ReportsCollection.prototype.getKeys = function() {
    return Object.keys(this._reports);
};

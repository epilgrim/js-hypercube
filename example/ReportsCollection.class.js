function ReportsCollection(reports) {
    reports = reports || {};

    this._reports = {};
    var self = this;

    self._reports = reports;
}
ReportsCollection.prototype.addReport = function(key, report) {
    return this._reports[key] = report;
};
ReportsCollection.prototype.getReport = function(key) {
    return this._reports[key];
};
ReportsCollection.prototype.getKeys = function() {
    return Object.keys(this._reports);
};

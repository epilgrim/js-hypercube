function ReportsCollection() {
    this._reports = {};
    this._metadata = {};
};
ReportsCollection.prototype.addReport = function(key, report, metadata) {
    this._reports[key] = report;
    this._metadata[key] = metadata;
};
ReportsCollection.prototype.getData = function(key) {
    return this._reports[key];
};
ReportsCollection.prototype.getMetadata = function(key) {
    return this._metadata[key];
};
ReportsCollection.prototype.getKeys = function() {
    return Object.keys(this._reports);
};

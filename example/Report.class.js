function Report(key, data, metadata) {
    this._key = key;
    this._metadata = metadata;
    this._cubes = ps.Cube.deserialize(data);
}

Report.prototype.getKey = function() {
    return this._key;
};
Report.prototype.getData = function() {
    return this._cubes;
};
Report.prototype.getMetadata = function() {
    return this._metadata;
};
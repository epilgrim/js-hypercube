function ReportMetadata(metadata) {
    metadata = metadata || [];
    this._metadata = metadata;
    this._metadataIndex = {};
    this._buildMetadataIndex();
}

ReportMetadata.prototype.set = function(metadata) {
    this._metadata = metadata;
    this._buildMetadataIndex();
};
ReportMetadata.prototype.get = function(key) {
    if (key != undefined){
        return this._metadata[this._metadataIndex[key]];
    }
    return this._metadata;
};

ReportMetadata.prototype.getKeys = function (){
    return _.map(this._metadata, function (value){
        return value.key;
    });
};
ReportMetadata.prototype.getDimensionKeys = function (){
    return _.filter(this._metadata, function (value){ return value.isFact});
};
ReportMetadata.prototype.getMeasuresKeys = function (){
    return _.filter(this._metadata, function (value){ return !value.isFact});
};
ReportMetadata.prototype.isDimension = function (key){
    var meta = this._metadata[this._metadataIndex[key]];
    return meta && meta.isFact;
};
ReportMetadata.prototype._buildMetadataIndex = function (){
    this._metadataIndex = {};
    var self = this;
    _.each(this._metadata, function(element, index){
        self._metadataIndex[element.key] = index;
    });
}

/**
 * Exports the data to an array of arrays
 *
 * @return {Array}		The array containing the array of values
 */
ReportMetadata.prototype.toTable = function(cube) {
    var cube_serialized = cube.serialize();
    var values = [];
    var self = this;
    for (var i = 0, il = cube_serialized.length; i < il; ++i) {
        var temp = [];
        this.getKeys().forEach(function (key){
            if (self.isDimension(key)){
                temp.push(cube_serialized[i].facts[key]);
            } else {
                temp.push(cube_serialized[i].measures[key]);
            }
        });
        values.push(temp);
    }

    return values;
};

/**
 * Exports the metadata to configure dataTables columns
 *
 * @return {Array}		The array containing the array of values
 */

ReportMetadata.prototype.headersForDataTables = function (){
    var headers = [];
    var self = this;
    this.getKeys().forEach(function (key){
        headers.push({'sTitle': self.get(key).name});
    });
    return headers;
};
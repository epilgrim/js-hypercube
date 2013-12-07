/**
 * Returns an array with the values of the measure
 *
 * @param {string=} measure	Required. The measure to get the values from
 * @return {Array}		The array with the values
 */
ps.Cube.prototype.extractMeasureValues = function(measure) {
    var values	= [];
    if (!this._cells || !this._cells.length) {
        return values;
    }

    for (var i = 0, il = this._cells.length; i < il; ++i) {
        values.push(this._cells[i].measures[measure]);
    }

    return values;
};

/**
 * Exports the data to an array of arrays
 *
 * @return {Array}		The array containing the array of values
 */
ps.Cube.prototype.exportDataToTable = function() {
    var values	= [];
    if (!this._cells || !this._cells.length) {
        return values;
    }

    for (var i = 0, il = this._cells.length; i < il; ++i) {
        var temp = [];
        self = this;
        this.getMetadata().forEach(function (field){
            if (field.isFact){
                temp.push(self._cells[i].facts[field.key]);
            } else {
                temp.push(self._cells[i].measures[field.key]);
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

ps.Cube.prototype.exportHeadersToDataTables = function (){
    var headers = [];
    this.getMetadata().forEach(function (field){
        headers.push({'sTitle': field.name});
    });
    return headers;
};
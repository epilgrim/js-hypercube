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

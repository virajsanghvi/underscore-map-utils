//     (c) 2012 Viraj Sanghvi 
//     underscore-eval-string is freely distributable under the MIT license.

_.mixin({

    /**
     * Given a map, will return another map which
     * only includes/excludes key/value pairs
     * specified by attributes
     *
     * @param {Object} map Map to filter
     * @param {Array} attributes Attributes to include/exclude 
     * @param {Boolean} exlude Whether to exclude (optional)
     */
    filterMap: function(map, attributes, exclude) {
        var newMap = {};
        for (var attr in map) {
            var i = _.indexOf(attributes, attr);
            if ((!exclude && i >= 0) || 
                (exclude && i < 0)) {
                newMap[attr] = map[attr];
            }
        }
        return newMap;
    },
    
    /**
     * Returns changed attributes between maps
     * @param {Object} old 
     * @param {Object} new 
     * @returns {Object} changeattributes map 
     */
    diffMap: function (old, now) {
        old = old || {};
        now = now || {};
        var changed = false;
        for (var attr in now) {
            if (!_.isEqual(old[attr], now[attr])) {
                changed = changed || {};
                changed[attr] = now[attr];
            }
        }
        return changed;
    }

});


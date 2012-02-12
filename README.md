# Underscore map utils mixin 
  
This [underscore](http://documentcloud.github.com/underscore/) mixin gives you additional methods that are helpful while working with maps/hashes 

# Setup

1. Include [underscore.js](http://documentcloud.github.com/underscore/underscore-min.js) 
1. Include [underscore-map-utils.js](https://github.com/virajsanghvi/underscore-map-utils)

# Usage

<pre>
    /**
     * Given a map, will return another map which
     * only includes/excludes key/value pairs
     * specified by attributes
     *
     * @param {Object} map Map to filter
     * @param {Array} attributes Attributes to include/exclude 
     * @param {Boolean} exlude Whether to exclude (optional)
     */
    _.filterMap(map, attributes, exclude)

    /**
     * Returns changed attributes between maps
     * @param {Object} old 
     * @param {Object} new 
     * @returns {Object} changeattributes map 
     */
    _.diffMap(old, now)
</pre>


/**
 * source: validator.js
 */
const IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
const IPv4AddressRegExp = new RegExp(`^${IPv4AddressFormat}$`);

const IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
const IPv6AddressRegExp = new RegExp('^(' +
    `(?:${IPv6SegmentFormat}:){7}(?:${IPv6SegmentFormat}|:)|` +
    `(?:${IPv6SegmentFormat}:){6}(?:${IPv4AddressFormat}|:${IPv6SegmentFormat}|:)|` +
    `(?:${IPv6SegmentFormat}:){5}(?::${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,2}|:)|` +
    `(?:${IPv6SegmentFormat}:){4}(?:(:${IPv6SegmentFormat}){0,1}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,3}|:)|` +
    `(?:${IPv6SegmentFormat}:){3}(?:(:${IPv6SegmentFormat}){0,2}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,4}|:)|` +
    `(?:${IPv6SegmentFormat}:){2}(?:(:${IPv6SegmentFormat}){0,3}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,5}|:)|` +
    `(?:${IPv6SegmentFormat}:){1}(?:(:${IPv6SegmentFormat}){0,4}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,6}|:)|` +
    `(?::((?::${IPv6SegmentFormat}){0,5}:${IPv4AddressFormat}|(?::${IPv6SegmentFormat}){1,7}|:))` +
    ')(%[0-9a-zA-Z.]{1,})?$');

// Check validity of IP address
export function isIP(ipAddress, options = {}) {
    // accessing 'arguments' for backwards compatibility: isIP(ipAddress [, version])
    // eslint-disable-next-line prefer-rest-params
    const version = (typeof options === 'object' ? options.version : arguments[1]) || '';

    if (!version) {
        return isIP(ipAddress, { version: 4 }) || isIP(ipAddress, { version: 6 });
    }

    if (version.toString() === '4') {
        return IPv4AddressRegExp.test(ipAddress);
    }

    if (version.toString() === '6') {
        return IPv6AddressRegExp.test(ipAddress);
    }

    return false;
}

const options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false,
    ignore_max_length: false,
};

// Check validity of domain name
export function isFQDN(str) {

    /* Remove the optional trailing dot before checking validity */
    if (options.allow_trailing_dot && str[str.length - 1] === '.') {
        str = str.substring(0, str.length - 1);
    }

    /* Remove the optional wildcard before checking validity */
    if (options.allow_wildcard === true && str.indexOf('*.') === 0) {
        str = str.substring(2);
    }

    const parts = str.split('.');
    const tld = parts[parts.length - 1];

    if (options.require_tld) {
        // disallow fqdns without tld
        if (parts.length < 2) {
            return false;
        }

        if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
            return false;
        }

        // disallow spaces
        if (/\s/.test(tld)) {
            return false;
        }
    }

    // reject numeric TLDs
    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
        return false;
    }

    return parts.every((part) => {
        if (part.length > 63 && !options.ignore_max_length) {
            return false;
        }

        if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
            return false;
        }

        // disallow full-width chars
        if (/[\uff01-\uff5e]/.test(part)) {
            return false;
        }

        // disallow parts starting or ending with hyphen
        if (/^-|-$/.test(part)) {
            return false;
        }

        if (!options.allow_underscores && /_/.test(part)) {
            return false;
        }

        return true;
    });
}

// @ts-nocheck
export function getMaxZIndex() {
    return Math.max(...Array.from(document.querySelectorAll('body > *'), el => parseFloat(window.getComputedStyle(el).zIndex)).filter(zIndex => !Number.isNaN(zIndex)), 2000) + 1
}

export function formatDate(date, fmt = 'yyyy-MM-dd HH:mm:ss') {
    // if (typeof date === 'string') {
    //     return date
    // }
    if ([null, undefined, '', NaN].includes(date)) {
        return null
    }
    date = new Date(date)
    if (date.toString() === 'Invalid Date') {
        throw new Error('非法的日期格式')
    }
    const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'H+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        }
    }
    return fmt
}

export function getDigits(num) {
    return (Math.log(num) * Math.LOG10E + 1) | 0
}

export function retainDigits(num, retianVal) {
    const val = Math.pow(10, retianVal)
    return Math.round(num * val) / val
}

export function simplifyNumber(num, retainedDigits = 2) {
    const type = typeof num
    let unit = ''
    if (type == 'string') {
        num -= 0
    } else if (type != 'number') {
        return { value: '', unit }
    }
    const digits = getDigits(num)
    if (digits < 5) {
        return { value: num, unit }
    }
    if (digits < 9) {
        num = retainDigits(num / Math.pow(10, 4), retainedDigits)
        unit = '万'
    } else if (digits < 13) {
        num = retainDigits(num / Math.pow(10, 8), retainedDigits)
        unit = '亿'
    } else {
        num = retainDigits(num / Math.pow(10, 12), retainedDigits)
        unit = '万亿'
    }
    return {
        value: type == 'string' ? num + '' : num,
        unit
    }
}

export function getNumberByString(val) {
    if (typeof val == 'string') {
        const v = val.replace(/\D/g, '') - 0
        return Number.isNaN(v) ? 0 : v
    }
    return val
}

export function convertNumberByString(val) {
    if (typeof val == 'string') {
        const v = val - 0
        return Number.isNaN(v) ? 0 : v
    }
    return val
}

export function gettPositiveIntegerByString(val) {
    if (typeof val == 'string') {
        let v = val.replace(/\D/g, '') - 0
        v = Number.isNaN(v) ? 0 : Math.round(v)
        return Math.max(v, 0)
    }
    return Math.max(Math.round(val), 0)
}

export function convertPositiveIntegerByString(val) {
    if (typeof val == 'string') {
        let v = val - 0
        v = Number.isNaN(v) ? 0 : Math.round(v)
        return Math.max(v, 0)
    }
    return Math.max(Math.round(val), 0)
}

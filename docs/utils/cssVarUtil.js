/**
 * @description 给某个元素设置css变量，默认设置元素为html根元素；
 * @param { String } key css变量的名称（不需要以--开头，运行方法后会补上--前缀）
 * @param { any } value css变量的值
 * @param { HTMLElement } domElement 需要设置css变量的dom元素
 * @author beibei
 * @date 2022-06-23
 */
export function setCssVar(key, value, domElement) {
    domElement.style.setProperty(`--${key}`, value)
}

/**
 * @description 给某个元素设置css颜色变量，默认设置元素为html根元素；
 * @param { String } key css颜色变量的名称（不需要以--开头，运行方法后会补上--前缀）
 * @param { any } value css颜色变量的值，需要为16进制的格式（#ffffff、#fff）
 * @param { HTMLElement } domElement 需要设置css颜色变量的dom元素
 * @author beibei
 * @date 2022-06-23
 */
export function setColorVar(key, value, domElement = document.documentElement) {
    const rgb = []
    const _c = value.replace('#', '').split('')
    for (let i = 0; i < 3; i++) {
        if (_c.length == 3) rgb.push(parseInt(_c[i].repeat(2), 16))
        if (_c.length == 6) rgb.push(parseInt(`${_c[i * 2]}${_c[i * 2 + 1]}`, 16))
    }

    setCssVar(key, rgb.join(','), domElement)
}

/**
 * @description 根据对象属性批量设置css颜色变量
 * @author beibei
 * @date 2022-06-23
 */
export function setMultiColorVar(colorMap) {
    Object.entries(colorMap).forEach(([key, value]) => {
        setColorVar(key, value)
    })
}

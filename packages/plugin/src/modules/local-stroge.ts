/**
 * 获取本地存储内容
 * @param key 键值
 * @param parse 解析函数，若未提供则使用 `JSON.parse`
 */
export const getLocalStorage = (key: string, parse: Function = JSON.parse) => {
	return parse(String(localStorage.getItem(key)));
}

/**
 * 设置本地存储内容
 * @param key 键值
 * @param value 内容
 * @param stringify 字符串化函数，若未提供则使用 `JSON.stringify`
 */
export const setLocalStorage = (key: string, value: any, stringify: Function = JSON.stringify) => {
	localStorage.setItem(key, stringify(value));
}

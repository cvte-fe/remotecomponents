export const toCamel = str => {
   if (str) {
      return str[0].toLowerCase() + str.substr(1)
   } else return ''
}

export const toHungary = str => {
   if (str) {
      return str[0].toUpperCase() + str.substr(1)
   } else return ''
}

const CURRENCY_FORMATER = new Intl.NumberFormat(undefined,{currency: 'USD' , style : 'currency'})

export const formatCurrency = (num: number)=>{return CURRENCY_FORMATER.format(num)} ; 
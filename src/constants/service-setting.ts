export  enum TypeDictionary{
    BOOL = 'bool',
    TEXT = 'text',
    NUMBER= 'number',
    OPTION = 'option',
    IP = 'ip',
    DATE_TIME = 'datetime'
}
export interface BaseSetting{
    name: string,
    type: TypeDictionary,
    value: unknown,
    description?: string,

}

export interface SettingBool extends BaseSetting{
    type: TypeDictionary.BOOL,
    value: boolean,
}

export interface SettingNumber extends BaseSetting{
    type: TypeDictionary.NUMBER,
    value: number,
    step: number,
    max: number,
    min: number
}

export  interface SettingString extends BaseSetting{
    type: TypeDictionary.TEXT,
    value: string,
    multiline?: boolean
}

export interface SettingOption extends BaseSetting{
    type: TypeDictionary.OPTION
    value: string,
    options: string[]
}

export interface SettingIP extends BaseSetting{
    type: TypeDictionary.IP,
    value: string,

}

export interface SettingDate extends BaseSetting{
    type: TypeDictionary.DATE_TIME,
    value: Date | string,
    format?: string,
    minDate?: string,
    maxDate?: string
}
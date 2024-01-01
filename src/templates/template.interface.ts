export interface IContent {
    type: 'h1' | 'body2',
    content: any | any[],
    fontWeight?: 'bold' | 'semi-bold' | 'normal',
    color?: string,
    link?: boolean,
    fontFamily?: string,
    style?: string,
    marginBottom?: number
}

export interface ITemplate {
    layout: '2/1' | 'full'
    contents: Array<IContent[]>
}
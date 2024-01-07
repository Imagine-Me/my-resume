export interface IContent {
    type: 'h1' | 'body2' | 'small' | 'list',
    content: string | IContent[],
    fontWeight?: 'bold' | 'semi-bold' | 'normal',
    color?: string,
    link?: string,
    fontFamily?: string,
    style?: string,
    marginBottom?: number,
    marginTop?: number
    align?: 'center' | 'left' | 'right' | 'justify'
}

export interface ITemplate {
    layout: '4/2' | 'full'
    contents: Array<IContent[]>
}
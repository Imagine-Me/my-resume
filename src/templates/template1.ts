import { initialData } from "src/store/data";
import type { ITemplate } from "./template.interface";

export const template1: ITemplate[] = [
    {
        layout: '2/1',
        contents: [
            [
                {
                    type: 'h1',
                    content: initialData.name,
                    marginBottom: 10
                },
                {
                    type: 'body2',
                    content: initialData.explain.join(' | ')
                }
            ],
            [
                {
                    type: 'body2',
                    content: initialData.address
                },
                {
                    type: 'body2',
                    fontWeight: 'bold',
                    content: initialData.phoneNumber
                },
                {
                    type: 'body2',
                    fontWeight: 'bold',
                    color: '#1ecc89',
                    content: initialData.email
                },
                // {
                //     type: 'body2',
                //     link: true,
                //     fontWeight: 'bold',
                //     color: '#1ecc89',
                //     content: initialData.links
                // }
            ]
        ]
    }, {
        layout: 'full', contents: [[{ type: "body2", content: ' a sa sadasd asdsa sadasda sdasd as sad fdasfd sadfasdfsadfsafasf as sadasdasd asd sad sad asdff sadfsdf sdfsdf sdfs dfsdfsafsdfsd sdfsdf sdfsf sfas safdsd fdsfsdf sdfsdfsdfgsd sdsd fgsdfg' }]]
    }
]
/**
 * Created by youngmoon on 11/7/15.
 */

import request from 'axios';

export function getList() {
    return {
        type: 'GET_ROOMLIST',
        data: [
            {
                title: 'haha'
            },
            {
                title: 'haha2'
            }
        ]
    };
}
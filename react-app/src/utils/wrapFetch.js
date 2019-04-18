import Promise from "promise-polyfill";
import {setMessage} from "../common/reducer.js";

export function wrapFetch(url, options, dispatch) {
    return new Promise(function (succeed, fail) {
        fetch(url, options)
            .then(response => {
                    if (response.ok) {
                        if (response.headers.get("content-type") === 'application/json') {
                            succeed(response.json());
                        } else {
                            succeed(response.text());
                        }
                    } else {
                        switch (response.status) {
                            case 400:
                                response.text().then(text => {
                                    dispatch(setMessage(text, 'Ошибка'));
                                });
                                fail();
                                break;
                            case 500:
                                response.text().then(text => {
                                    dispatch(setMessage(text, 'Ошибка'));
                                });
                                fail();
                                break;
                            default:
                                response.text().then(text => {
                                    dispatch(setMessage(text, 'Ошибка'));
                                });
                                fail();
                                break;
                        }
                    }
                }
            )
            .catch((error) => {
                if (String(error) === 'TypeError: Failed to fetch') {
                    dispatch(setMessage('Нет соединения', 'Ошибка'));
                } else {
                    dispatch(setMessage(error.data, 'Ошибка'));
                }
                fail();
            });
    });
}

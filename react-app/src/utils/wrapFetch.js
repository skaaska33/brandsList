import Promise from "promise-polyfill";
import {setMessage} from "../common/reducer.js";

export function wrapFetch(url, options, dispatch) {
    return new Promise(function (succeed, fail) {
            fetch(url, options)
                .then(response => {
                        let isJson = response.headers.get("content-type") === 'application/json';
                        if (response.ok) {
                            isJson ? succeed(response.json()) : succeed(response.text());
                        } else {
                            if (isJson) {
                                response.json().then(data => {
                                    dispatch(setMessage(data.detail, 'Ошибка'));
                                });
                                fail();
                            } else {
                                response.text().then(text => {
                                    dispatch(setMessage(text, 'Ошибка'));
                                });
                                fail();
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
        }
    );
}

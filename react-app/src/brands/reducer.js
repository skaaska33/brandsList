import update from "immutability-helper/index";
import {wrapFetch} from "../utils/wrapFetch";

const initialState = {
    loadingBrands: true,
    loadingBrandsAdd: false,
    nextLink: null,
    countBrands: 0,
    brandsList: []
};

const SET_LOADING_BRANDS = 'SET_LOADING_BRANDS';
const SET_LOADING_ADD_BRANDS = 'SET_LOADING_ADD_BRANDS';
const SET_BRANDS = 'SET_BRANDS';

export function setLoadingBrands(value) {
    return {
        type: SET_LOADING_BRANDS,
        value: value,
    }
}

export function setLoadingAddBrands(value) {
    return {
        type: SET_LOADING_ADD_BRANDS,
        value: value,
    }
}

export function setBrands(response) {
    return {
        type: SET_BRANDS,
        response: response
    }
}


export function brandsReducer(brands = initialState, action) {
    switch (action.type) {
        case SET_LOADING_BRANDS:
            return update(brands, {loadingBrands: {$set: action.value}});
        case SET_LOADING_ADD_BRANDS:
            return update(brands, {loadingBrandsAdd: {$set: action.value}});
        case SET_BRANDS:
            return update(brands, {
                brandsList: {$set: action.response.result},
                nextLink: {$set: action.response.next},
                countBrands: {$set: action.response.count}
            });
        default:
            return brands;
    }
}

/*Получение списка брендов при монтировании компонента и при изменение названия бренда для поиска*/
export const getFirstBrandsFromServer = function (nameToSeach) {
    return function (dispatch) {
        wrapFetch(`/rest/brands?name=${encodeURIComponent(nameToSeach.trim())}`, {credentials: "same-origin"}, dispatch)
            .then(data => {
                dispatch(setBrands(data));
                dispatch(setLoadingBrands(false));
            })
            .catch(() => {
                dispatch(setLoadingBrands(false));
            })
    }
};

/*Получение дополнительных брендов при скроллинге*/
export const getAdditionallyBrandsFromServer = function () {
    return function (dispatch, getState) {
        let state = getState();
        wrapFetch(state.brands.nextLink, {credentials: "same-origin"}, dispatch)
            .then(data => {
                data.result = state.brands.brandsList.concat(data.result);
                dispatch(setBrands(data));
                dispatch(setLoadingAddBrands(false));
            })
            .catch(() => {
                dispatch(setLoadingAddBrands(false));
            })
    }
};


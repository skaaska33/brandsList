import update from "immutability-helper/index";

const initialState = {
    loadingBrands: true,
    nextLink: null,
    brandsList: []
};

const SET_LOADING_BRANDS = 'SET_LOADING_BRANDS';
const SET_BRANDS_LIST = 'SET_BRANDS_LIST';

export function setLoadingBrands(value) {
    return {
        type: SET_LOADING_BRANDS,
        value: value,
    }
}

export function setBrandsList(list) {
    return {
        type: SET_BRANDS_LIST,
        list: list,
    }
}


export function brandsReducer(brands = initialState, action) {
    switch (action.type) {
        case SET_LOADING_BRANDS:
            return update(brands, {loadingBrands: {$set: action.value}});
        case SET_BRANDS_LIST:
            return update(brands, {brandsList: {$set: action.list}});
        default:
            return brands;
    }
}


export const getFirstBrandsFromServer = function (nameToSeach) {
    return function (dispatch) {
        dispatch(setLoadingBrands(true));
        accessFetch(`/rest/brands?${encodeURIComponent(nameToSeach.trim())}`, {credentials: "same-origin"}, dispatch)
            .then(data => {
                dispatch(setBrandsList(data.cashisers));
                dispatch(setCashiersLoading(false));
            })
            .catch(error => {
                dispatch(setLoadingBrands(false));
            })
    }
};

